import {Request, Response} from 'express'
import db from '../../database/models';
import { fetchUser } from '../../services/auth';
import { errorObject, responseObject } from '../../helpers/common';
import { RespType} from '../../helpers/interfaces';

const User = db.user


const playersController :any= {}



playersController.getRandomPlayer = async function (req:Request, res:Response, next:Function) {
	const { categoryId }:string|any = req.params;
	try {
	  const player:RespType = await fetchUser(categoryId);
	  const { rCode, rState, rData, rMessage } = player;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };




export default playersController;
