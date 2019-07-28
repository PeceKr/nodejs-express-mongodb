import Joi from "joi";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255
    },
    userName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    }
  });

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JTW_KEY);
    return token;
}

export const User = mongoose.model(
  "User",
   userSchema
);

export function validateUser(user) {
  const schema = {
    fullName: Joi.string()
      .min(5)
      .max(50)
      .required(),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    userName: Joi.string()
      .min(5)
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
}

export  function validateLogin(req) {
  const schema = {
    password: Joi.string()
      .min(5)
      .max(1024)
      .required(),
    userName: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(req, schema);
}
