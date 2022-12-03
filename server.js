/*
Since we stopped using our VPS, I moved Mr. Wolf to replit.
This file, starts a website for the bot that's getting pinged every 4 minutes.
As I read, replit allows stuff like that.
Source: https://replit.com/talk/ask/Is-Making-2-Repls-to-ping-each-other-allowed/139670

PS: Don't touch my spaghetti code!
~Wolfyxon
*/
console.log("starting...")
const fs = require("fs")

function errorCheck() {
  return true //temporary
  var errors = fs.readFileSync("./err", "utf-8")
  return (errors.split("\n") < 2)
}

if (errorCheck()) {
  console.log("error check successful")
  const express = require('express')
  const app = express()


  require("./Main.js")

  app.use(express.static(__dirname + "/html"))
  app.listen(80)

}
else {
  console.error("Starting aborted due to previous errors")
}
