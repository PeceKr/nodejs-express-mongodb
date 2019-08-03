import { Shoe } from '../../models/shoes';
class ShoesDbService {
    insert (req) {
        return new Promise((resolve,reject)=> {
            const shoe = new Shoe({
                itemsInStock : req.itemsInStock,
                brand : req.brand,
                price : req.price
            });

            shoe.save().then(r=>resolve(r)).catch(err=>reject(err));
        });
    }
}

export default new ShoesDbService();