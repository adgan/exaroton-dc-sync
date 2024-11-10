import { DiscordServerRepository } from "../repository/DiscordServerRepository";
import { ExarotonAccountRepository } from "../repository/ExarotonAccountRepository";
import { ExarotonSyncRepository } from "../repository/ExarotonSyncRepository";
import { Logger } from "../util/logger";
import { Client } from 'exaroton';

export class ExarotonService {
    private logger: Logger;
    private exarotonClient: Client;
    private exarotonSyncRepository: ExarotonSyncRepository; // TODO: more service classes
    private exarotonAccountRepository: ExarotonAccountRepository; // TODO: more service classes
    private discordServerRepository: DiscordServerRepository; // TODO: more service classes
    

    constructor(apiToken: string, dbUri: string, dbName: string) {
        this.exarotonClient = new Client(apiToken);
        this.logger = new Logger("ExarotonService");

        this.exarotonAccountRepository = new ExarotonAccountRepository(dbUri, dbName, "exaroton_accounts");
        this.exarotonSyncRepository = new ExarotonSyncRepository(dbUri, dbName, "exaroton_sync");
        this.discordServerRepository = new DiscordServerRepository(dbUri, dbName, "discord_servers");
    }

    public getWhitelist = async (): Promise<any> => {
        // Implement logic to get whitelist
    };

    public getServerInfo = async (): Promise<any> => {
        // Implement logic to get server info
    };

    public getAccountInfo = async (): Promise<any> => {
        this.logger.info("getAccountInfo triggered");
        const account = await this.exarotonClient.getAccount();
        this.logger.info("getAccountInfo returned");
        return account;
    };

    public getServers = async (): Promise<any> => {
        const servers = await this.exarotonClient.getServers();
        return servers;
    }

    public getServerStatus = async (serverId: string): Promise<any> => {
        const server = this.exarotonClient.server(serverId);
        const status = await server.get();
        return status;
    };

    public getMOTD = async (serverId: string): Promise<any> => {
        const server = this.exarotonClient.server(serverId);
        const motd = await server.getMOTD();
        return motd;
    };

    public setMOTD = async (motd: string): Promise<any> => {
        // Implement logic to set MOTD
    };
}
