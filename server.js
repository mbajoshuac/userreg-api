const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log(`successful connection made`)
}).catch(() => {
    console.log(`Something went wrong`)
});

app.listen (process.env.PORT, () => {
    
        console.log(`Running on ${process.env.NODE_ENV} environment on port:${process.env.PORT} `)
    
})