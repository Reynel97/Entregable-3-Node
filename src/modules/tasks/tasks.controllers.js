import Category from "../../models/categories.models.js";
import Task from "../../models/tasks.models.js";

const createTask = async (req, res) => {
  try {
    const { category, ...task } = req.body;
    const [newTask, created] = await Task.findOrCreate({
      where: { title: task.title },
      defaults: task,
    });

    const taskCategory = await Category.findOne({
      where: { name: category },
    });
    await newTask.addCategory(taskCategory);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const task = await Task.findByPk(id)
    task.completed = completed;
    await task.save();
    console.log(completed)
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createTask, deleteTask, updateTask };
