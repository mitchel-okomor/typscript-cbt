type userType ={
	firstName:string,
	lastName: string,
	email: string,
	password: string
}



export default class UserRepoMock  {

	 async getAll(): Promise<userType[]> {
		
			return [
				{firstName: 'jonh',
				lastName:'doe',
			email:'john@doe',
		password:'password'}
			];
		}
	
	async save(t: userType): Promise<userType> {
		try {
			return {firstName:'john', lastName:'doe', email:'john@doe', password:"ninwdjpwejvodce"};
		} catch (error) {
			console.log(error)
		}
	
		return {firstName:'john', lastName:'doe', email:'john@doe', password:"ninwdjpwejvodce"};
	}
	
	async delete(t: string): Promise<Boolean> {
			
		try {
			return true;
		} catch (error) {
			console.log(error)
		}
	
		return true;
	}
	
	async getById(id: string): Promise<userType> {
			
		try {
			return {firstName:'john', lastName:'doe', email:'john@doe', password:"ninwdjpwejvodce"};
		} catch (error) {
			console.log(error)
		}
	
		return {firstName:'john', lastName:'doe', email:'john@doe', password:"ninwdjpwejvodce"};
	}
	

	}