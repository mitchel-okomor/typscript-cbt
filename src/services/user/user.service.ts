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

async fetchUser(userEmail: string):Promise<UserType|void>  {
	try {
		const user = await this.repo.fetchUserByEmail(userEmail);
		  
		  return user;
	} catch (error) {
		console.log(error)
	}
	}
  

async getAllUsers(){
	return await this.repo.getAll();
}


async saveUser(user: Model){
return await this.repo.save(user);
}

}

export default UserService;