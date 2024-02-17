import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
		unique: true
  },
	description:{
		type: String,
		default: ""
	},
	wallet:{
		type: Number,
		default: 0
	}
});

export default mongoose.model('user', UserSchema);
