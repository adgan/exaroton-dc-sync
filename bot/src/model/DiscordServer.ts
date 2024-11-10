import { ObjectId, Document } from "mongodb";

export class DiscordServer extends Document {
    _id?: ObjectId
    guildId!: string;
    serverId!: string | undefined;
}

