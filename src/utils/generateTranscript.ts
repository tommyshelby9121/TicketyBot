import { Collection } from "discord.js";
import { appendFile, readFile, writeFile } from "fs/promises";
import { JSDOM } from "jsdom";
const dom = new JSDOM();
const document = dom.window.document;

export async function generateTranscript(message:any, ticket:any) {
    // Create collection
    let messageCollection = new Collection<any, any>();
    // Fetch Messages with a 100 message limit
    let channelMessages = await ticket.messages.fetch({
        limit: 100,
    }).catch((err: any) => console.error(err));

    messageCollection = messageCollection.concat(channelMessages);

    // Find more messages if size is collection size is > 100
    while(channelMessages.size === 100) {
        const lastMessageId = channelMessages.lastKey();
        channelMessages = await ticket.messages.fetch({
            limit: 100,
            before: lastMessageId,
        }).catch((err: any) => console.error(err));
        if (channelMessages) {
            messageCollection = messageCollection.concat(channelMessages);
        }
    }
    // Reverse array (So this is in old messages at the top)
    const msgs = messageCollection.array().reverse();
    const data = await readFile("./src/transcripts/template.html", "utf-8").catch(err => console.error(err));
    if (data) {
        // Copy styling from data to new transcript file
        await writeFile(`./src/transcripts/${ticket.name}.html`, data).catch(err => console.error(err));
        // Guild Info
        const guildElement = document.createElement('div');
        const guildName = document.createTextNode(message.guild.name);
        const guildImg = document.createElement('img');
        guildImg.setAttribute('src', message.guild.iconURL());
        guildImg.setAttribute('width', '100');
        guildElement.appendChild(guildImg);
        guildElement.appendChild(guildName);
        // Write Guild Info to transcript file
        await appendFile(`./src/transcripts/${ticket.name}.html`, guildElement.outerHTML).catch((err: any) => console.log(err));

        // Run for each fetched message
        for (const msg of msgs) {
            // Create Parent Container
            const parentContainer = document.createElement("div");
            parentContainer.className = "parent-container";

            // User Avatar
            const avatarDiv = document.createElement("div");
            avatarDiv.className = "avatar-container";
            const img = document.createElement("img");
            img.setAttribute("src", msg.author.displayAvatarURL());
            img.className = "avatar";
            avatarDiv.appendChild(img);
            // Append avatarDiv to parentContainer
            parentContainer.appendChild(avatarDiv);
        }
    }
}