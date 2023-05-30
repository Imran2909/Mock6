
const { BookingModel } = require("../Models/Booking.Model")
const express = require("express")

const BookingRouter = express.Router()
BookingRouter.use(express.json())

BookingRouter.post("/booking", async (req, res) => {
    try {
        const data = new BookingModel(req.body)
        await data.save()
        res.status(201).send({ "Msg": "Bookin Successfull", data })
    } catch (error) {
        res.send(error)
    }
})


BookingRouter.get("/dashboard", async (req, res) => {
    try {
        const data = await BookingModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})



module.exports = {
    BookingRouter
}
