const app = require("express")()
const cors = require("cors")
const { port, mysql_auth } = require("./config")
const mysql = require('mysql')
const connection = mysql.createConnection(mysql_auth)

// Use CORS
app.use(cors())

// Only allow requests from 127.0.0.1 (localhost)
app.use((req, res) => {
  if (req.hostname !== "127.0.0.1") return res.sendStatus(403)
  req.next()
})

;(async () => {
  await connection.connect()
  console.log("Database connected")

  // Get the current closing time
  app.get("/closing_time", (req, res) => {
    connection.query("SELECT closing_time FROM general;", (error, results) => {
      res.status(200).json(results[0])
    })
  })

  // Get the current price list
  app.get("/price_list", (req, res) => {
    connection.query("SELECT * FROM price_list;", (error, results) => {
      res.status(200).json(results)
    })
  })
})()

// Start the webserver on the configured port
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})