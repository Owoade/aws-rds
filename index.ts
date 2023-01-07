import express, { Request, Response } from "express";

import { config } from "dotenv";
import db from "./db";
import { User } from "./models";

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT ?? 5000;

app.post("/create-user", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  res.json( newUser )
});

app.get("/get-all", async (req: Request, res: Response) => {
    res.json( await User.findAll())
})

db.authenticate().then(() =>
  app.listen(PORT, () => console.log("The server is running fine and good"))
);

// app.listen(PORT, ()=> console.log("The server is running fine and good"))s
