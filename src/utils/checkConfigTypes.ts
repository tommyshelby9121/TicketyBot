// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function checkConfigTypes(config:any) {
    if (typeof config.token !== "string") throw new TypeError("Token should be a type of String");
    if (typeof config.prefix !== "string") throw new TypeError("Prefix should be a type of String");
    if (typeof config.presence_type !== "string") throw new TypeError("Presence Type should be a type of String");
    if (typeof config.support_role !== "string") throw new TypeError("Support Role should be a type of String");
    if (typeof config.log_command_executes !== "boolean") throw new TypeError("Log Command Executes should be a type of Boolean");
    if (typeof config.ticket_log_channel !== "string") throw new TypeError("Ticket Log Channel should be a type of String");
    if (typeof config.ticket_parent !== "string") throw new TypeError("Ticket Parent should be a type of String");
    if (typeof config.dm_user !== "boolean") throw new TypeError("DM User should be a type of Boolean");
    if (typeof config.create_transcripts !== "boolean") throw new TypeError("Create Transcripts should be a type of Boolean");
}