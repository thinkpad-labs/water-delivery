import express, { json } from 'express'
import cors from 'cors'

const app = express()

const port = process.env.PORT

app.use(json())
app.use(cors())

app.listen(port, (err) => {
    if (err) console.error("Couldn't spin up server\n", err);
    else console.log("Server up and running!")
})