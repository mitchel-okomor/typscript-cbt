import bcrypt from 'bcrypt-nodejs';
import {  responseInfo } from '../../helpers/common';
import db from '../../database/models';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
  HTTP_SERVER_ERROR
} from '../../helpers/httpCodes';
import { RespType} from "../../helpers/interfaces";


const {gameQuestion, game, answer, question} = db;



  
  /**
   * Creates a user in the database and returns the user's basic detials.
   *
   * @param {object} data
   * @returns User object
   */
  export const createQuestionAnswers = async (questions:any, gameId:string, userId:string):Promise<RespType | any> => {
  
	try {
		const questionResponse = await gameQuestion.bulkCreate(questions.map((question:any)=>{
			return { questionId: question.id, gameId, userId}
		}));
		  const createdQuestions = questionResponse.dataValues


	  console.log()
		  return responseInfo(
			HTTP_CREATED,
			'success',
			questionResponse,
			'Category created Successfull! '
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
  export const acceptChallenge = async (gameId:string, userId:string):Promise<RespType | any>  => {
	try {
	  const newData = await game.update(
		{
			inviteStatus: 'accepted',
		  status:'started',

		},
		{
		  where: {
			gameId: gameId
		  }
		}
	  );
	  return responseInfo(
		HTTP_CREATED,
		'success',
		newData,
		'Game status chnaged'
	  );
	} catch (err) {
	  if (err) {
		console.log(err);
		return responseInfo(
		  HTTP_SERVER_ERROR,
		  'error',
		  null,
		  'A server error occured!'
		);
	  }
	}
  };
  
  export const fetchGame = async (gameId:string):Promise<RespType>  => {
	try {
	  const category:any = await game.findOne({
		where: { id: gameId }
	  });
	
			return responseInfo(HTTP_OK, 'success', category.dataValues, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const fetchAllGames = async (userId:string):Promise<RespType> => {
	try {
	  const questions:any = await game.findAll(
		{
			where: { id: userId }
		  }, 
		{  include:[{
		model: question,
		as:'question'
	   },
	   {
		model: answer,
		as:'options'
	   }
	]});
			return responseInfo(HTTP_OK, 'success', questions, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const startGame = async (userId:string, oponentId: string):Promise<RespType> => {
	try {
	  const gameInfo:any = await game.create({
		turn: userId
	  });

	  const gameUsers:any = await game.bulkCreate([{
	gameId: gameInfo.id,
	userId: userId
	  }, {
		gameId: gameInfo.dataValues.id,
		userId: oponentId
		  }]);

const responseData = {...gameInfo.dataValues, ...gameUsers}
	return responseInfo(HTTP_OK, 'success', responseData, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };
