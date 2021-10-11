import {Request, Response} from 'express'

import { createUser, loginUser, updateUser, fetchUser } from '../../services/auth';
import db from '../../database/models';
import { errorObject, responseObject } from '../../helpers/common';

const User = db.User;

const AuthController :any= {}

// Login Route
AuthController.login = async function (req:Request, res:Response, next:any) {
  const { email, password } = req.body;
  try {
    const loggedInUser:any = await loginUser(email, password);
    const { rCode, rState, rData, rMessage } = loggedInUser;
    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    if (err) {
		console.log(err)
      return errorObject(res, 500, JSON.parse(err.message));
    }
  }
};

AuthController.getUser = async function (req:Request, res:Response, next:any) {
	const { email }:any = req.user;
	try {
	  const loggedInUser:any = await fetchUser(email);
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
//   const validate = await User.validatePostData(req);
//   if (validate !== true) {
//     const { rCode, rState, rMessage } = validate;
//     return responseObject(res, rCode, rState, null, rMessage);
//   }

  const { name, email, password } = req.body;

  const reqData = { name, email, password };

  try {
    const resp:any = await createUser(reqData);
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
  const { name, email } = req.body;

  const reqData = { name, email };

  try {
    const response:any = await updateUser(id, reqData);
    const { rCode, rState, rData, rMessage } = response;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

export default AuthController;
