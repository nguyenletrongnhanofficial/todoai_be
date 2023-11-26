import Task from "../models/task.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const taskController =  {
    //ADD Task
    addTask: async(req, res) => {
        try {
            const newTask = new Task(req.body);
            const savedTask = await newTask.save();
            if(req.body.user) {
                const user = User.findById(req.body.user);
                await user.updateOne({ $push: {tasks: savedTask._id}});
            }
            res.status(200).json({
                success: true,
                message: savedTask._id,
                
            });
        }catch(error){
            res.status(500).json({
                success: false,
                message: "Error create Task"
            });
        }
    },

    //GET ALL TASK
    getAllTask: async(req, res) => {
        try{
            const tasks = await Task.find();
            res.status(200).json({
                success: true,
                message: tasks
            });
        }catch(error){
            res.status(500).json({
                success: false,
                message: "Error when get all Tasks",
            });
        }
    },

    //GET A TASK
    getTask: async (req, res) => {
        try {
          const task = await Task.findById(req.params.id);
          res.status(200).json({
            success: true,
            message: task,
          });
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "Error when get a task",
          });
        }
      },

    //UPDATE TASK
    updateTask: async(req, res) => {
        try{
            const task = await Task.findOne({_id: req.params.id});
            
            if (!task) {
                return res.status(404).json({
                    success: false,
                    message: "Task not found",
                });
            }
            await task.updateOne({$set: req.body});
            res.status(200).json({
                success: true,
                message:"Updated Successfully!"
            })
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: "Error when update task",
            })
        }
    } ,
    
    //DELETE TASK
    deleteTask: async(req, res) => {
        try {
            await User.updateMany(
                {tasks: req.params.id},
                {$pull: {tasks: req.params.id}}
            );
            await Task.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success: true,
                message: "Delete Succesfully"
            })
        }
        catch(error){
            res.status(500).json({
                success:false,
                message:"Error when delete task",
            })
        }
    }
};

