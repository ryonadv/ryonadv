const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    
    if (sender.id === '464797765457674251') {
        return;
    }    
    
});




//login
client.login(process.env.BOT_TOKEN);
//login
