let {appointment} = require('../models')

let apptController = {}

apptController.newAppointment = async (req, res) => {
    let {description, date} = req.body
    let userId = req.userId

    let resp = await appointment.create({
        description,
        date,
        user_id: userId
    })

    res.json({
        message: "Appointment created",
        data: resp
    })
}

module.exports = apptController