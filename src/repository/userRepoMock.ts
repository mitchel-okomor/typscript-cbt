type userType ={
	id?:string,
	firstName:string,
	lastName: string,
	email: string,
	password: string
}



export default class UserRepoMock  {
	protected users:userType[] = [];

	 async getAll(): Promise<userType[] | void> {
			return this.users;
		}
	
	async save(userData: userType): Promise<userType | void> {
		try {
			userData.id="1";
			this.users.push(userData)
			return this.users.find(user => user.id === userData.id);
		} catch (error) {
			console.log(error)
		}
		}
	
	async delete(t: string): Promise<Boolean> {
			
		try {
			return true;
		} catch (error) {
			console.log(error)
		}
	
		return true;
	}
	
	async fetchUserByEmail(email: string): Promise<userType|void> {
			return this.users.find(user => user.email === email);

	}

}