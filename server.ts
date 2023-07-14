import express  from "express";
import * as dotenv from 'dotenv';
import router from "./src/routes/routers";
import { sqlize, dbconnection } from "./src/core/connection";
const app = express();
dotenv.config();

app.use(express.json());
const port = process.env.PORT;
dbconnection();
app.use('/', router);


app.listen(port, ()=> {
    console.log(`listning at http://locahost:${port}`);
})
