import express from "express"
import {PORT} from "./config/serverConfig.js"


const app = express()


//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

import apiRouter from "./routes/apiRoutes.js"

app.use('/api', apiRouter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})