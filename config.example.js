module.exports = {
    // Discord Config
    token: "",  // Add your bot token here
    prefix: "!",  // Add preferred bot prefix
    presence_type: "WATCHING",  // Presence can be a type of PLAYING, STREAMING, LISTENING, WATCHING or COMPETING
    presence_message: "Your Tickets",  // Presence message means eg: Watching <something>

    // Support Role
    support_role: "",  // This is the support role id, users with the role can access/see all tickets created.
                                         // Also, make sure you add the role id, not the name of the role

    // Logging
    log_command_executes: true,  // This tells Tickety whether to log command executes such as creating tickets, closing tickets and more
    ticket_log_channel: "",  // This is the id of the channel where the logged messages appear

    // Creating Ticket
    ticket_parent: "",  // This is the id of the category where tickets are to be created under
    ticket_name_type: "number",  // This tells Tickety how to name the ticket, currently the only supported types for this is uid and number
                              // uid means that the bot will add the user's id after ticket, and number means it will add an incrementing number

    // DMing User
    dm_user: true,  // This tells Tickety whether to dm the user when certain commands are executed.

    // Closing Ticket
    confirm_ticket_close: true,  // This tells Tickety whether to ask the user if they want to close the ticket when the close command is executed
    create_transcripts: true,  // This tells Tickety to generate transcripts. They are a log of all the chat that happened in the ticket
    save_transcripts: true,  // This tells Tickety to save the transcript without deleting it from the "transcripts" folder
};