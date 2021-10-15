import bcrypt from 'bcrypt-nodejs';
import {  responseInfo } from '../../helpers/common';
import db from '../../database/models';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
  HTTP_SERVER_ERROR
} from '../../helpers/httpCodes';


const Category = db.category;



  
  /**
   * Creates a user in the database and returns the user's basic detials.
   *
   * @param {object} data
   * @returns User object
   */
  export const createCategory = async (data:any) => {
	const { title, description, } = data;
  
	try {
		const response = await Category.create({
			title: title?.trim(),
			description: description?.trim(),
		  });
		  const createdCategory = response.dataValues
	  
		  return responseInfo(
			HTTP_CREATED,
			'success',
			createdCategory,
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
  export const updateCategory = async (id:string, data:any) => {
	const { title, description } = data;
	console.log("Title: "+title, "Des: "+description)
	try {
	  const response = await Category.update(
		{
		  title,
		  description
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
		response,
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
  
  export const fetchCategory = async (categoryId:string) => {
	try {
	  const category:any = await Category.findOne({
		where: { id: categoryId }
	  });
	
			return responseInfo(HTTP_OK, 'success', category.dataValues, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const fetchCategories = async () => {
	try {
	  const categories:any = await Category.findAll();
	  console.log(categories)
return responseInfo(HTTP_OK, 'success', categories, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const deleteCategory = async (categoryId:string) => {
	try {
	  const category:any = await Category.destroy({
		where: { id: categoryId }
	  });
	
			return responseInfo(HTTP_OK, 'success', category.dataValues, 'Category deleted successfully');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };
