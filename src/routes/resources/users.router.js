import { Router } from "express";

import usersController from "../../resources/users/users.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new usersController();
const usersRouter = Router();

usersRouter.put("/update-password", service.updatePassword);
usersRouter.delete("/delete", auth, service.delete);
usersRouter.put("/update", auth, service.update);
usersRouter.get("/users", service.users);
usersRouter.post("/signin", service.signIn);
usersRouter.post("/signup", service.signUp);
usersRouter.get("/me", auth, service.me);

export default usersRouter;