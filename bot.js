const Discord = require('discord.js');
const client = new Discord.Client();
const swearWords = ["pula", "pizda", "sugi", "sug", "mata", "ma-ta", "fututi", "fanina", "mati", "matii", "ma-ti", "ma-tii", "morti", "mortii", "chizda", "Pizda", "Sugi", "Sug", "mMta", "Ma-ta", "Fututi", "Fanina", "Mati", "Matii", "Ma-ti", "Ma-tii", "Morti", "Mortii", "Chizda"];


const list = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don't count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];
const rand = Math.floor(Math.random() * list.length);

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
    
    if (message.content === 'coin') {
    	message.reply(list[rand])
  	}    
    
});


//login
client.login(process.env.BOT_TOKEN);
//login
