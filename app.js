const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const {dbConnect} = require('./utils/dbConnect')
require("dotenv").config(); 
const partnersRoute = require('./routes/partnersRoute')
const blogRoute = require('./routes/blogRoute')

const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.json()) 
app.use(cors());
dbConnect()

app.use(blogRoute)
app.use(partnersRoute)


app.listen(PORT, () => {
    console.log("server running on PORT", process.env.PORT)
})

module.exports = app;
