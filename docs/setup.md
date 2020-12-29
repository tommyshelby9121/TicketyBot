# 🔨 Setting up Tickety
> Note: This bot is intended to be run/hosted by yourself. To keep it online, you must keep the bot process running. If you are unsure how to host the bot, please check [hosting Tickety](https://github.com/tommyshelby9121/TicketyBot/blob/master/docs/hosting.md) for an in-dept explanation.

## Prerequisites

1. Create a bot application via the [Discord Developer Portal](https://discord.com/developers/applications)
    
    - Tickety does require special permissions. Please give the bot Administrator permission to simplify the process
    
2. Invite the bot to your guild of choice

    - Note: Tickety does not work in multiple guilds. So please setup a seperate instance for each guild you wish you use it for
    
3. [Install Node.js](https://nodejs.org) version 15 or higher

    - Anything below Node.js v15 is unsupported. Check out [hosting Tickety](https://github.com/tommyshelby9121/TicketyBot/blob/master/docs/hosting.md) to learn how to install Node.js on a VPS
    
4. Download the version of Tickety from the releases section and extract to a folder

    - The `master` branch contains new features that are to be added to an official release. However, these may contain a few bugs but most of them are ironed out when a release is created
    
5. In the bot's folder, rename `config.example.js` to `config.js`