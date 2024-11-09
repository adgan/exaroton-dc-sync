import { Logger } from "../util/logger";
import { Client } from 'exaroton';

export class ExarotonService {
    private logger: Logger;
    private exarotonClient: Client;

    constructor(apiToken: string) {
        this.exarotonClient = new Client(apiToken);

        this.logger = new Logger("ExarotonService")
    }

    public getWhitelist = async (): Promise<any> => {
        // Implement logic to get whitelist
    };

    public getServerInfo = async (): Promise<any> => {
        // Implement logic to get server info
    };

    public getAccountInfo = async (): Promise<any> => {
        const account = await this.exarotonClient.getAccountInfo();

    };

    public getMOTD = async (): Promise<any> => {
        // Implement logic to get MOTD
    };

    public setMOTD = async (motd: string): Promise<any> => {
        // Implement logic to set MOTD
    };
}
