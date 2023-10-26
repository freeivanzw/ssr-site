const getLogout = (req, res, next) => {
    res.clearCookie('Authorization');
    return res.redirect('/');
}

module.exports = getLogout;