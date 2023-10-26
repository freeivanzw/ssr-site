const Post = require('../model/Post');

const getCreatePost = (req, res, next) => {
    const { isAuth, user } = req;

    if (!isAuth) {
        return res.redirect('/');
    }

    res.render('pages/create-post', {
        isAuth,
        user,
        error: false,
    })
}

const postCreatePost = async (req, res, next) => {
    const { isAuth, user } = req;

    if (!isAuth) {
        return res.redirect('/');
    }

    const { title, text } = req.body;

    try {
        if (!title || !text ) {
            throw new Error('name or text not exist');
        }

        const userPost = new Post(user.id, title, text);

        await userPost.create();

        return res.redirect('/');
    } catch (err) {
        return res.render('pages/create-post', {
            isAuth,
            user,
            error: true,
        })
    }
}

module.exports = {
    getCreatePost,
    postCreatePost,
}