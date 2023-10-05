import Category from "../../models/categories.models.js";


const createCategory = async (req, res) => {
    try {
        const newCategory = req.body
        await Category.create(newCategory)
        res.status(201).end()
    } catch (error) {
        res.status(400).json(error)
    }
}


export default createCategory