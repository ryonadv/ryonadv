const Discord = require('discord.js');
const client = new Discord.Client();
const swearWords = ["pula", "Suck", "suck", "Shit", "shit", "Fut", "fut", "Dick", "dick", "pizda", "sugi", "sug", "mata", "ma-ta", "fututi", "fanina", "mati", "matii", "ma-ti", "ma-tii", "morti", "mortii", "chizda", "Pizda", "Sugi", "Sug", "mMta", "Ma-ta", "Fututi", "Fanina", "Mati", "Matii", "Ma-ti", "Ma-tii", "Morti", "Mortii", "Chizda", "ratat", "Ratat", "Coaie", "coaie"];
//, "pizda"
const slowmode_mentions = new Map();
const slowmode_links = new Map();
const slowmode_attachments = new Map();
const ratelimit = 7500; // within 7.5 seconds
const logChannel = "465090519681466368"; // logs channel id

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'RyonADV - /skema - EN / RO BOT',
            type: "STREAMING",
            url: "https://www.twitch.tv/ryonadvbotnamtwitchimiparerau"
        }
    });
});


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
	
    if (message.content === '/skema') {
    	message.reply('```css v0.3 -> Custom Status Game ; Anti-Swear System ; Anti-Spam System ```');
  	}	
	
    if (swearWords.some(word => message.content.includes(word)) ) {
        message.reply("mesajul tau a fost sters deoarece a fost detectat un cuvant indecent.");
        message.delete();
    }
    
//gg
    function log(logmessage) {
		if (message.guild.channels.has(logChannel)) {
			message.guild.channels.get(logChannel).send({ embed: logmessage}).then().catch(err => console.log(err));
		}
	}

	// set the max mentions/links/attachments that are allowed
	let banLevel = {
		"mentions": 10,
		"links": 10,
		"attachments": 10
	};

	// Ignore bots, DMs, Webhooks, if this bot has no perms, and Mods
	if (message.author.bot || !message.guild || !message.member || !message.guild.member(client.user).hasPermission("BAN_MEMBERS") || message.member.hasPermission("MANAGE_MESSAGES")) return;

	// Ignore if 1 mention and it's a bot (bot interaction)
	if (message.mentions.users.size == 1 && message.mentions.users.first().bot) return;

	// If there is no trace of the author in the slowmode map, add them.
	let entry_mentions = slowmode_mentions.get(message.author.id);
	let entry_links = slowmode_links.get(message.author.id);
	let entry_attachments = slowmode_attachments.get(message.author.id);

	if (!entry_mentions) {
		entry_mentions = 0;
		slowmode_mentions.set(message.author.id, entry_mentions);
	}
	if (!entry_links) {
		entry_links = 0;
		slowmode_links.set(message.author.id, entry_links);
	}
	if (!entry_attachments) {
		entry_attachments = 0;
		slowmode_attachments.set(message.author.id, entry_attachments);
	}

	// Count the unique user and roles mentions, links and attachments
	entry_mentions += message.mentions.users.size + message.mentions.roles.size;
	entry_links += message.embeds.length;
	entry_attachments += message.attachments.size;
	// Set all the amounts in the slowmode maps
	slowmode_mentions.set(message.author.id, entry_mentions);
	slowmode_links.set(message.author.id, entry_links);
	slowmode_attachments.set(message.author.id, entry_attachments);

	// If the total number of links in the last ratelimit is above the server ban level, ban user
	if (entry_links > banLevel.links) {
		message.member.ban(1).then(member => {
			message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`link spam\``);
			log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Posting too many links (${entry_links}x)`));
			slowmode_links.delete(message.author.id);
		})
		.catch(e => {
			log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
		});
	} else {
		setTimeout(()=> {
			entry_links -= message.embeds.length;
			if(entry_links <= 0) slowmode_links.delete(message.author.id);
		}, ratelimit);
	}

	if (entry_mentions > banLevel.mentions) {
		message.member.ban(1).then(member => {
			message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`mention spam\``);
			log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Mentioning too many users (${entry_mentions}x)`));
			slowmode_mentions.delete(message.author.id);
		})
		.catch(e => {
			log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
		});
	} else {
		setTimeout(()=> {
			entry_mentions -= message.mentions.users.size + message.mentions.roles.size;
			if(entry_mentions <= 0) slowmode_mentions.delete(message.author.id);
		}, ratelimit);
	}

	if (entry_attachments > banLevel.attachments) {
		message.member.ban(1).then(member => {
			message.channel.send(`:ok_hand: banned \`${message.author.tag}\` for \`image spam\``);
			log(new Discord.RichEmbed().setTitle(':hammer: Banned').setColor(0xFF0000).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Posting too many images (${entry_attachments}x)`));
			slowmode_attachments.delete(message.author.id);
		})
		.catch(e => {
			log(new Discord.RichEmbed().setTitle(':x: ERROR').setColor(0x000001).setTimestamp().addField('User', `${message.author.tag} (${message.author.id})`).addField('Reason', `Could not ban because they have a higher role`));
		});
	} else {
		setTimeout(()=> {
			entry_attachments -= message.attachments.size;
			if(entry_attachments <= 0) slowmode_attachments.delete(message.author.id);
		}, ratelimit);
	}
 //gg
  
    
});


//login
client.login(process.env.BOT_TOKEN);
//login
