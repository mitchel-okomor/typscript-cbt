'use strict';
import { Sequelize, DataTypes, Model } from "sequelize";
import {joiValidate} from '../../helpers/joi';
import Joi from 'joi';
import {Request} from 'express';
import {QuestionType} from "../../helpers/interfaces";


 module.exports = (sequelize:Sequelize, DataTypes:any) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
	  question.belongsTo(models.category, { foreignKey: 'categoryId', as: 'category' });

	  question.hasMany(models.answer, {
        as: 'options',
        foreignKey: 'questionId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

    }

	validatePostData = async function (req:Request, data:QuestionType) {
		const schema = Joi.object({
		  title: Joi.object().required(),
		  option1: Joi.object().required(),
		  option2: Joi.object().required(),
		  option3: Joi.object().required(),
		  option4: Joi.object().required(),
		});
	
		return joiValidate(schema, req, true, data);
	  };
  };
  question.init({
    title: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'question',
  });
  return question;
};

