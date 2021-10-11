import jwt from "jsonwebtoken";
import db from "../../database/models";
import {Request, Response} from 'express'
const Users = db.Users

export default  async (req:Request, res:Response, next:Function) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ err: "Invalid Authentication" });
try {
	const decoded:any = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);

	if (!decoded) return res.status(401).json({ err: "Invalid Authentication" });
  
	const user = await Users.findOne({
	  where: { id: decoded.id }
	});
	req.user = user.dataValues;
	return next();
} catch (error) {
	console.error("jwt: "+error)
	res.status(401).json({ err: "Invalid or Expired token" });
}
 
};
