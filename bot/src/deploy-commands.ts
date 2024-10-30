import { REST, Routes } from "discord.js";
import { commands } from "./commands";
import { config } from "dotenv";
import { DISCORD_CLIENT_ID, DISCORD_TOKEN } from "./config/config";
import { logger } from "./utils/logger";

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID) {
    throw new Error("Missing environment variables");
}

const commandsData = Object.values(commands).map((command) => command.data);

const rest = new REST({ version: "10" }).setToken(DISCORD_TOKEN!);

type DeployCommandsProps = {
  guildId: string;
};

export async function deployCommands({ guildId }: DeployCommandsProps) {
  try {
    logger.info("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(DISCORD_CLIENT_ID!, guildId),
      {
        body: commandsData,
      }
    );

    logger.info("Successfully reloaded application (/) commands.");
  } catch (error) {
    logger.error(error);
  }
}