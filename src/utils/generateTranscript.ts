import { Collection } from "discord.js";
import { appendFile, readFile, writeFile } from "fs/promises";
import { JSDOM } from "jsdom";
const dom = new JSDOM();
const document = dom.window.document;

export async function generateTranscript(message:any, ticket:any) {
    let messageCollection = new Collection<any, any>();
    let channelMessages = await ticket.messages.fetch({
        limit: 100,
    }).catch((err: any) => console.error(err));

    messageCollection = messageCollection.concat(channelMessages);

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
}