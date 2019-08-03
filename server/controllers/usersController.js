import { validateUser, validateLogin, User } from "../models/user";
import userService from "../services/userService";
import _ from "lodash";

class UserController {
  async registerUser(req, res) {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await userService.register(req.body);

    if (user) {
      const token = user.generateAuthToken();
      res
        .header("x-auth-token", token)
        .send(_.pick(user, ["_id", "email", "userName"]));
    }
  }

  async login(req, res) {
    const { error } = validateLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let result = await userService.login(req.body);

    res.status(200).json(result);
  }
}

export default new UserController();
