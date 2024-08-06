import mongoose , {ConnectOptions,Document, Schema } from "mongoose";


const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;

import { MongoClient, Db, Collection } from 'mongodb';

async function main() {
    const db_url="mongodb+srv://admin:admin@cluster0.wqzr8td.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(db_url, );

    try {
        await client.connect();

        const db: Db = client.db('management');
        const collection: Collection = db.collection('projects');

        const project = {
            id: 5,
            name: 'Task Manager',
            description: 'Task ekleyip silebileceğiniz, görünteleyebileceğiniz bir arayüz sunulmaktadır.'
        };

        const result = await collection.insertOne(project);

        console.log('Veri başarıyla eklendi:', result);
    } catch (error) {
        console.error('Hata oluştu:', error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);