const { connection } = require("../config/db")
const mongoose = require("mongoose")

const BookingSchema = mongoose.Schema({
    user: { type: String, required: true },
    flight: { type: String, required: true }
}, {
    versionKey: false
})

const BookingModel = mongoose.model("Booking", BookingSchema)

module.exports = {
    BookingModel
}
