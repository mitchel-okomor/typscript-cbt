import BaseRepository from "./IBaseRepository";
import db from '../database/models';
import {Model} from 'sequelize'
	const { User } = db;

export default class UserRepository implements BaseRepository <Model> {
private model;

	constructor(){
		this.model = User;
	}
	// private createQueryObject (): any {
	// 	return { 
	// 	  where: {},
	// 	  include: [
	// 		{ model: User, as: 'Owner', attributes: ['user_id', 'display_name'], where: {} },
	// 		{ model: Label, as: 'Label' },
	// 		{ model: Genre, as: 'Genres' },
	// 		{ model: Track, as: 'TrackList' },
	// 	  ]
	// 	}
	//   }

 async getAll(): Promise<Model[]> {
		try {
			return [];
		} catch (error) {
			console.log(error)
		}

		return [];
	}

async save(t: Model): Promise<Model> {
	
	try {
		return this.model;
	} catch (error) {
		console.log(error)
	}

	return this.model;
}

async delete(t: Model): Promise<Model> {
		
	try {
		return this.model;
	} catch (error) {
		console.log(error)
	}

	return this.model;
}

async getById(id: string): Promise<Model> {
		
	try {
		return this.model;
	} catch (error) {
		console.log(error)
	}

	return this.model;
}

async fetchUserByEmail(email: string): Promise<any>{
	try {
		return this.model.find({where:{email:email}});
	} catch (error) {
		console.log(error)
	}
}

async getOneByGender(gender:string): Promise<Model>{
	try {
		return this.model.findAll({where:{gener:gender}});
	} catch (error) {
		console.log(error)
	}

	return this.model;
}


async creatUser():Promise<string>{
	return "me";
}
}



