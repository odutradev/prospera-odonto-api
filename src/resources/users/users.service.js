import jwt from "jsonwebtoken";

import userModel from "../../models/user.js";

export default class Service {

    async signIn({name, password}){
        try {
					 if (!name || !password) return { error: "no_credentials" };
					 const user = await userModel.findOne({ name });
					 if (!user) return { error: "user_not_found" };
					 const isPasswordMatch = (password === process.env.PASSWORD);
					 if (!isPasswordMatch) return { error: "invalid_credentials"};
					 const token = jwt.sign({ id: user._id}, process.env.JWT)	;
					 return { token };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async signUp({name, password}){
        try {
           if (!name || !password) return { error: "no_credentials" };
					 const hasUser = await userModel.findOne({ name });
					 if (hasUser) return { error: "user_already_exists" };
					 const isPasswordMatch = (password === process.env.PASSWORD);
					 if (!isPasswordMatch) return { error: "invalid_credentials"};
					 const user = new userModel({ name });
					 await user.save();
					 const token = jwt.sign({ id: user._id}, process.env.JWT);
					 return { token };		 
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async me({}, id){
        try {
						const user = await userModel.findById(id);
						if (!user) return { error: "user_not_found" };
						return user;	
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    
}