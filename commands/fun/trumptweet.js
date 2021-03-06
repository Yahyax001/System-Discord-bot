const { MessageEmbed } = module.require('discord.js');
require('discord-reply');
const fetch = require('node-fetch');

module.exports = {
  name: "trumptweet",
  category: "fun",
  aliases: ["trump"],
  usage: "trumptweet <message>",
  description:
    "Display's a custom tweet from Donald Trump with the message provided.",
  botPerms: ["ATTTACH_FILES"],
  run: async (client, message, args) => {
    const tweet = args.join(" ");
    if (!tweet) {
      return message.lineReply("Mr. President Says: `What to tweet ?`");
    }
    if (tweet.length > 68) tweet = tweet.slice(0, 65) + "...";

    try {
      const res = await fetch(
        "https://nekobot.xyz/api/imagegen?type=trumptweet&text=" + tweet
      );
      const img = (await res.json()).message;
      message.lineReply({
        files: [{ attachment: img, name: "trumptweet.png" }],
      });
    } catch (err) {
      console.log(err);
      message.lineReply(err);
    }
  },
};
