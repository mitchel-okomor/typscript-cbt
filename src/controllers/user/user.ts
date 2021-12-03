import {Request, Response} from 'express'
import db from '../../database/models';
import { fetchUser, fetchRandomUser } from '../../services/user/user';
import { errorObject, responseObject } from '../../helpers/common';
import { RespType} from '../../helpers/interfaces';



const UserController :any= {}



UserController.getUser = async function (req:Request, res:Response, next:Function) {
	const { email }:string|any = req.params.email;
	try {
	  const userData:RespType = await fetchUser(email);
	  const { rCode, rState, rData, rMessage } = userData;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };


  UserController.getRandom = async function (req:Request, res:Response, next:Function) {
	try {
	  const userData:RespType = await fetchRandomUser();
	  const { rCode, rState, rData, rMessage } = userData;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

  UserController.getMale = async function (req:Request, res:Response, next:Function) {
	try {
	  const loggedInUser:RespType = await fetchUser("male");
	  const { rCode, rState, rData, rMessage } = loggedInUser;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

  UserController.getFemale = async function (req:Request, res:Response, next:Function) {
	try {
	  const loggedInUser:RespType = await fetchUser('female');
	  const { rCode, rState, rData, rMessage } = loggedInUser;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };
export default UserController;
