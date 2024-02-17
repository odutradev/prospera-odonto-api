import jwt from "jsonwebtoken";
import log from 'gulog';

import { sendError } from "../app.js";

const auth = (req, res, next) => {

  var token = req.header('authorization');
  if (!token) return sendError(res, 'no_token');

  try {
    jwt.verify(token, process.env.JWT, (error, decoded) => {
      if (error) return sendError(res, 'token_is_not_valid');
        req.user = decoded.id;
        next();
    });
  } catch (err) {
    log.error(`Autenticação não autorizada:`);
    console.log(err);
    return sendError(res, 'internal_error');
  }
};

export default auth;