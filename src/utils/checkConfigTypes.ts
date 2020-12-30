// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function checkConfigTypes(config:any) {
    if (typeof config.token !== "string") throw new TypeError("Token should be a type of String");
    if (typeof config.prefix !== "string") throw new TypeError("Prefix should be a type of String");
    if (typeof config.presence_type !== "string") throw new TypeError("Presence Type should be a type of String");
    if (config.presence_type !== "PLAYING" && config.presence_type !== "STREAMING" && config.presence_type !== "LISTENING" && config.presence_type !== "WATCHING" && config.presence_type !== "COMPETING") throw new Error("Presence Type should be PLAYING, STREAMING, LISTENING, WATCHING or COMPETING")
    if (typeof config.presence_message !== "string") throw new TypeError("Presence Message should be a type of String");
    if (typeof config.support_role !== "string") throw new TypeError("Support Role should be a type of String");
    if (typeof config.log_command_executes !== "boolean") throw new TypeError("Log Command Executes should be a type of Boolean");
    if (typeof config.ticket_log_channel !== "string") throw new TypeError("Ticket Log Channel should be a type of String");
    if (typeof config.ticket_parent !== "string") throw new TypeError("Ticket Parent should be a type of String");
    if (typeof config.ticket_name_type !== "string") throw new TypeError("Ticket Name Type should be a type of String");
    // eslint-disable-next-line no-constant-condition
    if (config.ticket_name_type !== "uid" && config.ticket_name_type !== "number") throw new Error("Ticket Name Type should be uid or number");
    if (typeof config.dm_user !== "boolean") throw new TypeError("DM User should be a type of Boolean");
    if (typeof config.create_transcripts !== "boolean") throw new TypeError("Create Transcripts should be a type of Boolean");
    if (typeof config.save_transcripts !== "boolean") throw new TypeError("Save Transcripts should be a type of Boolean");
}