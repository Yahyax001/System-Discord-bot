const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require ("discord.js")
require('discord-reply');
const { version } = require('../../package.json');
const ms = require('ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
  name: "botinfo",
    category: "info",
    aliases: ['binfo', 'botstats', 'stats', 'info'],
    description: 'Check\'s bot\'s status',
  
  run: async (client, message, args, del, member) => {
    message.lineReply(new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle(`MoonBot Version ${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('                **:chart_with_upwards_trend:  Uptime:**', `${ms(client.uptime)}`, true)
            .addField('                **:notebook: WebSocket Ping:**', `${client.ws.ping}ms`, true)
            .addField('                **:file_folder: Memory:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('                **:date: Guild Count:**', `${client.guilds.cache.size} guilds`, true)
            .addField(`                **👋 User Count:**`, `${client.users.cache.size} users`, true)
            .addField('                **:hammer_pick: Commands:**', `${client.commands.size} cmds`,true)
            .addField('                **:gear: Node:**', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('                **:pencil: Cached Data:**', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
            .addField('                **:pushpin: Discord.js:**', `${discordjsVersion}`, true)
            .setTimestamp()
        );
    }
}