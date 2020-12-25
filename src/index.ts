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