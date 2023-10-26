const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const validToken = (req, res, next) => {
    const token = req.cookies.Authorization;

    try {

        if (!token ) {
            throw new Error('token not found');
        }

        const verify = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);

        req.isAuth = true;
        req.user = {
            id: Number(verify.id),
            name: verify.name,
            email: verify.email
        }

        return next();
    } catch (err) {
        req.isAuth = false;

        return next();
    }
}

module.exports = validToken;