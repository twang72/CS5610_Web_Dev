const { MongoClient } = require('mongodb');

async function main(){
    const uri = 'mongodb+srv://ywang72:mongodb0@cluster0.u5ztfm3.mongodb.net/?retryWrites=true&w=majority';

    const client = new MongoClient(uri);

    await client.connect();

    try {
        await client.connect();

        await listDatabases(client);
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases (client) {
    const dataBasesList = await client.db().admin().listDatabases();

    console.log('Databases');
    dataBasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);  
    })
}