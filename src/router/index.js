const { Router } = require('express');
const MainPageController = require('../controller/MainPage');
const { getLogin, postLogin } = require('../controller/Login');
const { getRegisterController, postRegisterController } = require('../controller/Register');
const getLogoutController = require('../controller/Logout');
const { getCreatePost, postCreatePost } = require('../controller/CreatePost');
const { getMyPosts, deleteMyPost } = require('../controller/MyPosts');
const ErrorController = require('../controller/Error');
const validTokenMiddleware = require('../middleware/validToken');

const router = Router();

router.get('/', validTokenMiddleware, MainPageController);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/register', getRegisterController);
router.post('/register', postRegisterController);
router.get('/logout', getLogoutController);
router.get('/create-post', validTokenMiddleware, getCreatePost);
router.post('/create-post', validTokenMiddleware, postCreatePost);
router.get('/my-posts', validTokenMiddleware, getMyPosts);
router.get('/remove-post/:id', validTokenMiddleware, deleteMyPost);

router.get('/error-page', ErrorController);
router.get('*', ErrorController);

module.exports = router;
