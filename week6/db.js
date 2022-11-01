const { MongoClient } = require('mongodb');

async function main(){

    const uri = 'mongodb+srv://ywang72:mongodb0@cluster0.u5ztfm3.mongodb.net/?retryWrites=true&w=majority';

    const client = new MongoClient(uri);

    await client.connect();
}

main().catch(console.error);