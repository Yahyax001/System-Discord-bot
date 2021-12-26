const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('discord-reply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Information",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
    .setTitle(`Moon Bot`)
    .setDescription(`**Click the buttons Below to invite and join our support server!**`)
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter(`Requested by: ${message.author.tag}`)
    message.react('<a:verified:919554249703178251> ')


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=900060352014868531&permissions=8&scope=bot`);
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/hakQbMyg`);


      return message.channel.send(helpEmbed,{
        button: [button1,button2],
   });

  },
};