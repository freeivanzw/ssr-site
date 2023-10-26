const Error = (req, res, next) => {
    res.render('pages/404');
}

module.exports = Error;