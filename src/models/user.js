import mongoose from "mongoose";

const user = new mongoose.Schema({
  phone: {
    required: true,
    type: String,
  },
  
  password: {
    required: true,
    type: String,
  },
  passwordConfirm: {
    required: true,
    type: String,
  },

  email: {
    type: String,
  },

  name:{
    required: true,
    type: String,
  },
   
  tasks:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task"
  }]
});
const User = mongoose.model("user", user, "user");
export default User;
