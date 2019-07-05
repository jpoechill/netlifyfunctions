// 1. Check for required enviroment variables
if (!process.env.FAUNADB_SECRET) {
  console.log('There is a secret')
  console.log(process.env.FAUNADB_SECRET)
} else  {
  console.log('There is NO secret')
  console.log(process.env.FAUNADB_SECRET)
}
