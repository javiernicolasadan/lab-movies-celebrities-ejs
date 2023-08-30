const Celebrity = require('../models/Celebrity.model')

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here


router.get("/create", (req, res) => {
    res.render("celebrities/new-celebrity")
})

router.post("/create", async (req, res) => {
    /* console.log("This is my req.body", req.body.name) */
    try {
        await Celebrity.create(req.body)
        res.redirect("/celebrities")
        
    } catch (error) {
        console.log(error)
        res.render("celebrities/new-celebrity")
    }
})

router.get("/", async (req, res) => {
try {
    const allCelebrities = await Celebrity.find()
    /* console.log(allCelebrities) */
    res.render("celebrities/celebrities", {allCelebrities})
} catch (error) {
    console.log(error)
    
}
})

module.exports = router