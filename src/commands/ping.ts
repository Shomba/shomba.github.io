import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong'),
	async execute(interaction:CommandInteraction) {
		return interaction.reply({
            content:"Pong!",
            components: [
				{
				  type: 1,
				  components: [
					{
						label:"PING",
					  style: 1,
					  type: 2,
					  customId:"ping"
					}
				  ]
				}
			  ],
        });
	},
};