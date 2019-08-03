import { validateOrder, validateCancelOrder } from "../models/orders";
import ordersService from "../services/ordersService";

class OrdersController {
  async newOrder(req, res) {
    // Validate request
    const { error } = validateOrder(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Send the request to the service
    const order = await ordersService.createNewOrder(req.body);

    return res
      .status(201)
      .json({ message: "Successfully created order", order: order });
  }
  async cancelOrder(req, res) {
    // Validate request
    const { error } = validateCancelOrder(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Send the request to service
    await ordersService.cancelOrder(req.body.orderId);

    return res.status(200).json({ message: "Order has been canceled" });
  }
  async listOrders(req, res) {
    const orders = await ordersService.listOrders();

    return res.status(200).json(orders);
  }
}

export default new OrdersController();
