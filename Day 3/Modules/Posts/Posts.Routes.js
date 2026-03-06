import express from 'express'

import {getPosts , getOnePost , createPost , updatePost , deletePost} from './Posts.Controller.js';

const Route = express.Router();

Route.get("/Posts" , getPosts);
Route.get("/Posts/:id" , getOnePost);
Route.post("/Posts",createPost);
Route.put("/Posts/:id" , updatePost);
Route.delete("/Posts/:id",deletePost);

export default Route

