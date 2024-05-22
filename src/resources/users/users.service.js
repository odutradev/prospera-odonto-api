import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import userModel from "../../models/user.js";

export default class Service {

    async signIn({email, password }){
        try {
					 if (!email || !password) return { error: "no_credentials" };
					 const user = await userModel.findOne({ email });
					 if (!user) return { error: "user_not_found" };
					 var isPasswordMatch = await bcrypt.compare(password, user.password);
					 if (!isPasswordMatch) return { error: "invalid_credentials"};
					 const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT);
					 return { token };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async signUp({email, name, password, role}){
        try {
                     if (!email || !password) return { error: "no_credentials" };
					 const hasUser = await userModel.findOne({ email });
					 if (hasUser) return { error: "user_already_exists" };
                     var salt = await bcrypt.genSalt(10);
                     password = await bcrypt.hash(password, salt);
					 const user = new userModel({ email, name, password, role: role == process.env.ADMIN ? 'admin' : 'normal' });
					 await user.save();
					 const token = jwt.sign({ id: user._id, name }, process.env.JWT);
					 return { token };		 
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async me({}, id){
        try {
						const user = await userModel.findById(id).select('-password');
						if (!user) return { error: "user_not_found" };
						return user;	
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async users(){
        try {
						return await userModel.find().sort({ date: -1 }).select('-password');;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({ data, id }){
        try {
					const user = await userModel.findById(id);
					if (!user) return { error: "user_not_found" };
					const newUser = await userModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
					return newUser;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({ id }){
        try {
					const user = await userModel.findById(id);
					if (!user) return { error: "user_not_found" };
					const newUser = await userModel.findByIdAndDelete(id);
					return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    
}