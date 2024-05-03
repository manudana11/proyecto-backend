const { User, Token, Sequelize } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")['development'];
const { Op } = Sequelize;

const UserController = {
    async create(req, res) {
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            req.body.password = password;
            req.body.role = "user";
            const user = await User.create({...req.body, password:password, role: "user"});
            res.status(201).send({msg: "User created successfully!", user});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if(!user) {
                return res.status(400).send({msg: "Invalid user or password"});
            }

            const passwordMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!passwordMatch) {
                return res.status(400).send({msg: "Invalid user or password"});
            }
            const token = jwt.sign({id: user.id}, jwt_secret);
            await Token.create({UserId:user.id, token:token})
            res.send({msg: `Welcome ${user.name}`, user, token});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { userId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({msg: `See you later alligator`});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getAll(req, res) {
        try {
            const users = await User.findAll();
            res.send({msg:"All users", users});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.id,
                }
            });
            res.status(201).send({msg: "User updated successfully"});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};

module.exports = UserController;