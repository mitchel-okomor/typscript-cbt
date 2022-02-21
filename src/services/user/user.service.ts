import {UserType} from "../../helpers/interfaces";
import UserRepository from "../../repository/userRepository";
import {Model} from 'sequelize'
import {  responseInfo } from '../../helpers/common';
import {
	HTTP_OK,
	HTTP_SERVER_ERROR
  } from '../../helpers/httpCodes';
class UserService {
constructor(private readonly repo:UserRepository){
	this.repo = repo;
}

fetchUser = async (userEmail: string):Promise<any> => {
	try {
	  const user = await this.repo.fetchUserByEmail(userEmail);
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

async getAllUsers(){
	return await this.repo.getAll();
}


async saveUser(user: Model){
return await this.repo.save(user);
}

}

export default UserService;