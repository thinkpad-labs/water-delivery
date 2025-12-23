import express, { json } from 'express'
import cors from 'cors'
import { distributors } from './routes/entities/distributors'

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.use("/distributors", distributors)

app.listen(port, (err) => {
    if (err) console.error("Couldn't spin up server\n", err);
    else console.log("Server up and running!")
})