# ☁️ Hosting Tickety

We will be going over on how to host Tickety by yourself on a VPS (Virtual Private Server). For all that is unholy, please don't use Heroku, Glitch nor repl.it for hosting.

## Prerequisites

> Note: I will not be going over the basics such as creating a server, logging in via ssh and other basics. Feel free to research that on your own time!

1. Familiarize yourself with Linux since this tutorial will be for Ubuntu 20.4

2. Choose a good hosting provider. You can look up some for yourself, but I will be recommding Digital Ocean for this. You can use my referral code [here](https://m.do.co/c/0ca904582444) to earn $100 for free for 60 days

    - The $5/mo plan would be plenty for Tickety
    
3. Have SSH setup on the VPS for maximum security and don't use root user.

    - Please check out [this article](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04) if you're unsure how to create new users
    - Also make sure you have proper firewalls setup
    
### Update Repositories List

```bash
sudo apt update
```

### Installing Node.js v15

```bash
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt install nodejs

node --version
```

Run the last command to see if the latest update of Node.js version 15 is installed properly

### Installing Tickety

Here, I will be downloading Tickety into the `/bin` directory, but feel free to download it anywhere you like

```bash
cd /bin

git clone https://github.com/tommyshelby9121/TicketyBot.git
```

### Installing Project Dependencies

```bash
cd TicketyBot

npm install

# Start Tickety
npm run start

# Turn Tickety Off
ctrl+C
```

### Setup PM2 Process Manager

```bash
sudo npm i pm2 -g

pm2 start dist/index.js

# To make sure bot comes online on reboot
pm2 startup ubuntu
```