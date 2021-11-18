import bcrypt from 'bcrypt-nodejs';
import {  responseInfo } from '../../helpers/common';
import db from '../../database/models';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
  HTTP_SERVER_ERROR
} from '../../helpers/httpCodes';
import {ScoreType, RespType} from "../../helpers/interfaces";


const Score = db.score

const User = db.user


  
  /**
   * Creates a user in the database and returns the user's basic detials.
   *
   * @param {object} data
   * @returns User object
   */
  export const createScore = async (data:ScoreType, userId:string|undefined):Promise<RespType | any> => {
	const { score } = data;

	try {
		const scoreResponse = await Score.create({
			score:score,
			userId: userId,
		  });
		  const createdScore = scoreResponse.dataValues

	  return responseInfo(
			HTTP_CREATED,
			'success',
			createdScore,
			''
		  );
	
	} catch (err) {
	  console.log(err);
	  if (err) {
		return responseInfo(
		  HTTP_SERVER_ERROR,
		  'error',
		  null,
		  'A server error occured'
		);
	  }
	}
  };
  
  /**
   *
   * @param {String} id
   * @param {Object} data
   * @returns
   */
 
  
  export const getUserScores = async (userId:string):Promise<RespType>  => {
	try {
	  const scores:any = await Score.findAll({
		where: { userId },
		include:[{
			model: User,
			as:'user'
		   }]
	  });
	
			return responseInfo(HTTP_OK, 'success', scores.dataValues, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const fetchAllScores = async ():Promise<RespType> => {
	try {
	  const scores:any = await Score.findAll({  include:[{
		model: User,
		as:'user'
	   }]});
			return responseInfo(HTTP_OK, 'success', scores, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };


