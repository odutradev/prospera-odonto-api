import { Router } from "express";

import cartController from "../../resources/cart/cart.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new cartController();
const cartRouter = Router();

cartRouter.delete("/delete", auth, service.delete);
cartRouter.post("/create", auth, service.create);
cartRouter.put("/update", auth, service.update);
cartRouter.get("/get", auth, service.get);

export default cartRouter;
