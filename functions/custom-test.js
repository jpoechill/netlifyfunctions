
const faunadb = require("faunadb");

process.env.FAUNADB_SERVER_SECRET = 'fnADShQvS9ACAHyTZ1e6xHU9TCwXuwyN6N2o2HaU'
process.env.FAUNADB_SECRET = 'fnADShQvS9ACAHyTZ1e6xHU9TCwXuwyN6N2o2HaU'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: 'Everything is okay!!'
    })
}
