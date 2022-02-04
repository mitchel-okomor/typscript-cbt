// @ts-nocheck
import  UserRepository  from './userRepository'
import {jest} from '@jest/globals'; 
import SequelizeMock from 'sequelize-mock';
const dbMock = new SequelizeMock();

const mock = jest.fn();
const UserMock = dbMock.define('user', {
    firstname: "jane",
    lastname: "jane",
    email: "jnidvncdv@gmail.com",
	password: "ndivjdoiv",});


describe('User Repository', () => {
  let userRepo = new UserRepository({mock});
console.log(userRepo)
 it('Should have access to the user repository', () => {
    expect(userRepo).toBeDefined()
  })

  it('should call the save method on the userRepository', async (done) => {
    const spy = jest.spyOn(userRepo.save, 'save')
    expect(spy).toHaveBeenCalled()
    done()
  })

//   it('Should return a created user', async (done) => {
//     const createdUser = await userService.createUser({ username: 'John Doe' })
//     const createdUser2 = await userService.createUser({ username: 'Doe John' })

//     expect(createdUser).toEqual({
//       id: 1,
//       username: 'John Doe',
//     })

//     expect(createdUser2).toEqual({
//       id: 2,
//       username: 'Doe John',
//     })

//     done()
//   })

//   afterEach(() => {
//     Database.clear()
//   })
})