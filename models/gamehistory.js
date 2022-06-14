'use strict';
const { Model } = require('sequelize');

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
    class gameHistory extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
        static encrypt = (password) => bcrypt.hashSync(password, 10);

        static register = ({ username, password }) => {
            const passwordTerenkripsi = this.encrypt(password);
            return this.create({ username, password: passwordTerenkripsi });
        };

        comparepassword = (password) => bcrypt.compareSync(password, this.password);

        static login = async({ username, password }) => {
            console.log({ username, password }, 'iii')
            try {
                console.log({ username, password }, 'iii')
                const user = await this.findOne({ where: { username } });
                if (!user) return Promise.reject("Username or Password Invalid!!!");

                const checkPassword = user.comparepassword(password);

                if (!checkPassword)
                    return Promise.reject("Username or Password Invalid!!!");
                return Promise.resolve(user);
            } catch (error) {
                Promise.reject(error);
            }
        };
    }
    gameHistory.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        history: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'gameHistory',
    });
    return gameHistory;
};