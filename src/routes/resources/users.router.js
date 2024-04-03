import { Router } from "express";

import usersController from "../../resources/users/users.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new usersController();
const usersRouter = Router();

usersRouter.put("/ping", service.ping);

export default usersRouter;
