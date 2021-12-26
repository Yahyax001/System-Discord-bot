const {Client, 
      Collection, 
       Discord
      } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { default_prefix } = require("./config.json")
const { config } = require('dotenv')
const { prefix } = require("./config.json")
const bot = new Client({
  disableEveryone: true
});
 require('discord-buttons')(client);
const emote = require("./config/emotes.json");
const { MessageEmbed } = require('discord.js');
const ms = require("ms");
const fetch = require("fetch");
const db = require("quick.db")
let number = 69
console.log(`Number = ${number}`) 


client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});



require("http").createServer((req, res) => res.end(`Bot Is Online.`)).listen(process.env.PORT || 8000)




client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});



client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(prefix)) return;

  
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  
  let command = client.commands.get(cmd);
  
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);});



client.on('message', async (message) => {
  if(message.content.includes(client.user.id)) {
    const embed = new MessageEmbed()
    .setTitle(`Hello <a:nM_Zhox:923994666297335838>`)
    .setDescription(`I'm ${client.user.tag}\n\nMy prefix is \`${prefix}\` \nUse \`${prefix}help\` to see my commands!`)
    .setFooter(`Moon Devs`)
    message.react('<a:verified:919554249703178251> ')
  return message.channel.send(embed);
}
})


client.on('message', async message=> {
  if(message.author.bot) return
  if(!message.guild) return
  if(message.content.startsWith(prefix + 'taboun')) {
   let timeout = 86400000/2 // 12 hours in milliseconds, change if you'd like.
  let amount = Math.floor(Math.random() * 6000) + 1;
    let daily = await await db.fetch(`daily_${message.author.id}`);
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        message.channel.send(`<:droid_timer:924208043875500043> **| ${message.author.username}, Your daily coins refreshes in ${time}** `)
    } else {
    message.channel.send(`:moneybag: **${message.author.username}, you got :dollar: ${amount} daily credits!**`)
    await db.add(`money_${message.author.id}`, amount)
    await db.set(`daily_${message.author.id}`, Date.now())
    }
  }
})



client.on("ready", () => {
  console.log('Moon Bot is Ready');
  client.user.setActivity("$help | version  1.3.5",{type: "PLAYING"});
})

client.on("guildCreate" , guild => {
  if (guild.memberCount < 20) {
    console.log('Leaved Fake Server')
  guild.leave()
  }
  })

client.login(process.env.TOKEN);

//