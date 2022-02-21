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


  it('should call the save method on the userRepository', async () => {
		const user = await userRepo.saveUser( {firstName:'john', lastName:'doe', email:'john@doe', password:"ninwdjpwejvodce"});
	
			expect(user).toEqual( {firstName:'john', lastName:'doe', email:'john@doe', password:'ninwdjpwejvodce', id:'1'})

	  })

  it('Should return an array when get all users function is called', async() => {
		  const users = await userRepo.getAllUsers();
		expect(users).toEqual([{firstName:'john', lastName:'doe', email:'john@doe', password:'ninwdjpwejvodce', id:'1'}]);
  })

  it('Should return a single user with and id', async() => {
	const user = await userRepo.fetchUser('john@doe');
  expect(user).toEqual({firstName:'john', lastName:'doe', email:'john@doe', password:'ninwdjpwejvodce', id:'1'});
})


})