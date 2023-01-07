import db from "../db";
import { DataTypes } from "sequelize"

export const User = db.define("User", {
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        
    }
})

User.sync()
.then( ()=> console.log("Table Created") )