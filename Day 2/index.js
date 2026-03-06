import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json())

app.get("/home" , (req,res)=>{
    const pagePath = fileURLToPath(import.meta.url);
    const dirPath = path.dirname(pagePath);
    res.sendFile(path.join(dirPath , "index.html"));
});

let comments = [
    {"id" : 1 , "author" : "mahmoud" , "body" : "great post"},
    {"id" : 2 , "author" : "ali" , "body" : "nice post"}
]
app.get("/comments" , (req , res) => {
    res.json(comments);
})

app.get("/comments/:id" , (req , res) => {
    const id = req.params.id;
    const requiredComment = comments.find(e => e.id == id);
    res.json(requiredComment);
})

app.post("/comments" , (req , res)=>{
    req.body.id = comments[comments.length - 1 ].id +1;
    comments.push(req.body)
    res.status(201).json(req.body)
})


app.put("/comments/:id" , (req , res) => {
    const id = req.params.id;
    const requiredComment = comments.find(e => e.id == id);
    if(requiredComment){
        requiredComment.author = req.body.author;
        requiredComment.body = req.body.body;
        res.status(200).send(req.body);
    }
    else{
        res.status(404).send("Comment not found");
    }
})


app.delete("/comments/:id" , (req , res)=>{
    const id = req.params.id;
    comments = comments.filter(e => e.id != id);
    res.status(200).send("deleted successfully");
})


app.listen(3000);