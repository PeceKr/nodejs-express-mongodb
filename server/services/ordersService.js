import userDbService from "./dbServices/userDbService";
import ApplicationError from "../common/AppException";
import ordersDbService from "./dbServices/ordersDbService";
import shoesDbServices from "./dbServices/shoesDbServices";

class OrdersService {
  async createNewOrder(req) {
    // Check if user with the provided id exists
    const user = await userDbService.findUserById(req.userId);
    if (!user) {
      throw new ApplicationError("User with this id doesn't exists", 400);
    }
    // Check if the shoe with the provided id exists
    const shoe = await shoesDbServices.findShoeById(req.shoeId);
    if (!shoe) {
      throw new ApplicationError("Shoe with this id doesn't exists", 400);
    }

    // If item is out of stock cancel the process
    if (shoe.itemsInStock == 0) {
      throw new ApplicationError("Item out of stock!", 200);
    }

    // Create the order
    const order = await ordersDbService.createOrder(req);

    // Decrease stock items
    await shoesDbServices.updateShoeItemsNumber(
      req.shoeId,
      shoe.itemsInStock,
      false
    );

    return order;
  }

  async cancelOrder(orderId) {
    // Check if we have order with the provided id
    const order = await ordersDbService.findOrderById(orderId);

    if (!order) {
      throw new ApplicationError(
        "Order with the provided id doesn't exists",
        400
      );
    }

    // Get shoe object
    const shoe = await shoesDbServices.findShoeById(order.shoe);

    console.log(shoe);

    // Delete the order from the database
    await ordersDbService.cancelOrder(orderId);

    // Increase items in stock
    await shoesDbServices.updateShoeItemsNumber(shoe._id, shoe.itemsInStock);
  }

  async listOrders() {
    return ordersDbService.listOrders();
  }
}

export default new OrdersService();
