import bcrypt from 'bcrypt-nodejs';
import {  responseInfo } from '../../helpers/common';
import db from '../../database/models';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
  HTTP_SERVER_ERROR
} from '../../helpers/httpCodes';
import {QuestionType, RespType} from "../../helpers/interfaces";


const Question = db.question;
const Answer = db.answer



  
  /**
   * Creates a user in the database and returns the user's basic detials.
   *
   * @param {object} data
   * @returns User object
   */
  export const createQuestion = async (data:QuestionType):Promise<RespType | any> => {
	const { title, categoryId, options } = data;
  
	try {
		const questionResponse = await Question.create({
			title: title?.trim(),
			categoryId: categoryId,
		  });
		  const createdQuestions = questionResponse.dataValues
const optionsWithQuestionId = options.map((item:any)=>{
	return {...item,questionId:createdQuestions.id}
})

		  const answerResponse = await Answer.bulkCreate(
		optionsWithQuestionId
		  )

		const questionData = {question:questionResponse, options: answerResponse}

	  console.log()
		  return responseInfo(
			HTTP_CREATED,
			'success',
			questionData,
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
  export const updateQuestion = async (id:string, data:any):Promise<RespType | any>  => {
	const { title, categoryId, options } = data;
	try {
	  const newQuestion = await Question.update(
		{
		  title,
		  categoryId
		},
		{
		  where: {
			id: id
		  }
		}
	  );
	  return responseInfo(
		HTTP_CREATED,
		'success',
		newQuestion,
		'Category updated successful'
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
  
  export const fetchQuestion = async (categoryId:string):Promise<RespType>  => {
	try {
	  const category:any = await Question.findOne({
		where: { id: categoryId }
	  });
	
			return responseInfo(HTTP_OK, 'success', category.dataValues, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const fetchQuestions = async ():Promise<RespType> => {
	try {
	  const questions:any = await Question.findAll({  include:[{
		model: Answer,
		as:'options'
	   }]});
			return responseInfo(HTTP_OK, 'success', questions, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const deleteQuestion = async (questionId:string):Promise<RespType> => {
	try {
	  const question:any = await Question.remove({
		where: { id: questionId }
	  });
	
			return responseInfo(HTTP_OK, 'success', question.dataValues, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };
