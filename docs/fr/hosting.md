# ☁️ Hébergement Tickety

Nous verrons comment héberger Tickety par vous-même sur un VPS (Virtual Private Server). Pour tout ce qui est impie, veuillez ne pas utiliser Heroku, Glitch ni repl.it pour l'hébergement.

## Conditions préalables

> Remarque: Je ne reviendrai pas sur les bases telles que la création d'un serveur, la connexion via ssh et d'autres bases. N'hésitez pas à rechercher cela à votre rythme!

1. Familiarisez-vous avec Linux puisque ce tutoriel sera pour Ubuntu 20.4

2. Choisissez un bon fournisseur d'hébergement. Vous pouvez en rechercher par vous-même, mais je recommanderai Digital Ocean pour cela. Vous pouvez utiliser mon code de parrainage [ici](https://m.do.co/c/0ca904582444) pour gagner $100 gratuitement pendant 60 jours

    - Le plan de $5/mois serait suffisant pour Tickety

3. Avoir la configuration SSH sur le VPS pour une sécurité maximale et ne pas utiliser d'utilisateur root

    - Veuillez consulter [cet article](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04) si vous ne savez pas comment créer de nouveaux utilisateurs

     - Assurez-vous également que les pare-feu sont correctement configurés

### Mettre À Jour La Liste Des Référentiels

```bash
sudo apt update
```

### Installation De Node.js v15

```bash
curl -sL https://deb.nodesource.com/setup_15.x | sudo -E bash -

sudo apt install nodejs

node --version
```

Exécutez la dernière commande pour voir si la dernière mise à jour de Node.js version 15 est installée correctement

### Installation De Tickety

Ici, je vais télécharger Tickety dans le répertoire `/bin`, mais n'hésitez pas à le télécharger où vous voulez
```bash
cd /bin

git clone https://github.com/tommyshelby9121/TicketyBot.git
```

### Installation Des Dépendances De Projet

```bash
cd TicketyBot

npm install

# Début Tickety
npm run start

# Désactiver Tickety
ctrl+C
```

### Configurer PM2 Process Manager

```bash
sudo npm i pm2 -g

pm2 start dist/index.js

# Pour vous assurer que le bot est en ligne au redémarrage
pm2 startup ubuntu
```