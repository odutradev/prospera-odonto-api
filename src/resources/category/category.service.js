import jwt from "jsonwebtoken";

import categoryModel from "../../models/category.js";

export default class Service {
	
    async create({name, description}){
        try {
						const hasCategory = await categoryModel.findOne({name});
						if (hasCategory) return { error: "category_not_found" };
						const category = new categoryModel({name, description});
						await category.save();
						return category;
						return user;	
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async get(){
        try {
						return await categoryModel.find().sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({ id, data }){
        try {
					const category = await categoryModel.findById(id);
					if (!category) return { error: "category_not_found" };
					const newCategory = await categoryModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
					return newCategory;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
	
    async delete({ id }){
        try {
					console.log(id)
					const category = await categoryModel.findById(id);
					if (!category) return { error: "category_not_found" };
					const newCategory = await categoryModel.findByIdAndDelete(id);
					return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    
}