import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    } ,
    describe:{
        type: String,
       
    },
    isComplete: {
        type: Boolean,
        
    },
    color: {
        type: Number,
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