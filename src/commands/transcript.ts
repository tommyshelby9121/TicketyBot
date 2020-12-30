// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../../config");
import { TicketyClient } from "../struct/Client";
import { DMChannel, Message, MessageAttachment } from "discord.js";
import { generateTranscript } from "../utils/generateTranscript";
import { unlink } from "fs/promises";

export default {
    name: "transcript",
    description: "Generates a transcript",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async execute(client:TicketyClient, message:Message) {
        await generateTranscript(message, message.channel);
        if (!(message.channel instanceof DMChannel)) {
            const transcript = new MessageAttachment(`./src/transcripts/${message.channel.name}.html`);
            await message.channel.send(transcript).then(() => {
                if (config.save_transcripts === true) {
                    return;
                }
                else {
                    if (!(message.channel instanceof DMChannel)) {
                        unlink(`./src/transcripts/${message.channel.name}.html`);
                    }
                }
            }).catch(err => console.error(err));
        }
    }
}