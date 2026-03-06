const http = require("http");

let posts = [
    {id : 1 , name : "post1" , description : "congrats you have 1000 follower"},
    {id : 2 , name : "post2" , description : "launching new product"}
]

const server = http.createServer((req , res) => {
    const urlSegments = req.url.split('/');
    console.log(urlSegments)
    if(req.url == "/posts" && req.method == "GET"){
        res.setHeader("content-type" , "application/json")
        res.end(JSON.stringify(posts))
    }
    else if(req.url == "/posts" && req.method == "POST"){
        req.on("data" , (chunk)=>{
            const newpost = JSON.parse(chunk);
            let foundpost = posts.find(e => e.id == newpost.id);
            if(foundpost){
                res.statusCode = 400;
                res.end("Post found");
            }
            else{
                posts.push(newpost);
                res.statusCode = 201;
                res.end("Post created");
            
        }
        })
        
    }
    else if(req.url == "/posts" && req.method == "PUT"){
        req.on("data", (chunk)=>{
            let updatingpost = JSON.parse(chunk);
            let foundpost = posts.find(e => e.id == updatingpost.id);
            if(foundpost){
                foundpost.name = updatingpost.name;
                foundpost.description = updatingpost.description;
                res.statusCode = 200;
                res.end("Updated successfully");
            }
            else{
                res.statusCode = 404;
                res.end("Post not found");
            }
        })
    }
    else if(req.url == "/posts" && req.method == "DELETE"){
        req.on("data" , (chunk)=>{
            let deletedPost = JSON.parse(chunk);
            posts = posts.filter(e => e.id != deletedPost.id);
            res.statusCode = 200;
            res.end("deleted successfully");
        })
    }
    
    else if(urlSegments[1] && req.method == "GET"){
        res.setHeader("content-type" , "application/json");
        let foundpost = posts.find(e => e.id == urlSegments[2]);
            res.end(JSON.stringify(foundpost))
    }
});

const fs = require("fs");
fs.writeFileSync("./posts.json" , JSON.stringify(posts));
let postsdata = fs.readFileSync("./posts.json" , 'utf-8');
console.log(postsdata);


server.listen(3000);