// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../../config");
import { TicketyClient } from "../struct/Client";
import { DMChannel, Message, MessageReaction, PartialUser, User } from "discord.js";

export default {
    name: "close",
    description: "Closes an existing ticket",
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async execute(client:TicketyClient, message:Message) {
        if (!(message.channel instanceof DMChannel) && message.channel.parentID !== config.ticket_parent) return message.channel.send("❌ This command can only be executed inside a ticket!");

        if (config.confirm_ticket_close === true && !message.member?.roles.cache.get(config.support_role)) {
            await message.channel.send("⚠ Are you sure you want to close this ticket?").then(async (msg) => {
                await msg.react("✅");
                await msg.react("❌");

                client.once("messageReactionAdd", async (reaction:MessageReaction, user:User|PartialUser) => {
                    if (user.bot) return;
                    if (message.author.id !== user.id) return;
                    if (reaction.emoji.name === "✅") return await message.channel.delete();
                    if (reaction.emoji.name === "❌") return message.channel.send("✅ Aborted closing ticket!");
                });
            }).catch(err => console.error(err));
        }
        else {
            await message.channel.delete();
        }
    }
}