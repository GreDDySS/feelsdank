const express = require("express");
const app = express()
const serverRoutes = require("./routes/commands")

app.set("view engine", "ejs")
app.set("views", "./web/ejs")
app.use(express.static("./web/public"))
app.use(serverRoutes)

app.get('/', (req, res) => {
  res.render("main", {title: "TwitchBot"})
})
app.get('/commands', (req, res) => {
  res.render("cmd", {title: "GB - Commands"})
})
app.get('/stats', (req, res) => {
  res.render("stats", {title: "GB - Stats"})
})
app.get('/info', (req, res) => {
  res.render("info", {title: "GB - Info"})
})
app.get('/contacts', (req, res) => {
  res.render("contacts", {title: "GB - Contacts"})
})

function keepAlive() {
  app.listen(3000, () => { console.log("Website up!") });
}
module.exports = keepAlive;
