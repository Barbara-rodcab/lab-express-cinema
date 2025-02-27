const Movie = require("../models/Movie.model");

module.exports.list = (req, res, next) => {
    Movie.find()
    .then(movie => {
        res.render("list", { movie })
    })
    .catch(err => console.error(err))
};

module.exports.detail = (req, res, next) => {
    Movie.findById(req.params.movieId)
    .then(movie => {
        res.render("details", { movie })
    })
    .catch(err => console.error(err))
};