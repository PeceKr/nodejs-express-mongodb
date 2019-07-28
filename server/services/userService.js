import userDbService from "../services/dbServices/userDbService";
import ApplicationError from "../common/AppException";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

class userService {
  async register(req) {
    let user = await userDbService.checkIfUserNameExists(req.userName);

    if (user) {
      throw new ApplicationError(
        `Username ${req.userName} already exists`,
        400
      );
    }
    user = await userDbService.checkIfEmailExists(req.email);

    if (user) {
      throw new ApplicationError(
        `User with email ${req.email} already exists!`,
        400
      );
    }

    user = userDbService.register(req);


    return user;
  }

  async login(req) {
    let user = await userDbService.checkIfUserNameExists(req.userName);

    if (!user) {
      throw new ApplicationError(`Invalid email or password`, 400);
    }

    const validPassword = await bcrypt.compare(
      req.password,
      user.password
    );
    if (!validPassword)
      throw new ApplicationError(`Invalid email or password`, 400);    
      
    const token = jwt.sign({_id : user._id} , process.env.JTW_KEY);
      
    return token;
  }
}

export default new userService();
