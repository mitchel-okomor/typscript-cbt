'use strict';
import { Sequelize, DataTypes } from "sequelize";


const {
  Model
} = require('sequelize');
 const userModel = (sequelize:Sequelize, DataTypes:any) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }
  };
  user.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email:{type: DataTypes.STRING,     unique: true
	},
	password: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: 'user',
  });
  return user;
};

export default userModel;