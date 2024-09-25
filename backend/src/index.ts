import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoute from "./routes/auth-route";
import categoryRoute from "./routes/category-route";
import { connectDB } from "./config/db";
import generateHtmlTemplate from "./utils/generateHtmlTemplate";
import nodemailer from "nodemailer";

const PORT = process.env.PORT || "";
const MONGO_URI = process.env.MONGO_URI || "";

//express application object uusgeh
const app = express();

// middlewares
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth", categoryRoute);

app.get("/", async (req: Request, res: Response) => {
  // console.log("Message sent: %s", info.messageId);

  // const rndOtp = Math.floor(Math.random() * 10000)
  //   .toString()
  //   .padStart(4, "0");
  // const { data, error } = await resend.emails.send({
  //   from: "Acme <onboarding@resend.dev>",
  //   to: ["b.temuulen2005@gmail.com"],
  //   subject: "hello world",
  //   html: generateHtmlTemplate(rndOtp),
  // });
  // if (error) {
  //   console.error("EMAIL_ERR", { error });
  // }
  res.send("welcome ecommerce API server");
});

connectDB(MONGO_URI);

//server asaav
app.listen(PORT, () => {
  console.log(`server localhost:${PORT} deer aslaa`);
});
