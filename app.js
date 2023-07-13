// There seems to be stupid issues with the ports, and using a restart on winnat seemed to work
// https://stackoverflow.com/questions/9164915/node-js-eacces-error-when-listening-on-most-ports
// cmd:admin 
// net stop winnat
// net start winnat

import express from 'express'
import routes from './source/routes/route.js'

const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)

app.listen(port, function() {
  console.log(`Server started on http://localhost:${port}`)
})