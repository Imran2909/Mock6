const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()


const Authenticate = async (req, res, next) => {
    const token = await req.headers.authorization
    console.log(token)
    if (token) {
        jwt.verify(token, "imran", (err, decode) => {
            if (decode) {
                console.log(decode)
                next()
            }
        })
    }
    else {
        res.status(404).send("Please login first")
    }

}


module.exports = {
    Authenticate
}
