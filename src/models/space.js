import mongoose from 'mongoose';

const SpaceSchema = new mongoose.Schema({
	name: String,
	author: String,
	contact: String,
	descripton: String,
	date:{
	  type: Date,
	  default: Date.now()
	},
	config:{
		tax: Number,
		cardChange: Number,
		materialTime: Number,
		valueTime: Number,
		dentistValue: Number,
		annualCapital: Number
	}
});

export default mongoose.model('space', SpaceSchema);
