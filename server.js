//******************************* */
//     DEPENDENCIES
//******************************* */
const express = require("express")
//import drinks
const drinks = require("./models/drinks.js")
const app = express()

//******************************* */
//        ROUTES
//******************************* */
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    // res.send(fruits)
    // "index.ejs" => "./views/index.ejs"
    // {fruits} => {fruits:fruits}
    res.send(drinks)
})

//******************************* */
//    TURN ON SERVER LISTENER
//******************************* */
app.listen(3000, () => { console.log("server is listening on port 3000") })