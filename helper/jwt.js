const jwt = require("jsonwebtoken");
const rahasia = "sdfdsgdfgdfhgfdhgfhrthrthe";

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username,
    };

    const token = jwt.sign(payload, rahasia);
    return token;
}

module.exports = { generateToken };