const express = require("express")
const app = express()
const cors = require("cors")

// settings:
app.set("port", process.env.PORT || 5000)
/**
 * missing CORS config!
 */
app.use(cors({ }))
app.use(express.json()) // read json
app.use(express.urlencoded({ extended: false }))    // read html forms

// routes:
app.use("/api/", require("./routes/passwords.routes"))

// 404 not found requests:
app.use((request, response, next) => {
    response.status(404).send("404 not found")
});

module.exports = app
