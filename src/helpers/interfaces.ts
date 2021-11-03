type Options ={
	title: string,
	isCorrect: boolean
}
interface RespType{
	rCode:number, 
	rState:string, 
	rData: object|Array<any>, 
	rMessage:string
}

interface UserType{
	firstname:string,
	lastname:string,
	email:string,
	password:string
	}

interface LoginUserType{
	email:string,
	password:string
}

	interface UserUpdateType{
		firstname:string,
		lastname:string,
		email:string,
		}
	interface QuestionType{
		title:string,
		categoryId: String | number,
		options:Array<Options>
	}

export {RespType, UserType, UserUpdateType, QuestionType, LoginUserType}