console.log("THIS IS SERVER.JS");

const express = require("express");
const app = express();

app.use(express.json());

// routes
const noteRoutes = require("./routes/noteRoutes");
const authRoutes = require("./routes/authRoutes");

// connect routes
app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

app.get("/test", (req, res) => {
    console.log("TEST HIT");
    res.send("Server working");
});

app.get("/ping", (req, res) => {
    console.log("PING HIT");
    res.send("OK");
});

const PORT =3300;

app.listen( PORT, () => {
    console.log(`Server running in port no: ${PORT}`);
});
