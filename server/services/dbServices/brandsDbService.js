import { Brand } from "../../models/brands";
class brandsDbService {
  add(req) {
    return new Promise((resolve, reject) => {
      const brand = new Brand({
        brandName: req.brandName
      });
      brand
        .save()
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
  delete(brandId) {
    return new Promise((resolve, reject) => {
      Brand.findByIdAndDelete(brandId)
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
  update(req) {
    return new Promise((resolve, reject) => {
      Brand.findByIdAndUpdate(req.id, req, { upsert: true })
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  checkIfBrandNameExists(name) {
    return new Promise((resolve, reject) => {
      Brand.findOne({ brandName: name })
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }

  findBrandById(brandId) {
    return new Promise((resolve, reject) => {
      Brand.findById(brandId)
        .then(r => resolve(r))
        .catch(err => reject(err));
    });
  }
}

export default new brandsDbService();
