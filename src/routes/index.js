import { Router } from "express";

import categorysRouter from "./resources/categorys.router.js"; 
import usersRouter from "./resources/users.router.js";
import cartRouter from "./resources/cart.router.js";

export const router = Router();

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

router.use('/category', categorysRouter);
router.use('/user', usersRouter);
router.use('/cart', cartRouter);