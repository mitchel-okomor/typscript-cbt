import {Request, Response} from 'express'

import { createScore,  fetchAllScores, getUserScores } from '../../services/user/score';
import { errorObject, responseObject } from '../../helpers/common';
import {RespType, QuestionType} from '../../helpers/interfaces';
import db from '../../database/models';

const Question = db.question;

const ScoreController :any= {}



ScoreController.getUserScores = async function (req:Request, res:Response, next:any) {
	const { id }:any = req.user;
	try {
	  const response:RespType = await getUserScores(id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };
  ScoreController.getAll = async function (req:Request, res:Response, next:any) {
	try {
	  const response:RespType = await fetchAllScores();
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

  ScoreController.save = async function (req:Request, res:Response, next:any) {
	  const {score} = req.body
	  const {user}:any = req;
	  const {id} = user;
	try {
	  const response:RespType = await createScore(score, id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };



export default ScoreController;
