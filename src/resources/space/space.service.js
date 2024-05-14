import spaceModel from "../../models/space.js";

export default class Service {

    async get({}, author){
        try {
			return await spaceModel.find({author}).sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async create({ data }, author){
        try {
            const findSpace = await spaceModel.findOne({author, name: data.name});
            if (findSpace) return { error: "space_already_exists"}
			var space = new spaceModel(data);
			await space.save();
			return space
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async update({ data, id }){
        try {
			const space = await spaceModel.findById(id);
			if (!space) return { error: "space_not_found" };
			const newSpace = await spaceModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
            return newSpace;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({ id }){
        try {
			const space = await spaceModel.findById(id);
			if (!space) return { error: "space_not_found" };
            await spaceModel.findByIdAndDelete(id);
		    return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    
}