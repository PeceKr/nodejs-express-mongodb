import { User } from "../../models/user";
import bcrypt from "bcrypt";
class userDbService {
  checkIfEmailExists(email) {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email })
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  checkIfUserNameExists(userName) {
    return new Promise((resolve, reject) => {
      User.findOne({ userName: userName })
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
  async register(user) {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashedPassword = await bcrypt.hash(user.password, salt);
    return new Promise((resolve, reject) => {
      const userObj = new User({
        fullName: user.fullName,
        email: user.email,
        password: hashedPassword,
        userName: user.userName
      });
      userObj
        .save()
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
}

export default new userDbService();
