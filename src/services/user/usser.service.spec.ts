// @ts-nocheck
import  UserRepository  from '../../repository/userRepoMock';
import UserService from './User.service.ts';
import {jest} from '@jest/globals'; 

const mock = jest.fn();


describe('User Service', () => {
  let userRepo = new UserService(new UserRepository());


 it('Should have access to the user repository', () => {
    expect(userRepo).toBeDefined()
  })

  it('Should return an array when get all users function is called', async() => {
	  try {
		  const users = await userRepo.getAllUsers();
		expect(typeof users).toBe("object")
	  } catch (error) {
		  console.log(error)
	  }
  })

  it('should call the save method on the userRepository', async () => {
try {
	const user = await userRepo.saveUser( {firstName:'john', lastName:'doe', email:'john@doe', password:"ninwdjpwejvodce"});
		expect(spy).toHaveBeenCalled();

	    expect(user).toEqual( {firstName:'john', lastName:'doe', email:'john@doe', password:'ninwdjpwejvodce'})
} catch (error) {
	console.log(error)	
}
  })


})