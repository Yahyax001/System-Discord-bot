module.exports = {
    name: 'search-netflix', 
    description: 'netflix', 
    aliases: ["nt"],
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
    interaction.reply({content:`**${search}** <:search:924246790511927316> | https://www.netflix.com/search?q=${search} <:4903_Netflix:924316691004014652> `})
        }
    }