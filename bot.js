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
        message.reply("Oh no you said a bad word!!!");
        message.delete();
    }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);
​
  if (newUsers[guild.id].size > 10) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
    guild.channels.find("name", "general").send("Welcome our new users!\n" + userlist);
    newUsers[guild.id].clear();
  }
});
​
client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
});


//login
client.login(process.env.BOT_TOKEN);
//login
