import { DISCORD_TOKEN, DISCORD_CLIENT_ID, EXAROTON_TOKEN } from './config/config';
import { Logger } from './util/logger';
import { DiscordService } from './service/DiscordService';
import { ExarotonService } from './service/ExarotonService';

const logger = new Logger("BotMain");
if (!DISCORD_TOKEN) {
  logger.error("Missing DISCORD_TOKEN")
  throw new Error("Missing DISCORD_TOKEN");
}
if (!DISCORD_CLIENT_ID) {
  logger.error("Missing DISCORD_CLIENT_ID")
  throw new Error("Missing DISCORD_CLIENT_ID");
}
if (!EXAROTON_TOKEN) {
  logger.error("Missing EXAROTON_TOKEN")
  throw new Error("Missing EXAROTON_TOKEN");
}
export const exarotonService = new ExarotonService(EXAROTON_TOKEN);

new DiscordService(DISCORD_TOKEN, DISCORD_CLIENT_ID);



