import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import mongoose, {ConnectOptions} from 'mongoose';
import Project from "./db";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const db_url="mongodb+srv://admin:admin@cluster0.wqzr8td.mongodb.net/?retryWrites=true&w=majority"

    mongoose.connect(db_url,{
        dbName: "management",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }as ConnectOptions
    ).then(() =>{
        console.log("Connecting to the DB.")
    }).catch((err)=>{
        console.log(`DB connection err:, ${err}`);
    })
 

    app.get('/Project', async (req, res) => {
      const projects = await Project.find();
      res.json(projects);
    });
    
    app.get('/Project/:id', async (req, res) => {
      const project = await Project.findById(req.params.id);
      res.json(project);
    });

    app.get('/ProjectLength', async (req, res) => {
        try {
          const projects = await Project.find();
          res.json({ length: projects.length });
        } catch (error) {
          res.status(500).json({ error: 'Could not fetch project length' });
        }
      });
    


const PORT=process.env.PORT || 3001;

app.listen(PORT,function(){
    console.log(`Server started on PORT ${PORT}`);
});


