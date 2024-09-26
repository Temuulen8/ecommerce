import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import authRoute from "./routes/auth-route";
import { connectDB } from "./config/db";
import categoryRoute from "./routes/category-route";
import { sendEmail } from "./utils/send-email";
import cors from "cors";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express application object uusgeh
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth", categoryRoute);

app.get("/", async (req: Request, res: Response) => {
  const rndOtp = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  sendEmail("b.temuulen2005@gmail.com", rndOtp);

  res.send("welcome ecommerce API server");
});

connectDB(MONGO_URI);

//server asaav
app.listen(PORT, () => {
  console.log(`server localhost:${PORT} deer aslaa`);
});
