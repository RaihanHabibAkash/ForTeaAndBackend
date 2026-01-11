import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hey there")
});

app.get("facebook", (req, res) => {
    res.send("Face book here")
})



app.listen(PORT, () => {
    console.log(`App is running in http://localhost:${PORT}`);
})