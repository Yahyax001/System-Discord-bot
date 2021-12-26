const { ownerID } = require('../../owner.json') 
require('discord-reply');

module.exports = {
        name: "clear",
        aliases: ["cl"],
        category: "mod",
        description: "Deletes messages from a channel",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReply(`**${message.author.username}**, you dont have enough perms!<a:lsxd:924364367175229510> `)
        if (isNaN(args[0]))
            return message.lineReply(`**${message.author.username}**, Give me a number to clear ! <a:lsxd:924364367175229510> `);

        if (args[0] > 100)
            return message.lineReply(`**${message.author.username}**, i Need a number **< 100** <a:lsxd:924364367175229510> `);

        if (args[0] < 1)
            return message.lineReply(`**${message.author.username}**, bruh i want much than one ;-; <a:lsxd:924364367175229510>`);

        message.channel.bulkDelete(args[0])
            .then(messages => message.lineReply(`\`${messages.size}/${args[0]}\`,\` messages cleared!\` `).then(msg => msg.delete({ timeout: 2000 }))).catch(() => null)
    }
}