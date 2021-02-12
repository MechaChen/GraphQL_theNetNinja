const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// connect to mongodb atlas
// make sure to replace my db string & creds with your own
mongoose.connect(
    'mongodb+srv://Benson:YueGp60208@cluster0.zjfsh.mongodb.net/main?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.once('open', () => console.log('connected to database'))

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})
