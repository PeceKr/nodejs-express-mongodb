import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const shoeSchema = new mongoose.Schema({
  itemsInStock: {
    type: Number
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand"
  },
  price: {
    type: Schema.Types.Decimal128
  }
});

export const Shoe = mongoose.model("Shoe", shoeSchema);

export function validateShoe(req) {
  const schema = {
    itemsInStock: Joi.number().required(),
    brand: Joi.string().required(),
    price : Joi.required()
  };
  return Joi.validate(req, schema);
}
