// @ts-nocheck
import  UserRepository  from '../../repository/userRepoMock';
import {jest} from '@jest/globals'; 

const mock = jest.fn();


describe('User Service', () => {
  let userRepo = new UserRepository(new UserRepository());
console.log( userRepo.getAll())
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