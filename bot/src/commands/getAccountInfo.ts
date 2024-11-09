import { SlashCommandBuilder, CommandInteraction } from "discord.js";
import { exarotonService } from "../index";
import { Logger } from "../util/logger";

export const data = new SlashCommandBuilder()
  .setName("accountinfo")
  .setDescription("Get Exaroton Account Info");

export async function execute(interaction: CommandInteraction) {
  const logger = new Logger("GetAccountInfoCommand")
  logger.info("GetAccountInfoCommand triggered");
  const account = await exarotonService.getAccountInfo()
  console.log(account)
  return interaction.reply(`My account is ${account.name} and I have ${account.credits} credits`);
}