import { MongoClient } from 'mongodb';
import { Logger } from '../util/logger';

export class MongoConfig {
    private static instance: MongoConfig;
    private logger: Logger;
    private client: MongoClient;
    private url: string;

    private constructor(url: string) {
        this.url = url;
        this.logger = new Logger("MongoConfig")
        this.client = new MongoClient(this.url);
    }

    public static getInstance(url: string): MongoConfig {
        if (!MongoConfig.instance) {
            MongoConfig.instance = new MongoConfig(url);
        }
        return MongoConfig.instance;
    }

    public async connect(): Promise<MongoClient> {
        try {
            await this.client.connect();
            this.logger.info('Connected to MongoDB')
            return this.client;
        } catch (error) {
            this.logger.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    public getClient(): MongoClient {
        return this.client;
    }
}
