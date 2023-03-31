import { MongoClient, Collection, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

// Connection URL
const url = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.4ylicze.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

export const connect = async () => {
  await client.connect();
  console.log('Connected successfully to server');

  const db: Db = client.db(process.env.DB_NAME);
  const collections: Collection = db.collection(process.env.DB_NAME);

  console.log(`Connected to ${collections.dbName}`);
  return db;
};
