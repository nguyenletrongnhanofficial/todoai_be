import express from "express";
const router = express.Router();

import { taskController } from "../controllers/task.controller.js";

//Add task
router.post("/addTask", taskController.addTask);

//GET ALL TASK
router.get("/getAllTask", taskController.getAllTask);

//GET A TASK
router.get("/getTask/:id", taskController.getTask);

//UPDATE TASK
router.put("/updateTask/:id", taskController.updateTask);

//DELETE TASK
router.delete("/deleteTask/:id", taskController.deleteTask);

export default router;