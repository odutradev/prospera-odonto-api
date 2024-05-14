import serviceModel from "../../models/s.js";

export default class Service {

    async get({space}){
        try {
			return await serviceModel.find({space}).sort({ date: -1 });
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async create(data){
        try {
			var service = new serviceModel(data);
			await service.save();
			return service
        } catch (err) {
            console.log(err)
            return { error: "internal_error" } ;
        }
    }
    async update({ data, id }){
        try {
			const service = await serviceModel.findById(id);
			if (!service) return { error: "service_not_found" };
			const newService = await serviceModel.findByIdAndUpdate(id, { $set:{ ...data } }, { new: true });
            return newService;
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }
    async delete({ id }){
        try {
			const space = await serviceModel.findById(id);
			if (!space) return { error: "service_not_found" };
            await serviceModel.findByIdAndDelete(id);
		    return { success: true };
        } catch (err) {
            return { error: "internal_error" } ;
        }
    }

    
}