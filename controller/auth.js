const { generateToken } = require("../helper/jwt");
const { gameHistory } = require("../models");
const { gameUser } = require("../src/game")
    // const passport = require("../lib/passport");

async function register(req, res) {
    try {
        let data = await gameHistory.register(req.body);
        res.status(201).json({ message: "Register success" });
    } catch (error) {
        console.log(error);
    }
}

async function viewUsers(req, res) {
    try {
        let data = await gameHistory.findAll({ attributes: ["id", "username"] });
        res.status(200).json({ data });
    } catch (error) {
        console.log(error);
    }
}

async function login(req, res) {
    try {
        // console.log('masuk control')
        let user = await gameHistory.login(req.body);
        console.log(user, "ss");
        let token = generateToken(user);
        res.status(200).json({
            data: {
                id: user.id,
                username: user.username,
                accesToken: token,
            },
        });
    } catch (error) {}
}

async function game(req, res) {
    try {
        let game = await gameUser.game(req.body)
        res.status(201).json
    } catch (error) {
        console.log(error)
    }

}

async function createRoom(req, res) {
    let player = await gameHistory.create()
    res.status(201).json
}
async function profile(req, res) {
    const currentUser = req.user;
    res.json(currentUser);
}
module.exports = { register, login, viewUsers, profile, game, createRoom };