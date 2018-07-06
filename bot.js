const Discord = require('discord.js');
const client = new Discord.Client();
const swearWords = ["darn", "shucks", "frak", "shite"];

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (swearWords.some(word => message.content.includes(word)) ) {
        message.reply("Oh no you said a bad word!!!");
        message.delete();
    }
});




//login
client.login(process.env.BOT_TOKEN);
//login
