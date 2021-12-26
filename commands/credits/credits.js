const db = require('quick.db')
module.exports = {
  name: 'zbi',
  run: async (client, message) => {
  let user = message.mentions.users.first() || message.author;
  let bal = await db.fetch(`money_${user.id}`)
  if (bal === null) bal = 0;
  return message.channel.send(`** ${message.author.username} , Your account balance is :** __**$${bal}**__ <a:xD1:923994877690249236>`)
  }
}