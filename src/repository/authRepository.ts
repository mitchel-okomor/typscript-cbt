import BaseRepository from "./IBaseRepository";
import {Model} from 'sequelize'

export default class AuthRepository implements BaseRepository <Model> {
///	const { user } = this.model;

	constructor(protected model: Model ){
		this.model = model
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
}



