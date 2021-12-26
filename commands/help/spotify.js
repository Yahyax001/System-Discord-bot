const discord = require("discord.js");
module.exports = {
    name: 'search-spotify', 
    aliases: ["sp"],
    description: 'spotify', 
    cooldown: 3, 
    options: [
    {
    name: 'the-search',
    description: 'search',
    type: 'STRING',
    required: true
    }
    ],
    run: async function (client, interaction, args) {
    let search = args.join('')
    let message = args.join('')
    interaction.reply({content:`**${search}** <:search:924246790511927316> | https://open.spotify.com/search/${search} <:Spotify:924246563193233408>`} )
        }
    }