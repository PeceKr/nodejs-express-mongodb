import { Order } from "../../models/orders";
class OrdersDbService {
  createOrder(req) {
    return new Promise((resolve, reject) => {
      const order = new Order({
        user: req.userId,
        shoe: req.shoeId,
        date: req.Date
      });
      order
        .save()
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  cancelOrder(orderId) {
    return new Promise((resolve, reject) => {
      Order.findByIdAndDelete(orderId)
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  listOrders() {
    return new Promise((resolve, reject) => {
      Order.find()
        .populate("user", "fullName")
        .populate({
          path: "shoe",
          populate: {
            path: "brand",
            model: "Brand"
          }
        })
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  findOrderById(orderId) {
    return new Promise((resolve, reject) => {
      Order.findById(orderId)
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
}

export default new OrdersDbService();
