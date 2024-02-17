import { Router } from "express";

import usersController from "../../resources/users/users.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new usersController();
const usersRouter = Router();

usersRouter.put("/update", auth, service.update);
usersRouter.get("/all", auth, service.users);
usersRouter.post("/signup", service.signUp);
usersRouter.post("/signin", service.signIn);
usersRouter.get("/me", auth, service.me);

export default usersRouter;
