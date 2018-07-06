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
    
    if (message.content.includes === 'test') {
        message.delete():
        message.reply('mesajul tau a fost sters deoarece ai folosit un cuvant sau mai multe cuvinte indecente.')
    }
});




//login
client.login(process.env.BOT_TOKEN);
//login
