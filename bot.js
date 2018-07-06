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

client.on('message', message => {
    if (message.content === 'Ryon') {
    	message.reply('RyonADV este un smecher.');
  	}
});

client.on('message', message => {
    if (message.content === 'Ryonadv') {
    	message.reply('RyonADV este un smecher.');
  	}
});

client.on('message', message => {
    if (message.content === 'RyonADV') {
    	message.reply('RyonADV este un smecher.');
  	}
});

client.on('message', message => {
    if (message.content === 'ryonAdv') {
    	message.reply('RyonADV este un smecher.');
  	}
});

client.on('message', message => {
    if (message.content === 'ryonADV') {
    	message.reply('RyonADV este un smecher.');
  	}
});

client.on('message', message => {
    if (message.content === 'ms') {
    	message.reply('Cu placere!');
  	}
});

client.on('message', message => {
    if (message.content === 'multumesc') {
    	message.reply('Cu placere!');
  	}
});

client.on('message', message => {
    if (message.content === 'Multumesc!') {
    	message.reply('Cu placere!');
  	}
});

client.on('message', message => {
    if (message.content === 'Merci!') {
    	message.reply('Cu placere!');
  	}
});

client.on('message', message => {
    if (message.content === 'Mersi') {
    	message.reply('Cu placere!');
  	}
});

client.on('message', message => {
    if (message.content === 'Mersi!') {
    	message.reply('Cu placere!');
  	}
});

client.on('message', message => {
    if (message.content === 'Wilbert') {
    	message.reply('Un gamer adevarat.');
  	}
});

client.on('message', message => {
    if (message.content === 'Wilbert.') {
    	message.reply('Un gamer adevarat.');
  	}
});

client.on('message', message => {
    if (message.content === 'Mihai') {
    	message.reply('Un gamer adevarat.');
  	}
});

client.on('message', message => {
    if (message.content === 'Mohai') {
    	message.reply('Un gamer adevarat.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
