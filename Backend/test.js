import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.send("Hello world!!");
});

app.use((req, res, next) => {
    console.log("Logged");
    next();
});

app.listen(3000);
