import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
	description:{
		type: String,
		default: ""
	},
	date:{
		type: Date,
		default: Date.now()
	}
});

export default mongoose.model('category', CategorySchema);
