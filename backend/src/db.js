import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let client;

const dbURI = process.env.MONGODB_URI || "";
console.log(dbURI)

export const initializeDbConnection = async () => {
  if (!dbURI) console.log("Unable to access dbUri...");
  client = await MongoClient.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ecommerce'
  });
};

export const getDbConnection = (dbName) => client.db(dbName);
