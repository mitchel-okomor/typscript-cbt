// @ts-nocheck

import { gameRepository } from './gameRepository'
import {jest} from '@jest/globals'; 

const gameModel = jest.fn()

describe('User service', () => {
  let gameRepo = new gameRepository(gameModel)

  it('Should have access to the user repository', () => {
    expect(gameRepo).toBeDefined()
  })

//   it('Should have a method called createUser', () => {
//     expect(gameRepo.createUser).toBeDefined()
//   })

//   it('should call the createUser method on the userRepository when the createUser method on the service gets invoked', async (done) => {
//     const spy = jest.spyOn(userService.userRepo, 'createUser')
//     await userService.createUser({ username: 'John Doe' })

//     expect(spy).toHaveBeenCalled()
//     done()
//   })

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

  afterEach(() => {
    Database.clear()
  })
})