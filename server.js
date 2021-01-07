const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config();

const port = process.env.PORT || 3000

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

app.listen (process.env.port, () => {
    if (process.env.NODE_ENV !== ('development' && 'test')) {
        console.log(`Running on ${process.env.NODE_ENV} environment on port:${process.env.port} `)
    }
})