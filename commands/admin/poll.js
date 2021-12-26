const { MessageEmbed, Discord } = require("discord.js");
require('discord-reply');

module.exports = {
  name: "poll",
	cooldown:10000,
  category: "Info",
  description: "poll Your Message To Channel",
	uimage:'https://media.discordapp.net/attachments/803290746496221264/803502251074125834/unknown.png',
  usage: "`poll <#channel> <content>`",
  run: async (client, message, args) => {
  
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply(":x: You don't have permission to use this command!\n**Required Permission:** ``ADMINISTRATOR``");

    let sayChannel = message.mentions.channels.first();
    if (!sayChannel) return message.lineReply(`:x: ${message.author} mention a Channel first!`)
        let sayMsg = args.slice(1 || 0, args.length).join(" ");
        if (!sayMsg) return message.lineReply(`:x: Say Some Message To Poll!`) 
        var role = message.member.highestRole;
        var embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(sayMsg)
            .setAuthor('New Poll', message.guild.iconURL)
            .setFooter('Poll By: ' + `${message.author.username}`)
        .setTimestamp()
        message.lineReply(`:white_check_mark: Your poll Is Ready On <#${sayChannel.id}>!`)
        sayChannel.send({embed}).then(m => {
            m.react('✅');
            m.react('❌');
           }) 
    .catch({});

    }
};
