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
		tax: {
			type: Number,
			default: 0
		},
		cardChange: {
			type: Number,
			default: 0
		},
		materialTime: {
			type: Number,
			default: 0
		},
		valueTime: {
			type: Number,
			default: 0
		},
		dentistValue: {
			type: Number,
			default: 0
		},
		annualCapital: {
			type: Number,
			default: 0
		}
	}
});

export default mongoose.model('space', SpaceSchema);
