const express = require('express');
const mongoose = require('mongoose');
const appointmentRouter = require('./routes/appointmentRoutes.js');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json()); 
//connect with mongoDb Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.ATLAS_SERVER_ADDRESS}/${process.env.DATABASENAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then( () => {
  console.log('Connected to database ')
})
.catch( (err) => {
  console.error(`Error connecting to the database. \n${err}`);
})
//mongodb+srv://dhurgeswari:<password>@cluster0.uxruf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//http://localhost:3000/appointments
//For Ip whitelisting with Atlas : getting the IPV4 : https://whatismyipaddress.com/
app.use(cors());

app.use(appointmentRouter);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.listen(3000, () => { console.log('Server is running...') });