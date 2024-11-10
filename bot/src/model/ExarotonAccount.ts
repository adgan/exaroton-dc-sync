import { ObjectId, Document } from "mongodb";

export class ExarotonAccount extends Document {
    _id?: ObjectId
    email!: string;
    token!: string | undefined;
    minecraftUsername!: string | undefined;
}

