import {Request, Response} from 'express'

import { createCategory, updateCategory, fetchCategory, fetchCategories, deleteCategory } from '../../services/admin/category';
import { errorObject, responseObject } from '../../helpers/common';


const categoryController :any= {}



categoryController.getCategory = async function (req:Request, res:Response, next:any) {
	const { id }:any = req.params;
	try {
	  const response:any = await fetchCategory(id);
	  const { rCode, rState, rData, rMessage } = response;
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };
  categoryController.getAllCategories = async function (req:Request, res:Response, next:any) {
	try {
	  const response:any = await fetchCategories();
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
    const resp:any = await createCategory(reqData);
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
    const response:any = await updateCategory(id, reqData);
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
	  const response:any = await deleteCategory(id);
	  const { rCode, rState, rData, rMessage } = response;
  
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  console.log(err);
  
	  return errorObject(res, 500, JSON.parse(err.message));
	}
  };

export default categoryController;
