
import { MongoClient, Db, Collection } from 'mongodb';
import { ExarotonAccount } from '../model/ExarotonAccount';

export class ExarotonAccountRepository {
    private client: MongoClient;
    private db: Db;
    private collection: Collection<ExarotonAccount>;

    constructor(url: string, dbName: string, collectionName: string) {
        this.client = new MongoClient(url);
        this.db = this.client.db(dbName);
        this.collection = this.db.collection<ExarotonAccount>(collectionName);

        this.connect();
    }

    async connect(): Promise<void> {
        await this.client.connect(); // TODO: use pools instead of connecting every time
    }

    async close(): Promise<void> {
        await this.client.close();
    }

    async insertOne(item: ExarotonAccount): Promise<ExarotonAccount> {
        const result = await this.collection.insertOne(item);
        return { ...item, _id: result.insertedId };
    }

    async find(): Promise<ExarotonAccount[]> {
        return this.collection.find().toArray();
    }

    async findOne(query: any): Promise<ExarotonAccount | null> {
        return this.collection.findOne(query);
    }
}
