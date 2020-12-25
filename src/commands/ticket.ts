// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../../config");
import { TicketyClient } from "../struct/Client";
import { Message } from "discord.js";
import { logCommandExecutes } from "../utils/logCommandExecutes";

export default {
    name: "ticket",
    description: "Create a new ticket",
    aliases: ["new"],
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async execute(client:TicketyClient, message:Message, args:ReadonlyArray<string>) {
        try {
            let reason = args.slice(0).join(" ");
            if (!reason || reason === "") reason = "No Reason Specified";

            const ticket = await message.guild?.channels.create(`ticket-${message.author.id}`, {
                parent: config.ticket_parent,
                type: "text",
                topic: `Reason: ${reason}`,
                permissionOverwrites: [{
                    id: message.guild?.id,
                    deny: ["VIEW_CHANNEL"],
                }, {
                    id: message.author.id,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ADD_REACTIONS", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS"]
                }, {
                    id: config.support_role,
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ADD_REACTIONS", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "USE_EXTERNAL_EMOJIS"]
                }],
            });
            await message.channel.send(`✅ Your ticket has been created at ${ticket}`);
            logCommandExecutes(message, `Ticket ${ticket} has been created by ${message.author.tag}`);
        }
        catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
}

