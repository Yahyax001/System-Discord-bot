const Discord = require("discord.js");
require('discord-reply');
const colors = require('./../../colors.json')

module.exports = {
  name: "announce",
  aliases: ["aa"],
  description: "Announce Your Message To Anothr Channel",
  usage: "announce #channel your message",
  run: async (client, message, args) => {
    if (!message.member.hasPermission(["ADMINISTRATOR"]))
      return message.lineReply(":x: You don't have premmsions to do that!");

    let inline = true;
    let sayChannel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!sayChannel)
      return message.lineReply(
        `:x: ${message.author} mention a channel First`
      );
    let sayMsg = args
      .slice(1)
      .join(" ")
      .split(" | ");

    if (!sayMsg[1]) sayMsg[1] == "#39d822";
    if (!sayMsg)
      return message.lineReply(
        ` | Say Some Message To Announce!`
      );
    let role = message.member.highestRole;
    let embed = new Discord.MessageEmbed()
      .setColor(sayMsg[1])
      .setDescription(sayMsg[0]);

    message.delete();
    message.channel
      .send(
        `✔️ | successfully Announced Your Message To ${sayChannel}`
      )
      .then(m => m.delete({ timeout: 2000 }));

    sayChannel.send({ embed }).catch(console.error);
  }
};

















/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */