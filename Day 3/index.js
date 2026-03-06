import express from 'express'
import {conn} from './Database/dbConnect.js'
import Route from './Modules/Posts/Posts.Routes.js'
const app = express();
app.use(express.json())
conn;
app.use(Route);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

