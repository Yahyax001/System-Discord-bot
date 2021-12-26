const Discord = require('discord.js');
require('discord-reply');

module.exports = {
	name: 'snipe',
	cooldown: 1000,
	usage: '`a!snipe`',
	description: 'get the deleted message',
	aliases: ['s'],
	run: async (client, message, args) => {
		const msg = client.snipes.get(message.channel.id);
		if (!msg)
			return message.lineReply(
				'There are no deleted messages in this channel!'
			);
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author)
			.setDescription(msg.content)
			.setThumbnail(
				'https://cdn.discordapp.com/avatars/900060352014868531/a14c9e1f1ee7166918b13e6977164579.webp'
			)
			.setTimestamp();
		if (msg.image) embed.setImage(msg.image);

		message.lineReply(embed);
	}
};

