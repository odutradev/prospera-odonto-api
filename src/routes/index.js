import { Router } from "express";

import serviceRouter from "./resources/service.router.js";
import usersRouter from "./resources/users.router.js";
import spaceRouter from "./resources/space.router.js";

export const router = Router();

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

router.use('/service', serviceRouter);
router.use('/space', spaceRouter);
router.use('/user', usersRouter);