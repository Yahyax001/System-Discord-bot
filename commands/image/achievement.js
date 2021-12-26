const { MessageEmbed } = require("discord.js");
require('discord-reply');

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  aliases: ["ach"],
  category: "Image",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
      message.lineReply(e);
  },
};