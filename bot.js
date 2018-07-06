const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('RyonADV - /help ; /version');

});

//limbaj
if (msg.includes('re')) {
    message.delete();
    message.reply('ai fost verificat de catre RyonADV BOT si ti-am trimis in privat.')
}
//limbaj






//verificare


client.on('message', message => {
    if (message.content === '/skemaryon') {
    	message.reply('ai fost verificat de catre RyonADV BOT si ti-am trimis in privat.')
        message.author.sendMessage("Momentan nu ai acces sa vezi comanda ascunsa pentru a primi grad.");
  	}
});

client.on('message', message => {
    if (message.content === '/ryonskema') {
    	message.reply('ai fost verificat de catre RyonADV BOT si ti-am trimis in privat.')
        message.author.sendMessage("Momentan nu ai acces sa vezi comanda ascunsa pentru a primi grad.");
  	}
});


//verificare

client.on('message', message => {
    if (message.content === '/help') {
    	message.reply('`/info - Vezi ping. ; /ryonskema sau /skemaryon - Primesti comanda ascunsa.`');
  	}
});  

client.on('message', message => {
    if (message.content === '/version') {
    	message.reply('`Botul contine: 1) Comenzile de la [/help]. ; 2) Un sistem de verificare si anuntare a cuvintelor vulgare. ; 3) Un sistem de reply (facut la misto).`');
  	}
}); 


//comenzi


client.on("message", async message => { 
    
    if(message.content === '/info') {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
});



//comenzi



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
