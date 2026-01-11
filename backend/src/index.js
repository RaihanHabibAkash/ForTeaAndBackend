import express from "express";
import dotenv from "dotenv";

const resulst = dotenv.config({ path: "./.env" });
if(resulst.error) {
    console.log("env error", resulst.error);
}

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hey there")
});

app.get("/facebook/", (req, res) => {
    res.send("Face book here")
})



app.listen(PORT, () => {
    console.log(`App is running in http://localhost:${PORT}`);
})