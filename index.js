const Discord = require('discord.js');
const client = new Discord.Client();
var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send('hello world');
});



client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	console.log("type" +message.channel)
	if(message.author.bot) return
		
	if(message.channel.type == 'dm'){
		if (message.content === 'ping') {
			message.reply('pong');
		}
		console.log(`Message: ${message}`);
		console.log('here 1'+message.mentions);
		console.log('here 2'+message.mentions.users);
		console.log('here 3'+message.mentions.roles);
		console.log('here 4'+message.mentions.channels);
		console.log('here 5'+message.mentions.everyone);
	}
});

client.on('presenceUpdate', function(oldMember, newMember) {
	console.log(oldMember.presence, '=>', newMember.presence);
});

client.login(process.env.DISCORD_TOKEN);


app.listen(process.env.PORT || 5000);
