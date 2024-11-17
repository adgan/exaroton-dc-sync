import { Document, ObjectId } from 'mongodb';

export class ExarotonSyncModel extends Document {
    _id?: ObjectId;
    discordUserId!: string;
    discordGuildId!: string;
    serverId!: string | undefined;
    minecraftUsername!: string | undefined;
}

