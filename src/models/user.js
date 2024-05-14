import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: String,
	email: {
	  type: String,
	  unique: true
	},
	password: String,
	role: {
	  default: "normal",
	  type: String
	},
	contact: String,
	descripton: String,
	date:{
	  type: Date,
	  default: Date.now()
	}
});

export default mongoose.model('user', UserSchema);
