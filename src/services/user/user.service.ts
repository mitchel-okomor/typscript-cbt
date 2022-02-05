import {UserType} from "../../helpers/interfaces";
import UserRepository from "../../repository/userRepository";
import {Model} from 'sequelize'

class UserService {
constructor(private repo:UserRepository){
	this.repo = repo;
}

async getAllUsers(){
	return this.repo.getAll();
}


async saveUser(user: Model){
this.repo.save(user);
}

}

export default UserService;