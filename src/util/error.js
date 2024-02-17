import chalk from 'chalk';
import log from 'gulog';
import fs from "fs";

import config from '../config/default.js';

export default class {
  sendError(res, errorMessage, options={logger:true}) {
    fs.readFile("./src/config/errors.json", (err, data) => {
      data = JSON.parse(data);
      errorMessage = errorMessage.toString().toLowerCase();
      if (!data[errorMessage]) {
        throw new Error("Error message does not exist");
      }

      const error = data[errorMessage];
      error.message = error.message.replace("%%%", options.replaceMessage);

      if (errorMessage === "internal_error" && config.logInternalErrors){
        if (options.logger) log.error(error.message + ' - ' +`${chalk.red(res.req.originalUrl ? res.req.originalUrl : 'sem data')}`);
      } else {
        if (options.logger && config.logGeneralErrors) log.error(error.message + ' - ' +`${chalk.red(res.req.originalUrl ? res.req.originalUrl : 'sem data')}`);
      }
     
      try {
        return res.status(error.statusCode).json({
 
            code: error.statusCode,
            msg: error.message,
      
        });
      } catch {}
    });
  }
}
