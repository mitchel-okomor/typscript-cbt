import {Request, Response} from 'express'
import db from '../../database/models';
import { createUser, loginUser, updateUser, fetchUser } from '../../services/auth';
import { errorObject, responseObject } from '../../helpers/common';
import { RespType, UserType, UserUpdateType} from '../../helpers/interfaces';
import {validateSignUpData, validateLoginData} from '../../helpers/validatePostData';

const User = db.user


const AuthController :any= {}

// Login Route
AuthController.login = async function (req:Request, res:Response, next:any) {
  const { email, password } = req.body;

  	//Joi validation
	  const validate:any = await validateLoginData(req, {email, password} );
	  console.info(validate)
   if(validate.rState==='error'){
	   const { rCode, rState, rMessage } = validate;
	   return responseObject(res, rCode, rState, null, rMessage);}
  try {
    const loggedInUser:RespType = await loginUser(email, password);
    const { rCode, rState, rData, rMessage } = loggedInUser;
    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    if (err) {
		console.log(err)
      return errorObject(res, 500, JSON.parse(err.message));
    }
  }
};

AuthController.getUser = async function (req:Request, res:Response, next:Function) {
	const { email }:string|any = req.user;
	try {
	  const loggedInUser:RespType = await fetchUser(email);
	  const { rCode, rState, rData, rMessage } = loggedInUser;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

// Registration Route
AuthController.registerUser = async function (req:Request, res:Response, next:any) {
	const { lastname, firstname, email, password } = req.body;
	const reqData:UserType = { lastname, firstname, email, password };

	//Joi validation
   const validate:any = await validateSignUpData(req,reqData );
   console.info(validate)
if(validate.rState==='error'){
    const { rCode, rState, rMessage } = validate;
    return responseObject(res, rCode, rState, null, rMessage);}

  try {
    const resp:RespType = await createUser(reqData);
    const { rCode, rState, rData, rMessage } = resp;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

// Registration Route
AuthController.updateUser = async function (req:Request, res:Response, next:any) {
  const id = req.params.id;
  const { firstname, lastname, email }:UserUpdateType = req.body;

  const reqData = { firstname, lastname, email };

  try {
    const response:RespType = await updateUser(id, reqData);
    const { rCode, rState, rData, rMessage } = response;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

export default AuthController;
