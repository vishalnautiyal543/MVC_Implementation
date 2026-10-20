import express from "express"
import v1Routes from "./v1/v1Routes.js"
import v2Routes from "./v2/v2Routes.js"

const apiRouter = express.Router();

apiRouter.use('/v1',v1Routes)

apiRouter.use('/v2',v2Routes)

export default apiRouter;