const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
    
      


    const embed = new Discord.MessageEmbed()
    .setTitle('MoonBot Commands Help | Prefix: $')
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Page Home\n"+ client.user.username + "", client.user.displayAvatarURL())
    .setImage(`https://cdn.discordapp.com/attachments/817657005962428442/820595486788288512/20210308_190448.gif`)
    .setDescription("<:X_FudgeSipButStatic:923991823301615656> __**My Features:**__ \nMyper help You to Protect Your server \n<:admins:921745689518690314> __**Commands:**__\nTo get all the commands, just simply click on the buttons below!\n<a:verified:919554249703178251> __**Bot Info:**__\n```yml\nBot ID: 900060352014868531\nDeveloper: ! Yahya#1111\nPrefix : $```\n__**<:xD:921698954461212722> Support Server:**__\n[Click Here to Join!](https://discord.gg/mjPpZZbf)")
    message.react('<a:verified:919554249703178251> ')

    // ----------------------- ADMIN AND MOD ----------------------- 

    const embed1 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#42768f")
    .setTitle('<:staff:919546487875203073> Admin & Moderator Commands <:staff:919546487875203073>')
    .setDescription("** Admin Commands [8]**\n ```nuke, poll, react, snipe, tweet, anti-alt, autorole, roleall``` \n** Moderator Commands [12]**\n```addrole, ban, clear, kick, lock, mute, removerole, slowmode, timelockdown, unlock, unmute, uptime```\n")
    .setFooter("Help Menu 1")

    // ----------------------- ECONOMY AND INFO ----------------------- 

    const embed2 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#42768f")
    .setTitle('<a:xD1:923994877690249236> Info & Economy Commands <a:xD1:923994877690249236>')
    .setDescription("** Info Commands [7]**\n ```avatar, badge, botinfo, roleinfo, servericon, serverinfo, userinfo``` \n** Economy Commands [0]**\n```Soon```\n")
    .setFooter("Help Menu 2")

    // ----------------------- FUN AND IMAGES ----------------------- 

    const embed3 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#42768f")
    .setTitle('<a:funny:923995257589338172> Fun & Images Commands <a:funny:923995257589338172>')
    .setDescription("** Fun Commands [8] **\n ```ascii, coinflip, drake, emojify, joke, reverse, rps, 8ball```\n** Images Commands [7] **\n```meme, achievement, captcha, comment, gay, meeting, rip``` \n")
    .setFooter("Help Menu 3")

    // ----------------------- UTILITY AND GITHUB ----------------------- 

    const embed4 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("#42768f")
    .setTitle('<:staff:919546487875203073> Utility <:staff:919546487875203073>')
    .setDescription("** Utility Commands [10]**\n ```advice, announce, findemoji, members, timer, help,search-spotify, search-netflix, search-youtube , invite```\n")
    .setFooter("Help Menu 4")
    .setThumbnail(client.user.displayAvatarURL())

    //BUTTONS CONFIGUTATIONS
    
    let button0 = new MessageButton()
    .setLabel(`Home`)
    .setID(`help`)
    .setEmoji(`🏠`)
    .setStyle("red");

    let button1 = new MessageButton()
    .setLabel(`Admin & Moderation`)
    .setID(`help1`)
    .setEmoji(`🛡`)
    .setStyle("green");

    let button2 = new MessageButton()
    .setLabel(`Info & Economy`)
    .setID(`help2`)
    .setEmoji(`🪙`)
    .setStyle("green");

    let button3 = new MessageButton()
    .setLabel(`Fun & Images`)
    .setID(`help3`)
    .setEmoji(`😂`)
    .setStyle("green");

    let button4 = new MessageButton()
    .setLabel(`Utility `)
    .setID(`help4`)
    .setEmoji(`📚`)
    .setStyle("green");

    let row = new MessageActionRow()
    .addComponents(button0, button1, button2, button3, button4);

    //BUTTONS SETUP

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        //BUTTONS CONFIGURATION 2

        if(b.id == "help") {

            MESSAGE.edit(embed, row);
            await b.reply.defer()

        }

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

     //EXPIRE MENU COMMAND MESSAGE

     collector.on('end', (b) => {
        MESSAGE.edit(`<:OwO:924204463605022741> Help Menu Has Been Expired ! Type \n __$help__ To view Menu Again <a:8xd:924361199456493659>`)
        })

    }
    };