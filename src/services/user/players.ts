import bcrypt from 'bcrypt-nodejs';
import {  responseInfo } from '../../helpers/common';
import db from '../../database/models';
import {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK,
  HTTP_SERVER_ERROR
} from '../../helpers/httpCodes';
import {RespType} from '../../helpers/interfaces';


const User = db.user;


  
  export const fetchPlayer = async (category: string):Promise<RespType> => {
	try {
	  const users = await User.findAll({
		where: { categoryId: category }
	  });
			const players = users.dataValues;
  


			return responseInfo(HTTP_OK, 'success', players, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };