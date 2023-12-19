//******************************* */
//     DEPENDENCIES
//******************************* */
const express = require("express")
//import drinks
const drinks = require("./models/drinks.js")
const app = express()

// middleware
app.use(express.static("public"))

//******************************* */
//        ROUTES
//******************************* */
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req, res) => {
    //res.send(drinks)
    res.render("index.ejs", { drinks: drinks })
})

app.get("/drinks/:id", (req, res) => {
    const id = req.params.id
    const drink = drinks[id]
    console.log(drink)
    res.render("show.ejs", { drink })
})

//******************************* */
//    TURN ON SERVER LISTENER
//******************************* */
app.listen(3000, () => { console.log("server is listening on port 3000") })