import { DISCORD_TOKEN, DISCORD_CLIENT_ID, EXAROTON_TOKEN, DB_URI, DB_DB_NAME} from './config/config';
import { Logger } from './util/logger';
import { DiscordService } from './service/DiscordService';
import { ExarotonService } from './service/ExarotonService';
import assert from 'assert';

const logger = new Logger("BotMain");
logger.info("Bot starting..");

assert(DISCORD_TOKEN, "DISCORD_TOKEN is not defined");
assert(DISCORD_CLIENT_ID, "DISCORD_CLIENT_ID is not defined");
assert(EXAROTON_TOKEN, "EXAROTON_TOKEN is not defined");
assert(DB_URI, "DB_URI is not defined");
assert(DB_DB_NAME, "DB_DB_NAME is not defined");

export const exarotonService = new ExarotonService(EXAROTON_TOKEN, DB_URI, DB_DB_NAME);

new DiscordService(DISCORD_TOKEN, DISCORD_CLIENT_ID);


