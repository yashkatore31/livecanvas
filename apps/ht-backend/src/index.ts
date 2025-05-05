import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { middleware } from "./middleware";

dotenv.config();
const JWT_SECRET = proccess.env.JWT_SECRET;
console.log(JWT_SECRET);
const app = express();

app.post("/signup", (req, res) => {
    res.json({
        message:"signed in user";
      })
});

app.post("/signin", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({
    token:token;
  })
});

app.post("/room", (req, middleware ,res) => {
    res.json({
        roomID:123;
      })
});

app.listen("4000");
