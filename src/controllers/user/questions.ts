import {Request, Response} from 'express'

import { createQuestion, updateQuestion, fetchQuestions, fetchQuestion, deleteQuestion } from '../../services/admin/question';
import { errorObject, responseObject } from '../../helpers/common';
import {RespType, QuestionType} from '../../helpers/interfaces';
import db from '../../database/models';

const Question = db.question;

const QuestionController :any= {}



QuestionController.get = async function (req:Request, res:Response, next:any) {
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
  QuestionController.getAll = async function (req:Request, res:Response, next:any) {
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



export default QuestionController;
