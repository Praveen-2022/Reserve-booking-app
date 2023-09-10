require('dotenv').config()
const cors = require("cors")
const express = require('express')
const mongoose = require('mongoose')
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const busOperatorRoutes = require('./src/routes/busOperatorRoutes')
const busDetailRoutes = require('./src/routes/busDetailsRoutes')
const port = process.env.PORT || 8080
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://javedansari:javed1993@cluster0.zabct1r.mongodb.net/test"

// Parse JSON bodies (as sent by API clients)
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

  // Connect to DATABASE
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cors())
app.use(helmet());
app.use(morgan("common"));

// routes
app.use('/',busOperatorRoutes)
app.use('/',busDetailRoutes)


// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))

