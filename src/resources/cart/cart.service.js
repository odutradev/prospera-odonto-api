import jwt from "jsonwebtoken";

import cartModel from "../../models/cart.js";

export default class Service {
	
    async create({name, description, value, valueRange, images, links, status, category, priority, author}){
        try {
						const category = new cartModel({
							name, 
							description,
							value,
							valueRange,
							images, 
							links, 
							status, 
							category, 
							priority, 
							author
						});
						await category.save();
						return category;
						return user;	
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async get(){
        try {
						return await cartModel.find().sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({ id, data }){
        try {
					const cart = await cartModel.findById(id);
					if (!cart) return { error: "cart_not_found" };
					const newCart = await cartModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
					return newCart;
        } catch (err) {
            return { error: "internal_error" };
        }
    }
	
    async delete({ id }){
        try {
					const cart = await cartModel.findById(id);
					if (!cart) return { error: "cart_not_found" };
					const newCart = await cartModel.findByIdAndDelete(id);
					return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    
}