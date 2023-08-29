const {Schema, model, default: mongoose} = require("mongoose")
const Celebrity = require("./Celebrity.model")

const movieSchema = new Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    },
    plot: {
        type: String,
    },
    cast: {
        type: [mongoose.Types.ObjectId],
        ref: Celebrity,
    },
})

const Movie = model("Movie", movieSchema)

module.exports = Movie