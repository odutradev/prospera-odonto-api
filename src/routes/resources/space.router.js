import { Router } from "express";

import spaceController from "../../resources/space/space.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new spaceController();
const spaceRouter = Router();

spaceRouter.delete("/delete", auth, service.delete);
spaceRouter.post("/create", auth, service.create);
spaceRouter.put("/update", auth, service.update);
spaceRouter.get("/get", auth, service.get);

export default spaceRouter;