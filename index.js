const express = require("express")
const { UserRouter } = require("./Routes/User.Route")
const { FlightRouter } = require("./Routes/Flight.Route")
const { BookingRouter } = require("./Routes/Booking.Route")
const connection = require("./config/db")
const { Authenticate } = require("./Middleware/Authenticate")
const app = express()

app.get("/", (req, res) => {
    res.send("Home")
})

app.use("/user", UserRouter)

app.use(Authenticate)
app.use("/plane", FlightRouter)
app.use("/book", BookingRouter)


app.listen(4500, () => {
    console.log("Server start at 4500")
})