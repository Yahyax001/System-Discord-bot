module.exports = {
    name: 'search-youtube', 
    description: 'youtube', 
    aliases: ["yt"],
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
    interaction.reply({content:`**${search}** <:search:924246790511927316> | https://www.youtube.com/search?q=${search} <:YouTube:924318828886888498> `})
        }
    }