import {Request, Response} from 'express'

import { createQuestion, updateQuestion, fetchQuestions, fetchQuestion, deleteQuestion } from '../../services/admin/question';
import { errorObject, responseObject } from '../../helpers/common';


const categoryController :any= {}



categoryController.getQuestion = async function (req:Request, res:Response, next:any) {
	const { id }:any = req.params;
	try {
	  const response:any = await fetchQuestion(id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };
  categoryController.getAllQuestions = async function (req:Request, res:Response, next:any) {
	try {
	  const response:any = await fetchQuestions();
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

  const { name, description } = req.body;

  const reqData = { name, description };

  try {
    const resp:any = await createQuestion(reqData);
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
  const { name, description } = req.body;

  const reqData = { name, description };

  try {
    const response:any = await updateQuestion(id, reqData);
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
	  const response:any = await deleteQuestion(id);
	  const { rCode, rState, rData, rMessage } = response;
  
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  console.log(err);
  
	  return errorObject(res, 500, JSON.parse(err.message));
	}
  };

export default categoryController;
