const Discord = require('discord.js');
require('discord-reply');
const colors = require('./../../colors.json')

module.exports = {
        name: 'emojify',
	category: "fun",
        description: 'Emojifies your text message',
        aliases: ["emojify"],
        usage: '<text>',
    run: async (bot, message, args) => {
    
        if(!args[0]) {
			return message.lineReply(
				':x: Please provide valid text.',
			);
		}

		const specialChars = {
			'0': ':zero:',
			'1': ':one:',
			'2': ':two:',
			'3': ':three:',
			'4': ':four:',
			'5': ':five:',
			'6': ':six:',
			'7': ':seven:',
			'8': ':eight:',
			'9': ':nine:',
			'#': ':hash:',
			'*': ':asterisk:',
			'?': ':grey_question:',
			'!': ':grey_exclamation:',
			' ': '   ',
		};

		const emojified = `${args.join(' ')}`.toLowerCase().split('').map(letter => {
			if (/[a-z]/g.test(letter)) {
				return `:regional_indicator_${letter}: `;
			}
			else if (specialChars[letter]) {
				return `${specialChars[letter]} `;
			}
			return letter;
		}).join('');

		if(emojified.length > 2000) {
			return message.lineReply(`:x: ${bot.emotes.error} The emojified message exceeds 2000 characters.`);
		}

		message.lineReply(emojified);

    }
};