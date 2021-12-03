import {Request, Response} from 'express'

import { createQuestionAnswers, startGame, fetchGame, fetchAllGames, acceptChallenge } from '../../services/game/index';
import { errorObject, responseObject } from '../../helpers/common';
import {RespType, QuestionType, UserType} from '../../helpers/interfaces';
import db from '../../database/models';

const Game = db.game;

const gameController :any= {}



gameController.get = async function (req:Request, res:Response, next:any) {
	const { id }:any = req.params;
	try {
	  const response:RespType = await fetchGame(id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };
  gameController.getAll = async function (req:Request, res:Response, next:any) {
	const { user}:any= req;

	try {
	  const response:RespType = await fetchAllGames(user.id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

gameController.start = async function (req:Request, res:Response, next:any) {
const opponetId = req.params.id;
  const { user}:any= req;


  try {
    const resp:RespType = await startGame(user.userId, opponetId);
    const { rCode, rState, rData, rMessage } = resp;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

// Registration Route
gameController.acceptChallenge = async function (req:Request, res:Response, next:any) {
  const gameId = req.params.gameId;
  const { user}:any= req;


  try {
    const resp:RespType = await acceptChallenge(gameId, user.id);
    const { rCode, rState, rData, rMessage } = resp;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

gameController.submitAnswer = async function (req:Request, res:Response, next:any) {

	const {questions}:any = req.body;
	const gameId = req.params.gameId;
	const { user}:any= req;
  

  
	try {
	  const resp:RespType = await createQuestionAnswers( questions, gameId, user.id);
	  const { rCode, rState, rData, rMessage } = resp;
  
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  console.log(err);
  
	  return errorObject(res, 500, JSON.parse(err.message));
	}
  };


export default gameController;
