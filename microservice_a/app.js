const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000
const MESSAGE = process.env.MESSAGE || "Hello from Microservice A!"

app.get("/", (req, res) => {
  res.json({ microservice: "A", message: MESSAGE })
})

app.listen(PORT, () => {
  console.log(`Microservice A rodando na porta ${PORT}`)
})
