const { MessageEmbed } = require("discord.js");
require('discord-reply');
const nekos = require("nekos.life");
const colors = require('./../../colors.json')
const {
  sfw: { slap },
} = new nekos();
module.exports = {
    name: "slap",
    category: "fun",
    description: "Get's a slap reaction!",
    aliases: ["SLAP", "Slap"],
    usage: "<user>",
    accessableby: "",
  run: async (client, message, args) => {
    const { url } = await slap().catch(() => {});

    if (!url) return message.lineReply(`:x: Could not connect to nekos.life...`);

    const embed = new MessageEmbed();

    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.lineReply(
        `${
          [`Ouch! How dare you slap me!`, `Stop that!`, `It hurts! ;-;`][
            Math.floor(Math.random() * 2)
          ]
        }`
      );
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.lineReply(`Wai~ Seriously!?`);
    } else if (message.mentions.members.size) {
      return message.lineReply(
        embed
          .setColor(colors.uptime)
          .setDescription(
            `${message.member} slapped ${message.mentions.members.first()}!`
          )
          .setImage(url)
      );
    } else {
      return message.lineReply(
        `${message.member}, are you practicing to slap or something?`
      );
    }
  },
};
