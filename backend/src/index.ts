import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoute from "./routes/auth-route";

const PORT = process.env.PORT;

//express application object uusgeh
const app = express();

// middlewares
app.use("/api/v1/auth", authRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("welcome ecommerce API server");
});

//server asaav
app.listen(PORT, () => {
  console.log(`server localhost:${PORT} deer aslaa`);
});
