
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

// Load environment variables from .env file
dotenv.config();

const mongodbURI = process.env['MONGODB_URI'] as string;
if (!mongodbURI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
}
const client = new MongoClient(mongodbURI);

const products = [
  {
    name: "Como Lake",
    description: "A beautiful lake in northern Italy",
    price: 2,
    country: "Italy",
    imageUrls: ["url1", "url2"],
    stock: 10
  },
  {
    name: "Delft",
    description: "A historic town known for its blue pottery",
    price: 2,
    country: "Netherlands",
    imageUrls: ["url3", "url4"],
    stock: 50
  },
  {
    name: "Montserrat",
    description: "A multi-peaked mountain near Barcelona",
    price: 2,
    country: "Spain",
    imageUrls: ["url5", "url6"],
    stock: 10
  }
];

async function initDb() {
  try {
    await client.connect();
    const database = client.db("webshop");
    const productsCollection = database.collection("products");

    // Delete existing products
    await productsCollection.deleteMany({});

    // Insert new products
    const result = await productsCollection.insertMany(products);
    console.log(`${result.insertedCount} products were inserted`);
  } finally {
    await client.close();
  }
}

initDb().catch(console.error);