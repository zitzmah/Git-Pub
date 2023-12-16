//******************************* */
//     DEPENDENCIES
//******************************* */
const express = require("express")
const app = express()

//******************************* */
//        ROUTES
//******************************* */
app.get("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
})

//******************************* */
//    TURN ON SERVER LISTENER
//******************************* */
app.listen(3000, () => { console.log("server is listening on port 3000") })