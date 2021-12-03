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


  
  
  export const fetchUser = async (userEmail: string):Promise<RespType> => {
	try {
	  const user = await User.findOne({
		where: { email: userEmail }
	  });
	  const userData = user.dataValues;
  
	  const { id, firstname, lastname, email, gender, phone } = userData;

  
	  const selectedData = {
		user: {
		  id,
		  firstname,
		  lastname,
		  email,
		  gender,
		  phone
		},
	  };
  

	  return responseInfo(HTTP_OK, 'success', selectedData, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const fetchRandomUser = async (userEmail: string):Promise<RespType> => {
	try {
	  const users = await User.findOne(
	);
	const rand = Math.floor(Math.random() * users.length-1)
	  const randomUserData = users[rand];

	  const { id, firstname, lastname, email, gender, phone } = randomUserData;

  
	  const selectedData = {
		user: {
		  id,
		  firstname,
		  lastname,
		  email,
		  gender,
		  phone
		},
	  };
  

	  return responseInfo(HTTP_OK, 'success', selectedData, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };

  export const userByGender = async (userGender: string):Promise<RespType> => {
	try {
	  const user = await User.findOne({
		where: { gender: userGender }
	  });
			const userData = user.dataValues;
  
			const { id, firstname, lastname, email, gender, phone } = userData;
	
		
			const selectedData = {
			  user: {
				id,
				firstname,
				lastname,
				email,
				gender,
				phone
			  },
			};
		

			return responseInfo(HTTP_OK, 'success', selectedData, '');

	} catch (err:any) {
	  console.log(err);
	  // eslint-disable-next-line no-undef
	  return responseInfo(HTTP_SERVER_ERROR, 'error', null, err.message);
	}
  };