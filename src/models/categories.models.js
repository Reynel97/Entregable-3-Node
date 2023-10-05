import { DataTypes } from "sequelize";
import db from "../utils/database.js";




const Category = db.define('categories',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type :DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    }
})

export default Category;