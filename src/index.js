import express from "express"
import {PORT} from "./config/serverConfig.js"


const app = express()

app.js

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})