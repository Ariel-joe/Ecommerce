import express from "express";
import cors from "cors"
import "dotenv/config"
import { getHome } from "./src/controllers/home.js";
import { v1Router } from "./src/routes/v1/index.js";
import { connectDB } from "./src/database/config.js";


// app configurations
const app = express();
connectDB();


// middlewares
app.use(express.json());
app.use(cors())


// api endpoints
app.get("/", getHome);

app.use("/v1", v1Router);

app.listen(3001, () => {
  console.log("localhost:3001");
});
