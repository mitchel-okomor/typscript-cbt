import {Request, Response} from 'express'

import { createQuestion, updateQuestion, fetchQuestions, fetchQuestion, deleteQuestion } from '../../services/admin/question';
import { errorObject, responseObject } from '../../helpers/common';
import {RespType, QuestionType} from '../../helpers/interfaces';
import db from '../../database/models';

const Question = db.question;

const categoryController :any= {}



categoryController.get = async function (req:Request, res:Response, next:any) {
	const { id }:any = req.params;
	try {
	  const response:RespType = await fetchQuestion(id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };
  categoryController.getAll = async function (req:Request, res:Response, next:any) {
	try {
	  const response:RespType = await fetchQuestions();
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

categoryController.create = async function (req:Request, res:Response, next:any) {

  const { title, categoryId, options }:QuestionType = req.body;

  const reqData = { title, categoryId, options };

  
	//Joi validation
	const validate = await Question.validatePostData(req,reqData );
	if(!validate){
		const { rCode, rState, rMessage } = validate;
		return responseObject(res, rCode, rState, null, rMessage);}

  try {
    const resp:RespType = await createQuestion(reqData);
    const { rCode, rState, rData, rMessage } = resp;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

// Registration Route
categoryController.update = async function (req:Request, res:Response, next:any) {
  const id = req.params.id;
  const { title, categoryId, options }:QuestionType = req.body;

  const reqData = { title, categoryId, options };

  try {
    const response:RespType = await updateQuestion(id, reqData);
    const { rCode, rState, rData, rMessage } = response;

    return responseObject(res, rCode, rState, rData, rMessage);
  } catch (err:any) {
    console.log(err);

    return errorObject(res, 500, JSON.parse(err.message));
  }
};

categoryController.delete = async function (req:Request, res:Response, next:any) {
	const id = req.params.id;
  
  
	try {
	  const response:RespType = await deleteQuestion(id);
	  const { rCode, rState, rData, rMessage } = response;
  
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  console.log(err);
  
	  return errorObject(res, 500, JSON.parse(err.message));
	}
  };

export default categoryController;
