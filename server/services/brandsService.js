import brandsDb from "./dbServices/brandsDbService";
import ApplicationError from "./../common/AppException";
import brandsDbService from "./dbServices/brandsDbService";
class brandsService {
  async add(req) {
    // Check if user name already exists
    let brandNameExists = await brandsDb.checkIfBrandNameExists(req.brandName);

    // Throw error if already exists
    if (brandNameExists) {
      throw new ApplicationError(
        `Brand name ${req.brandName} already exists`,
        400
      );
    }

    // Add the brand into the database
    const brand = brandsDb.add(req);

    // Return the new brand
    return brand;
  }
  async delete(brandId) {
    const brand = await brandsDbService.findBrandById(brandId);

    if(!brand) {
      throw new ApplicationError("Brand with this id doesn't exists", 400);
    }

    return brandsDbService.delete(brandId);
  }

  async update(req) {
    // Check if we already have this brand
    let brand = await brandsDb.findBrandById(req.id);
    if (!brand) {
      throw new ApplicationError(
        `Brand with id ${req.id} doesn't exists!`,
        400
      );
    }

    // Insert the brand into mongoDB
    brand = await brandsDb.update(req);

    return brand;
  }
}

export default new brandsService();
