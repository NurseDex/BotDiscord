const Discord = require('discord.js')
const bot = Discord.Client();

bot.on("ready", function (){
    console.log('s{bot.user.username} Is online!')
});

bot.login(process.env.token);
