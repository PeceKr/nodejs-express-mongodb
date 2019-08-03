import Joi from "joi";
import mongoose from "mongoose";
import ObjectId from "joi-objectid";
Joi.ObjectId = ObjectId(Joi);

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  shoe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shoe"
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

export const Order = mongoose.model("Order", orderSchema);

export function validateOrder(req) {
  const schema = {
    userId: Joi.ObjectId().required(),
    shoeId: Joi.ObjectId().required()
  };
  return Joi.validate(req, schema);
}

export function validateCancelOrder(req) {
  const schema = {
    orderId: Joi.ObjectId().required()
  };
  return Joi.validate(req, schema);
}
