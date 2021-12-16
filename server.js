require('dotenv').config();

const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose'); 
const cors = require('cors');

const robby = "iscool";

app.use(cors());

const db_url = process.env.DBURL || 'mongodb://localhost/blogs'
const port = process.env.PORT || 3000;
const listenmsg = _ => console.log(`App started on ${port}`)

mongoose.connect(db_url,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error',(error)=>{console.log(error);});
db.once('open',()=>console.log(`Connected to Database`));

app.use(express.json());
const blogsRouter = require('./routes/blogs');
app.use('/blogs',blogsRouter);

app.listen(port,listenmsg)