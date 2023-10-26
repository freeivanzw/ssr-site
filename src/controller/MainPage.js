const Post = require('../model/Post');

const MainPage = async (req, res, next) => {

    const { isAuth, user } = req;

    const posts = await Post.getAllPosts();

    res.render('pages/main', {
        isAuth,
        user,
        posts
    });
}

module.exports = MainPage;