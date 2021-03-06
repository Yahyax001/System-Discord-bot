const db = require("quick.db");
require('discord-reply');

module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.lineReply(
        "\```yml\nMODERATION: You need MANAGE_ROLES permission!\n\```"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.lineReply("\```yml\nMODERATION: I do not have enough permissions!\n\```");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.lineReply("\```yml\nMODERATION: Please mention a user to unmute!\n\```");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.lineReply("\```yml\nMODERATION: User is already unmuted! What am i supposed to do?\n\```");
    }

    user.roles.remove(muterole)

    await message.lineReply("\```yml\nMODERATION: User is now unmuted!\n\```");

    user.send(`:warning: You are now unmuted from **${message.guild.name}**!`);
    
    message.delete()
  }
};
