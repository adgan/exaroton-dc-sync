import { Client, GatewayIntentBits, Events } from 'discord.js';
import { DISCORD_TOKEN, DISCORD_CLIENT_ID } from './config/config';
import { commands } from './commands';
import { deployCommands } from './util/deploy-commands';
import { Logger } from './util/logger';

const logger = new Logger("BotMain");

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
  throw new Error("Missing environment variables");
}


const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages"],
});


client.once("ready", () => {
  logger.info("Discord bot is ready! 🤖");
});

client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id });
  logger.info(`Joined guild: ${guild.name}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName, channel, guild } = interaction;
  if (commands[commandName as keyof typeof commands]) {
    logger.info(`[${guild}/${channel?.toString() || 'DM'}]: exec ${commandName}`);
    commands[commandName as keyof typeof commands].execute(interaction);
  }
});

client.login(DISCORD_TOKEN);
