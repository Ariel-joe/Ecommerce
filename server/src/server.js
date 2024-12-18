import express from "express";
import { getHome } from "./controllers/home.js";
import { v1Router } from "./routes/v1/index.js";
import { connectDB } from "./database/config.js";

const app = express();
connectDB();

app.use(express.json());

app.get("/", getHome);

app.use("/v1", v1Router);

app.listen(3001, () => {
  console.log("localhost:3001");
});
