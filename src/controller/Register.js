const UserModel = require('../model/User');

const getRegisterController = (req, res, next) => {
    res.render('pages/register', {
        isAuth: false,
        user: null,
        error: false,
    });
}

const postRegisterController = async (req, res, next) => {
    const { email, name, password, repeatPassword } = req.body;

    let error = false;

    if (!email) {
        error = true;
    }

    if (!name) {
        error = true;
    }

    if (password.length < 6) {
        error = true;
    }

    if (password !== repeatPassword || repeatPassword.length < 6) {
        error = true;
    }

    try {
        if (error) {
            throw new Error('some error');
        }

        const User = new UserModel(null, name, email, password);

        await User.create();
        console.log('tester')
        return res.redirect('/login');
    } catch (err) {
        return res.render('pages/register', {
            isAuth: false,
            user: null,
            error: true
        });
    }
}

module.exports = {
    postRegisterController,
    getRegisterController,
};