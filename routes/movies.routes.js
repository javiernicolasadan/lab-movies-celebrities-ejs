const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here

router.get("/", async (req, res) => {
try {
    const allMovies = await Movie.find()
    res.render("movies/movies", {allMovies})
} catch (error) {
    console.log(error)    
}
})

router.get("/create",  (req, res) =>  {
    res.redirect("new-movie")
})
router.get("/new-movie", async (req, res) => {
    const allCelebrities = await Celebrity.find()
    console.log(allCelebrities)
    res.render("movies/new-movie", {allCelebrities})
})

router.post("/new-movie", async (req, res) => {
    console.log(req.body)
    await Movie.create(req.body)
    res.redirect("/movies")
})
router.get("/:id/edit", async (req, res) => {
    try {
       const movieDetails =  await Movie.findById(req.params.id).populate("cast") 
       const celebrities = await Celebrity.find()
       res.render("movies/edit-movie", {movieDetails, celebrities})
    } catch (error) {
        console.log(error)
    }
})
router.post("/:id/delete", async (req, res) => {
    try {
        /* console.log("THis are my params", req.params.id) */
        await Movie.findByIdAndDelete(req.params.id)
        res.redirect("/movies")
    } catch (error) {
        console.log(error)
    }
})
router.get("/:id", async (req, res) => {
    try {
        const movieDetails = await Movie.findById(req.params.id).populate("cast")
        res.render("movies/movie-details", {movieDetails})
        /* console.log(movieDetails) */
    } catch (error) {
        console.log(error)
    }
})
router.post("/:id/edit", async (req, res) => {
    try {
        /* console.log(req.body)
        console.log(req.params) */
        await Movie.findByIdAndUpdate(req.params.id, req.body)
        /* res.redirect("movie-details") */
    } catch (error) {
        console.log(error)
    }
})





module.exports = router