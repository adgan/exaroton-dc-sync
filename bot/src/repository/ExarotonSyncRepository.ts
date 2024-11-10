
import { MongoClient, Db, Collection } from 'mongodb';
import { ExarotonSyncModel } from '../model/ExarotonSyncModel';

export class ExarotonSyncRepository {
    private client: MongoClient;
    private db: Db;
    private collection: Collection<ExarotonSyncModel>;

    constructor(url: string, dbName: string, collectionName: string) {
        this.client = new MongoClient(url);
        this.db = this.client.db(dbName);
        this.collection = this.db.collection<ExarotonSyncModel>(collectionName);

        this.connect();
    }

    async connect(): Promise<void> {
        await this.client.connect(); // TODO: use pools instead of connecting every time
    }

    async close(): Promise<void> {
        await this.client.close();
    }

    async insertOne(item: ExarotonSyncModel): Promise<ExarotonSyncModel> {
        const result = await this.collection.insertOne(item);
        return { ...item, _id: result.insertedId };
    }

    async find(): Promise<ExarotonSyncModel[]> {
        return this.collection.find().toArray();
    }

    async findOne(query: any): Promise<ExarotonSyncModel | null> {
        return this.collection.findOne(query);
    }
}
