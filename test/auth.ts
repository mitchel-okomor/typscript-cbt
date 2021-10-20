var expect  = require('chai').expect;
var request = require('request');
import {Response} from 'express';

let loginToken:string;
let id:string;


let base_url:string | any = process.env.BASE_URL


describe('Api endpoints for authentication', () => {  
    

before( (done:Function) => {  
  
	
	describe('/Signup', ()=>{

		it('Sign up a user', (done:Function) => {
	
			request.get({url:base_url+'/api/auth/signup', headers: {
				'authorization': loginToken
			  } }, function(error:Error, response:Response) {
				if (error) {
					return console.error('Error:', error);
				  }
				expect(response.statusCode).to.equal(200);
				done();
			});
	
	   });
		
	  });


	  describe('/Login', ()=>{
		let loginForm = {
			email : "peterpaul@gmail.com",
		  password :"peter"
		  }

		it('Login user', (done:Function) => {
	
			request.post({url: base_url+'/api/auth/login', loginForm }, function(error:Error, response:Response, body:any) {
				if (error) {
					return console.error('Login Error:', error);
				  }
				 loginToken =JSON.parse(body).data.token;
				 id = JSON.parse(body).data.userId;
				expect(response.statusCode).to.equal(200);
				done();
			});
	   });
		
	  });
  })


  describe('/getUser', ()=>{

    it('get user data', (done:Function) => {

        request.get({url:base_url+'/api/auth/user', headers: {
            'authorization': loginToken
          } }, function(error:Error, response:Response) {
            if (error) {
                return console.error('Error:', error);
              }
            expect(response.statusCode).to.equal(200);
            done();
        });

   });
    
  })

  });