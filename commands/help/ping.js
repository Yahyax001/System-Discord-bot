const discord = require("discord.js");
require('discord-reply');

module.exports = {
    name: "ping",
    cooldown: 3,
    
run: async(client, message, args) => {
  message.lineReply("Pong").then(m => m.edit(`\`\`\`
${client.user.username} Ping : ${client.ws.ping} ms
\`\`\``))
message.react('<a:verified:919554249703178251> ')

}
};