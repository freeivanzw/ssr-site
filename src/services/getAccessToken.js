const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (user) => {
    const jwtData = {
        id: user.id,
        name: user.name,
        email: user.email,
    }

    return jwt.sign(jwtData, process.env.JWT_ACCESS_TOKEN, { expiresIn: '12h'});
}