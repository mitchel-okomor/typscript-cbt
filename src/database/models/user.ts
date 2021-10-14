'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";
import {joiValidate} from '../../helpers/joi';
import Joi from 'joi';
import {Request} from 'express';
import {UserType} from "../../helpers/interfaces";



 module.exports  = (sequelize:Sequelize, DataTypes:any) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
    }

	validatePostData = async function (req:Request, data:UserType) {
		const schema = Joi.object({
		  firstname: Joi.string().required(),
		  lastname: Joi.string().required(),
		  email: Joi.string().email().required(),
		  password: Joi.string().required().min(6)
		  .max(20),
		});
	
		return joiValidate(schema, req, true, data);
	  };
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

