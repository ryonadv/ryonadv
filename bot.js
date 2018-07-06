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
    
    if (msg.includes('test') || msg.includes('testv2') || msg.includes('testv3')) {
        message.reply('mesajul tau a fost sters deoarece ai folosit un cuvant sau mai multe cuvinte indecente.');
        message.delete();

    }
});




//login
client.login(process.env.BOT_TOKEN);
//login
