import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: 'abv'
    },
    date: {
        type: String,
        required: true
    } ,
    describe:{
        type: String,
       
    },
    time: {
        type: String,
    },
    isComplete: {
        type: Boolean,
        default: "false"
        
    },
    color: {
        type: String,
    },
    option:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
});

const Task = mongoose.model("Task", taskSchema);
export default Task;