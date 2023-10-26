const Post = require('../model/Post');

const getMyPosts = async (req, res, next) => {
    const { isAuth, user } = req;

    if (!isAuth) {
        return res.redirect('/');
    }

    const posts = await Post.getUserPosts(user.id);

    return res.render('pages/my-posts', {
        isAuth,
        user,
        posts
    });
}

const deleteMyPost = async (req, res, next) => {
    const { isAuth, user } = req;
    const postId = req.params.id;

    if (!isAuth || !postId) {
        return res.redirect('/');
    }

    const post = await Post.getPostById(postId);

    if (user.id !== post.authorId) {
        return res.status(404);
    }

    try {
        await Post.remove(postId);

        return res.redirect('/my-posts');
    } catch (err) {
        return res.status(404);
    }
}

module.exports = {
    getMyPosts,
    deleteMyPost
}