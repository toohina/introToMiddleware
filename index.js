import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app=express();
const __dirname=dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post('/',(req,res)=>{
    console.log(req.body);
    if(req.body.email ==="sunshine@gmail.com" && req.body.password==="sunshine")
    res.redirect('/content');
});

app.get('/content',(req,res)=>{
    res.sendFile(__dirname+"/public/content.html");
});

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})