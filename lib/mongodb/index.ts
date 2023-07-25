import { MongoClient, MongoClientOptions } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"');
}

const uri = "mongodb+srv://kembourne93:10033045@cluster0.nkyfysf.mongodb.net/?retryWrites=true&w=majority";
const options: MongoClientOptions = {}; 

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {

  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {

  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
