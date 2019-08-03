import { validateOrder, validateCancelOrder } from "../models/orders";
import ordersService from "../services/ordersService";

class OrdersController {
  async newOrder(req, res) {
    try {
      // Validate request
      const { error } = validateOrder(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      // Send the request to the service
      const order = await ordersService.createNewOrder(req.body);

      return res
        .status(201)
        .json({ message: "Successfully created order", order: order });
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
    }
  }
  async cancelOrder(req, res) {
    try {
      // Validate request
      const { error } = validateCancelOrder(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      // Send the request to service 
      await ordersService.cancelOrder(req.body.orderId)

      return res.status(200).json({"message" : "Order has been canceled"});
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
    }
  }
  async listOrders(req, res) {
      try {
          const orders = await ordersService.listOrders();
          console.log(orders);
          
          return res.status(200).json(orders);
      } catch (error) {
        res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
      }
  }
}

export default new OrdersController();
