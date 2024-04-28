import { BSON, ObjectSchema, Realm } from 'realm';


export class Message extends Realm.Object<Message> {
  _id!: BSON.ObjectId;
  content!: string;
  title!: string;
  time!: string;

  static schema: ObjectSchema = {
    name: 'message',
    properties: {
      _id: 'objectId',
      title: { type: 'string', indexed: true },
      time: { type: 'string', indexed: true },
      content: { type: 'string', indexed: true },
    },
    primaryKey: '_id',
  };
}
