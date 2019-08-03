import Joi from "joi";
import mongoose from "mongoose";
import constants from "../common/constants";

const brandsSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255,
    unique: true
  }
});

export const Brand = mongoose.model("Brand", brandsSchema);

export function validateBrand(req, action) {
  let schema = {};
  switch (action) {
    case constants.brandActions.Add:
      schema = {
        brandName: Joi.string()
          .required()
          .min(2)
          .max(255)
      };
      return Joi.validate(req, schema);
    case constants.brandActions.Update:
      schema = {
        brandName: Joi.string()
          .required()
          .min(2)
          .max(255),
        id: Joi.string()
          .required()
          .min(24)
          .max(24)
      };
      return Joi.validate(req, schema);
    case constants.brandActions.Delete:
      schema = {
        id: Joi.string()
          .required()
          .min(24)
          .max(24)
      };
      return Joi.validate(req, schema);
    default:
      schema = {
        brandName: Joi.string()
          .required()
          .min(2)
          .max(255)
      };
      return Joi.validate(req, schema);
  }
}
