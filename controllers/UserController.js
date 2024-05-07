const { User, Token, Sequelize, Order, Product } = require("../models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { transporter } = require("../config/nodemailer");
const { jwt_secret } = require("../config/config.json")['development'];
const { Op } = Sequelize;

const UserController = {
    async create(req, res, next) {
        try {
            const password = await bcrypt.hash(req.body.password, 10);
            req.body.password = password;
            req.body.role = "user";
            const user = await User.create({...req.body, password:password, confirmed: false, role: "user"});
            const url = `http://localhost:3000/users/confirm/${req.body.email}`;
            await transporter.sendMail({
                to: req.body.email,
                subject: "Confirme su registro",
                html: `<h3> Bienvenido, estás a un paso de registrarte </h3>
                <a href="${url}"> Clica para confirmar tu registro</a>
                `,
              });
        
            res.status(201).send({msg: "User created successfully!", user});
        } catch (error) {
            console.error(error);
            next(error);
        }
    },
    async confirm(req,res){
        try {
          await User.update({confirmed:true},{
            where:{
              email: req.params.email
            }
          })
          res.status(201).send({msg: "User confirmed successfully"});
        } catch (error) {
          console.error(error)
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
            };

            if(!user.confirmed) {
                return res.status(400).send({msg: "You must confirm your email buddy"});
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
            const users = await User.findAll({
                include:[{model: Order,include: [{model: Product,attributes:["name", "price"], through: {attributes: []}}]}]
            });
            res.send({msg:"All users", users});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async update(req, res, next) {
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.id,
                }
            });
            res.status(201).send({msg: "User updated successfully"});
        } catch (error) {
            console.error(error);
            next(error)
        }
    },
    async delete(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id,
                },
            });
            res.send("User deleted successfully");
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
    async getUserOnline(req, res) {
        try {
            const user = await User.findOne({
                where: {id: req.user.id},
                include:[{model: Order,include: [{model: Product,attributes:["name", "price"], through: {attributes: []}}]}],
            });
            res.send({msg: "User online is:", user});
        } catch (error) {
            console.error(error);
            res.status(500).send(error);
        }
    },
};

module.exports = UserController;