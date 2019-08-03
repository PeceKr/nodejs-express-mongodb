import { Shoe } from "../../models/shoes";
class ShoesDbService {
  insert(req) {
    return new Promise((resolve, reject) => {
      const shoe = new Shoe({
        itemsInStock: req.itemsInStock,
        brand: req.brand,
        price: req.price
      });

      shoe
        .save()
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  updateShoeItemsNumber(shoeId,noOfCurrentItems, increase = true) {
    return new Promise((resolve, reject) => {
      Shoe.findByIdAndUpdate(
        shoeId,
        {
          $set: { itemsInStock: increase ? noOfCurrentItems + 1 : noOfCurrentItems - 1 }
        },
        { upsert: true }
      )
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
  findShoeById(shoeId) {
    return new Promise((resolve, reject) => {
      Shoe.findById(shoeId)
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
}

export default new ShoesDbService();
