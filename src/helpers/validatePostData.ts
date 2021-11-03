import Joi from 'joi';
import {Request} from 'express'
import {joiValidate} from './joi';
import {LoginUserType, UserType} from './interfaces';


export const  validateSignUpData = async function (req:Request, data:UserType) {
	const schema = Joi.object({
	  firstname: Joi.string().required(),
	  lastname: Joi.string().required(),
	  email: Joi.string().email().required(),
	  password: Joi.string().required().min(6)
	  .max(20),
	});

	return joiValidate(schema, req, true, data);
  }; 


  export const  validateLoginData = async function (req:Request, data:LoginUserType) {
	const schema = Joi.object({
	  email: Joi.string().email().required(),
	  password: Joi.string().required()
	});

	return joiValidate(schema, req, true, data);
  }; 