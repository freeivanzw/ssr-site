const UserModel = require('../model/User');
const getAccessToken = require('../services/getAccessToken');

const getLogin = (req, res, next) => {

    res.render('pages/login', {
        isAuth: false,
        user: null,
        error: false,
    });
}

const postLogin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
             throw new Error('not email or password');
        }

        const User = await UserModel.auth(email, password);

        const jwtToken = getAccessToken(User.getData());

        res.cookie('Authorization', jwtToken);
        res.redirect('/');
    } catch (err) {
        res.status(400).render('pages/login', {
            isAuth: false,
            user: null,
            error: true,
        })
    }
}

module.exports = {
    getLogin,
    postLogin
};