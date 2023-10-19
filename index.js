const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.viujuo0.mongodb.net/?retryWrites=true&w=majority`;
const uri = "mongodb://localhost:27017"

app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

const run = async () => {
    try {
        await client.connect();
        const productCollection = client.db('TechStore').collection('products');
        const brandCollection = client.db('TechStore').collection('brands');

        app.get('/products', async(req, res) => {
            const products = await productCollection.find().toArray();
            res.send(products);
        });

        app.get('/brands', async(req, res) => {
            const brands = await brandCollection.find().toArray();
            res.send(brands);
        });

        app.get('/products/:id', async(req, res) => {
            const id = req.params.id;
            const product = await productCollection.findOne({_id: new ObjectId(id)});
            res.send(product);
        });

        app.get('/products/brand/:brand', async(req, res) => {
            const brand = req.params.brand;
            const product = await productCollection.find({brand_name: brand}).toArray();
            res.send(product);
        });


        app.post('/products', async(req, res) => {
            const product = req.body;
            const result = await productCollection.insertOne(product);
            res.send(result);
        })

        await client.db('admin').command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch(err){
        console.log(err);
    }
    finally {

    }
}


run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server Running on PORT: ${port}`);
});