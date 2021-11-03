import {Request, Response} from 'express'

import {  fetchCategory, fetchCategories, deleteCategory } from '../../services/admin/category';
import { errorObject, responseObject } from '../../helpers/common';


const categoryController :any= {}



categoryController.get = async function (req:Request, res:Response, next:any) {
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
  categoryController.getAll = async function (req:Request, res:Response, next:any) {
	try {
	  const response:any = await fetchCategories();
	  const { rCode, rState, rData, rMessage } = response;
	  console.log(response)
	  return responseObject(res, rCode, rState, rData, rMessage);
	} catch (err:any) {
	  if (err) {
		  console.log(err)
		return errorObject(res, 500, JSON.parse(err.message));
	  }
	}
  };

export default categoryController;
