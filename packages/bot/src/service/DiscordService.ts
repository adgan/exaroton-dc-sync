import { REST, Routes } from "discord.js";
import { Logger } from "../util/logger";
import { commands } from '../commands';
import { Client } from 'discord.js';

export class DiscordService {
    private DISCORD_CLIENT_ID: string;
    private discordRestClient: REST;
    private logger: Logger;
    private client: Client;

    constructor(DISCORD_TOKEN: string, DISCORD_CLIENT_ID: string) {
        this.logger = new Logger("DiscordService");

        if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
            this.logger.error("Missing DISCORD_TOKEN and/or DISCORD_CLIENT_ID")
            throw new Error("Missing DISCORD_TOKEN and/or DISCORD_CLIENT_ID");
        }
        this.discordRestClient = new REST({ version: "10" }).setToken(DISCORD_TOKEN);
        this.DISCORD_CLIENT_ID = DISCORD_CLIENT_ID;
        this.client = new Client({
            intents: ["Guilds", "GuildMessages", "DirectMessages"],
        });

        this.client.once("ready", () => {
            this.logger.info("Discord bot is ready! 🤖");
            this.deployCommandsOnNewGuild(this.client.guilds.cache.first()?.id || '');
        });
        this.client.on("guildCreate", async (guild) => {
            await this.deployCommandsOnNewGuild(guild.id);
            this.logger.info(`Joined guild: ${guild.name}`);
        });

        this.client.on("interactionCreate", async (interaction) => {
            this.logger.info(`interactionCreate triggered on ${interaction}`)
            if (!interaction.isCommand()) {
                this.logger.warn(`Interaction is not a command: ${interaction}`)
                return;
            }
            const { commandName, channel, guild } = interaction;
            if (commands[commandName as keyof typeof commands]) {
                this.logger.info(`[${guild}/${channel?.toString() || 'DM'}]: exec ${commandName}`);
                commands[commandName as keyof typeof commands].execute(interaction);
            }
        });

        this.client.login(DISCORD_TOKEN);
    }


    private async deployCommandsOnNewGuild(guildId: string) {
        const commandsData = Object.values(commands).map((command) => command.data);


        try {
            this.logger.info("Started refreshing application (/) commands.");

            await this.discordRestClient.put(
                Routes.applicationGuildCommands(this.DISCORD_CLIENT_ID, guildId),
                {
                    body: commandsData,
                }
            );
            this.logger.info("Successfully reloaded application (/) commands.");
        } catch (error) {
            this.logger.error("Failed to refresh application (/) commands.", error);
        }
    }
}
