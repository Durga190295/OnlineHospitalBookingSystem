const express = require('express');
const appointmentModel = require('../models/appointment');
const app = express();

app.get('/appointments', async (req, res) => {
  const appointments = await appointmentModel.find({});

  try {
    res.send(appointments);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/appointment', async (req, res) => {
  console.log("req.query.patientName :: ",req.query.patientName);
  const appointment = await appointmentModel.find({"patientName":req.query.patientName});

  try {
    res.send(appointment);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/appointment/:phone', async (req, res) => {
  console.log("req.params.phone :: ",req.params.phone);
  const appointment = await appointmentModel.find({"phone":req.params.phone});

  try {
    res.send(appointment);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/appointment', async (req, res) => {
    const appointment = new appointmentModel(req.body);
  
    try {
      await appointment.save();
      res.send(appointment);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.delete('/appointment/:id', async (req, res) => {
    try {
      const appointment = await appointmentModel.findOneAndDelete({"_id":req.params.id})
  
      if (!appointment) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

  app.put('/appointment/:phone', async (req, res) => {
    console.log("req.params.id :: ",req.params.phone);

    try {
      await appointmentModel.findOneAndUpdate({"phone":req.params.phone}, req.body)
      //await appointmentModel.save()
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = app