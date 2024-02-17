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
		type: Array,
		default: []
	},
	links:{
		type: Array,
		default: []
	},
	status:{
		type: String,
		default: "não comprado"
	},
	author:{
		type: String,
	},
	category:{
		type: String,
	},
	priority:{
		type: Number
	},
	date:{
		type: Date,
		default: Date.now()
	}
});

export default mongoose.model('cart', CartSchema);
