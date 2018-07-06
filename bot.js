const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === 'ryon') {
    	message.reply('RyonADV este un smecher.');
  	}
});

client.on('message', message => {
    if (message.content === 'ryonadv') {
    	message.reply('RyonADV este un smecher.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
