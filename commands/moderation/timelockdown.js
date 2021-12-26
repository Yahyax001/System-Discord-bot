const Discord = module.require("discord.js");
require('discord-reply');
const ms = require("ms"); //Make sure to install ms package

module.exports = {
    name: "timedlockdown",
    category: "moderation",
  aliases: ["tl", "tlock"],
    description: "Start a timed lockdown in a channel",
    run: async(client, message, args) => {
        const time = args.join(" ");
        if (!time) {
        return message.lineReply("\```yml\nMODERATION: Please enter a valid period! \ns = seconds / m = minutes / h = hours\n\```")
        }
        if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
            return message.lineReply(`\```yml\nMODERATION: You need MANAGE_SERVER permission!\n\````)

        }
        message.channel.overwritePermissions([
            {
               id: message.guild.id,
               deny : ['SEND_MESSAGES'],
            },
           ],);
           const embed = new Discord.MessageEmbed()
           .setTitle("Channel Updates")
           .setDescription(`<:recluse5:827723187981778945> ${message.channel} has been placed under lockdown for ${time}  `)
           .setColor("RED");
           message.lineReply(embed)

           let time1 = (`${time}`)
           setTimeout(function(){
           message.channel.overwritePermissions([
               {
               id: message.guild.id,
               null: ['SEND_MESSAGES'],
               },
            ],);
           const embed2 = new Discord.MessageEmbed()
           .setTitle("Channel Updates")
           .setDescription(`Locked has been lifted in ${message.channel}`)
           .setColor("RANDOM");
           message.lineReply(embed2);
        }, ms(time1));
        message.delete();
    }
}
