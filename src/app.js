const express = require('express');
const cors = require('cors');
const { default: connectDB } = require('./Connection/connection');
const app = express()
require('./Connection/connection')
const userRouter=require('./Router/UserRouter')
const jobRouter = require('./Router/JobRouter')
const path = require("path");
const port = 4000

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve images


app.use("/api/user",userRouter)
app.use("/api/jobs",jobRouter)



app.listen(port, () => {
    console.log("server is running  on " + port)
})
