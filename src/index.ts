// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../config");
import { readdirSync } from "fs";
import { join } from "path";
import { Message } from "discord.js";
import { TicketyClient } from "./struct/Client";
const client:TicketyClient = new TicketyClient({
   token: config.token,
   prefix: config.prefix,
});

// Command Handler
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const command = require(`./commands/${file}`);
    client.commands.set(command.default.name, command.default);
    console.log(`${file} loaded`);
}

// Ready Event
client.once("ready", () => {
   console.log(`Logged in as ${client.user?.tag ?? ""}`);

   try {
       void client.user?.setPresence({
           status: "dnd",
           activity: {
               name: config.presence_message,
               type: config.presence_type
           },
       });
   }
   catch (err) {
       console.error(`Could not set startup presence: ${err}`);
       process.exit(1);
   }
});

// Client Login
client.login(client.config.token).catch(err => console.error(err));