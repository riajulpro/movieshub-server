// Importing the require data
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

// Using middle wear
app.use(cors());
app.use(express.json());

// MongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qa4f7ko.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Creating a collection of database
    const moviesCollection = client.db("moviesDB").collection("movies");

    // // Reading all data from Database
    // app.get("/", (req, res) => {
    //   res.send("Server is running...");
    // });

    // // Reading Data from Database
    // app.get("/products", async (req, res) => {
    //   const cursor = moviesCollection.find();
    //   const result = await cursor.toArray();
    //   res.send(result);
    // });

    // // Read a single data
    // app.get("/products/:id", async (req, res) => {
    //   const query = { _id: new ObjectId(req.params.id) };
    //   const result = await moviesCollection.findOne(query);
    //   res.send(result);
    // });

    // // Creating Data on Database
    // app.post("/products", async (req, res) => {
    //   const data = req.body;
    //   const result = await moviesCollection.insertOne(data);
    //   res.send(result);
    // });

    // // Updating an existence data
    // app.put("/products/:id", async (req, res) => {
    //   const filter = { _id: new ObjectId(req.params.id) };
    //   const options = { upsert: true };
    //   const updateDoc = {
    //     $set: req.body,
    //   };

    //   const result = await moviesCollection.updateOne(
    //     filter,
    //     updateDoc,
    //     options
    //   );

    //   res.send(result);
    // });

    // // Deleting specific data from database
    // app.delete("/products/:id", async (req, res) => {
    //   const query = { _id: new ObjectId(req.params.id) };
    //   const result = await moviesCollection.deleteOne(query);
    //   res.send(result);
    // });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Listening the server data
app.listen(port, () => {
  console.log(`The server is running from the port: ${port}`);
});
