import { DataTypes } from "sequelize";
import db from "../utils/database.js";


const User = db.define('users',{
    name:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type : DataTypes.STRING(50),
        allowNull :false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    timestamps: true,
    updatedAt: false
})


export default User;