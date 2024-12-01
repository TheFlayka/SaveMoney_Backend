import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './src/routers/userRouter.js'
import tokenRoutes from './src/routers/tokenRouter.js'
import moneyboxRoutes from './src/routers/moneyboxRouter.js'
import transactionRoutes from './src/routers/transactionRouter.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3405

app.use(express.json())
app.use(userRoutes)
app.use(tokenRoutes)
app.use(moneyboxRoutes)
app.use(transactionRoutes)

app.listen(port, () => console.log(`Server was start on port ${port}`))

// MongoDB
import { MongoClient } from 'mongodb'
const client = new MongoClient(process.env.URL)

async function start() {
	try {
		await client.connect()
		console.log('MongoDB connected')
	} catch (e) {
		console.log(e)
	}
}

start()
