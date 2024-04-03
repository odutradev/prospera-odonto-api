import jwt from "jsonwebtoken";

import userModel from "../../models/user.js";

export default class Service {

    async ping({}){
        try {
           return "OK"; 
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    
}