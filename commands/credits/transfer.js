const db = require('quick.db')
module.exports ={
  name: '9lawi',
run: async (client, message) => {
  let args = message.content.split(" ").slice(2);
  let user = message.mentions.members.first()
  let member = await db.fetch(`money_${message.author.id}`)
  if (!user) {
    return message.channel.send(`:rolling_eyes: | ** ${message.author.username}, I Cant Find a User**`)
  }
  if (!args) {
    return message.channel.send(`:rolling_eyes: | **${message.author.username}, type the credit you need to transfer!**`)
  }
  if (message.content.includes('-')) {
    return message.channel.send(`:rolling_eyes: | **${message.author.username}, Type a Amount \`Not Negative\`**`)
  }
  if (member < args) {
    return message.channel.send(`:thinking: ** | ${message.author.username}, Your balance is not enough for that!**`)
  }
  if (isNaN(args))
    return message.channel.send(`:rolling_eyes: Numbers Only`)
  message.channel.send(`<:Money_Bag:924209548686942218> **| ${message.author.username}, has transferred \`$${args}\` to ${user}**`)
  user.send(`<:Money_Bag:924209548686942218>  |  Transfer Receipt \n\`\`\`You have received $${args} from user ${message.author.username} (ID: ${user.id})\`\`\``)
  await db.add(`money_${user.id}`, args)
  await await db.subtract(`money_${message.author.id}`, args)
}
}