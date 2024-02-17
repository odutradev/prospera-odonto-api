import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  name: {
    type: String,
  },
	description:{
		type: String,
		default: ""
	},
	value:{
		type: Number,
		default: 0
	},
	valueRange:{
		start:{
			type:Number,
			default: 0
		},
		end:{
			type: Number,
			default: 0
		}
	},
	images:{
		type: Array
	},
	links:{
		type: Array
	},
	status:{
		type: String,
		default: "não comprado"
	},
	category:{
		type: String,
	},
	priority:{
		type: Number
	}
});

export default mongoose.model('cart', CartSchema);
