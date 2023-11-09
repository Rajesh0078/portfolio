const express = require("express")
require("dotenv").config()
const port = process.env.PORT || 8888
const app = express()


app.get("/", (req, res) => {
    res.send("working")
})

app.listen(port, () => {
    console.log(`server is running on ${port} value`)
})