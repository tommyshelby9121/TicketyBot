import { Client, Collection } from "discord.js";

type TicketyConfig = {
    token: string,
    prefix: string,
};

export class TicketyClient extends Client {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    commands = new Collection<any, any>();
    config: TicketyConfig;

    constructor(config: TicketyConfig) {
        super({
            disableMentions: "everyone",
        });
        this.config = config;
    }
}