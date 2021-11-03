'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";
import Joi from 'joi';
import {Request} from 'express';
import {UserType} from "../../helpers/interfaces";



 module.exports  = (sequelize:Sequelize, DataTypes:any) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models:any) {
      // define association here
    }

  };
  User.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email:{type: DataTypes.STRING,     unique: true
	},
	password: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: 'user',
  });

  return User;
};

