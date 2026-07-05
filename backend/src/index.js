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
    const result = await pool.query("SELECT current_database();");

    res.send(`Connected to database: ${result.rows[0].current_database}`);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).send("Error connecting to the database");
  }
});

app.listen(port, () => { 
    console.log(`server running at ${port}`);
 })