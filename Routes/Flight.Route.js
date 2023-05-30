const { FlightModel } = require("../Models/Flight.Model")
const express = require("express")

const FlightRouter = express.Router()
FlightRouter.use(express.json())

FlightRouter.post("/flights", async (req, res) => {
    try {
        const data = new FlightModel(req.body)
        await data.save()
        res.status(201).send(data)
    } catch (error) {
        res.send(error)
    }
})

FlightRouter.get("/flights", async (req, res) => {
    try {
        const data = await FlightModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
    }
})

FlightRouter.get("/flights/:id", async (req, res) => {
    const ID = req.params.id
    try {
        const data = await FlightModel.find({ _id: ID })
        res.status(200).send(data)
    } catch (error) {
        res.send(error)
    }
})

FlightRouter.patch("/flights/:id", async (req, res) => {
    const ID = req.params.id
    const body = req.body
    try {
        await FlightModel.findByIdAndUpdate({ _id: ID }, body)
        const data = await FlightModel.find({ _id: ID })
        res.send("Updated successfully")
    } catch (error) {
        res.send(error)
    }
})


FlightRouter.delete("/flights/:id", async (req, res) => {
    const ID = req.params.id
    try {
        await FlightModel.findByIdAndDelete({ _id: ID })
        res.send("Deleted successfully")
    } catch (error) {
        res.send(error)
    }
})




module.exports = {
    FlightRouter
}