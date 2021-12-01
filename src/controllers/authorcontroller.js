const AuthorModel = require("../models/Author_Model")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const createAuthor = async function (req, res) {
    try {
        const data = req.body
        let savedAuthor = await AuthorModel.create(data)
        res.status(201).send({ status: true, data: savedAuthor })
    }
    catch (err) {
        res.status(500).send({ status:false,message: err.message})
    }
}

const login = async function (req, res) {
    try {
        let useremail = req.body.email
        let userpassword = req.body.password
        if (useremail && userpassword) {
            let User = await AuthorModel.findOne({ email: useremail, password: userpassword, isDeleted: false })

            if (User) {
                const Token = jwt.sign({ userId: User._id }, "Group4")
                res.header('x-api-key', Token)
                console.log(Token)
             //Baba Ramdev->eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWE0YjVkNTIxNjUyOWJmNjQxMzJhNDQiLCJpYXQiOjE2MzgyNzA1NDl9.0lF59jcVftwL40SzejIeWKYCIm-1Phf89E4w1Kr3FA4

                res.status(200).send({ status: true })
            } else {
                res.status(400).send({ status: false, Msg: "Invalid Credentials" })
            }
        } else {
            res.status(400).send({ status: false, msg: "request body must contain  email as well as password" })
        }
    }
    catch (err) {
        res.status(500).send({ status:false,message: err.message})
    }
}


module.exports.createAuthor = createAuthor
module.exports.login = login