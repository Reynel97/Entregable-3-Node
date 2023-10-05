import Category from "../../models/categories.models.js";
import Task from "../../models/tasks.models.js";
import User from "../../models/users.models.js";

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      include: [{ 
        model: Task,
        attributes: ['title', 'description', 'completed'], 
        include: {
            model:Category ,
            attributes :['name', 'userId']
        }
    }],
    });
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
};

export { createUser, getUser };
