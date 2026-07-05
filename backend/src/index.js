import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import pool from "./config/data.js"

dotenv.config()

const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.send(result.rows);
    console.log("db connected")
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.listen(port, () => { 
    console.log(`server running at ${port}`);
 })