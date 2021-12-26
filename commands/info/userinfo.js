const {
  MessageEmbed
} = require("discord.js")
require('discord-reply');
const colors = require('./../../colors.json')
const moment = require("moment")

module.exports = {
  name: "userinfo",
  category: "info",
  aliases: ["whois",
    "user"],
  usage: "<MENTION>",
  description: "Get advance stats of given person or yourself",
  run: async (client, message, args) => {


    let user;

    if (!args[0]) {
      user = message.member;
    } else {





      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => {
        return message.lineReply(":x: Unable to find this Person")
      })
    }

    if (!user) {
      return message.lineReply(":x: Unable to find this person!")
    }


    //OPTIONS FOR STATUS

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    //NOW BADGES
    let badges = await user.user.flags
    badges = await badges ? badges.toArray(): ["None"]

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new MessageEmbed()
    

    
    //EMBED COLOR BASED ON member
    embed.setColor(user.displayHexColor === "#000000" ? "#ffffff": user.displayHexColor)

    //OTHER STUFF
    .addField("<a:739390343916814398:924748483418808320> __**User Info:**__", "**Look Under**")



    //CHECK IF USER HAVE NICKNAME
    if (user.nickname !== null) embed.addField("Nickname", user.nickname)
    embed.addField("<a:739390343916814398:924748483418808320> Joined At", moment(user.joinedAt).format("LLLL"))
    .addField("<a:739390343916814398:924748483418808320> Account Created At", moment(user.user.createdAt).format("LLLL"))
    .addField("<a:739390343916814398:924748483418808320> More Info", `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`)
    .addField("<a:739390343916814398:924748483418808320> Flags", newbadges.join(", ").toLowerCase() || "None")
    .setFooter("Moon Team")



    return message.lineReply(embed).catch(err => {
      return message.lineReply("Error : " + err)
    })



  }



}
