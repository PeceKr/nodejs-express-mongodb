import shoesDbServices from "./dbServices/shoesDbServices";

class ShoesServices {
    async insert (req) {
        return shoesDbServices.insert(req);
    }
}

export default new ShoesServices();