import { Schema , model , models } from 'mongoose';

const userSchema = new Schema({
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  height: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

const User = models.User || model('User', userSchema);

export default User;