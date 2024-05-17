import { Router } from "express";

import serviceController from "../../resources/service/service.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new serviceController();
const serviceRouter = Router();

serviceRouter.delete("/delete", auth, service.delete);
serviceRouter.post("/create", auth, service.create);
serviceRouter.put("/update", auth, service.update);
serviceRouter.post("/get", auth, service.get);

export default serviceRouter;