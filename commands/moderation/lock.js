const Discord = module.require("discord.js");
require('discord-reply');
const colors = require('./../../colors.json')

module.exports = {
   name: "lock",
   description: "Locks a Channel",
   usage: "lock <channel>",
  args: true,
 category: "moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.lineReply("\```yml\nMODERATION: You need MANAGE_SERVER permission!\n\```")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor(colors.uptime)
   await message.lineReply(embed);
   message.delete();
}
}
