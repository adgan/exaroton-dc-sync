
import { MongoClient, Db, Collection } from 'mongodb';
import { DiscordServer } from '../model/DiscordServer';

export class DiscordServerRepository {
    private client: MongoClient;
    private db: Db;
    private collection: Collection<DiscordServer>;

    constructor(url: string, dbName: string, collectionName: string) {
        this.client = new MongoClient(url);
        this.db = this.client.db(dbName);
        this.collection = this.db.collection<DiscordServer>(collectionName);

        this.connect();
    }

    async connect(): Promise<void> {
        await this.client.connect(); // TODO: use pools instead of connecting every time
    }

    async close(): Promise<void> {
        await this.client.close();
    }

    async insertOne(item: DiscordServer): Promise<DiscordServer> {
        const result = await this.collection.insertOne(item);
        return { ...item, _id: result.insertedId };
    }

    async find(): Promise<DiscordServer[]> {
        return this.collection.find().toArray();
    }

    async findOne(query: any): Promise<DiscordServer | null> {
        return this.collection.findOne(query);
    }
}
