const { Client, Message, MessageEmbed } = require('discord.js');
require('discord-reply');

module.exports = {
  
    name: 'badges',
    category: 'info',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const user = message.mentions.users.first() || message.author;

        const flags = user.flags.toArray();

        console.log(flags);
        
        message.lineReply(`**__badges__ : ${flags.join(', ')}**`)
    }
}