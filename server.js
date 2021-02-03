const express = require("express")
const config = require('dotenv').config()
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "build")))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

if(process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 8080)