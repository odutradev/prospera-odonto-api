import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
	space: String,
	author: String,
	date:{
	  type: Date,
	  default: Date.now()
	},
	data:{
		name: String,
		description: String,
		value: {
			type: Number,
			default: 0
		},
		procedureTime: {
			type: Number,
			default: 0
		},
		paymentType: {
			type: Boolean
		},
		materialPrice: {
			type: Number,
			default: 0
		},
		anotherDentist: {
			type: Boolean
		},
		dentistPaidInPercentage: {
			type: Boolean
		},
		dentistValue: {
			type: Number,
			default: 0
		},
		materialPrice: {
			type: Number,
			default: 0
		},
		
	}
});

export default mongoose.model('service', ServiceSchema);
