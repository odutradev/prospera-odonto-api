import { Router } from "express";

import categoryController from "../../resources/category/category.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new categoryController();
const categoryRouter = Router();

categoryRouter.delete("/delete", auth, service.delete);
categoryRouter.post("/create", auth, service.create);
categoryRouter.put("/update", auth, service.update);
categoryRouter.get("/get", auth, service.get);


export default categoryRouter;
