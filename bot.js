const Discord = require('discord.js');
const client = new Discord.Client();
const swearWords = ["pula", "pizda", "sugi", "sug", "mata", "ma-ta", "fututi", "fanina", "mati", "matii", "ma-ti", "ma-tii", "morti", "mortii", "chizda", "Pizda", "Sugi", "Sug", "mMta", "Ma-ta", "Fututi", "Fanina", "Mati", "Matii", "Ma-ti", "Ma-tii", "Morti", "Mortii", "Chizda"];

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (swearWords.some(word => message.content.includes(word)) ) {
        message.reply("mesajul tau a fost sters deoarece a fost detectat un cuvant indecent.");
        message.delete();
    }
});


//login
client.login(process.env.BOT_TOKEN);
//login
