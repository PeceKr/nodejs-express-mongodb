import brandsService from "../services/brandsService";
import { validateBrand } from "../models/brands";
import constants from "../common/constants";

class BrandsController {
  async add(req, res) {
    try {
      // Validate request
      const { error } = validateBrand(req.body,constants.brandActions.Add);
      if (error) return res.status(400).send(error.details[0].message);
      // If the request is good send it to the service
      const brand = await brandsService.add(req.body);

      // Return the message and the object
      return res.status(201).json({ message: "success", brand: { brand } });
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
    }
  }
  async update(req, res) {
    try {
      // Validate request
      const { error } = validateBrand(req.body, constants.brandActions.Update);
      if (error) return res.status(400).send(error.details[0].message);

      // If the request is good send it to the service
      const updatedBrand = await brandsService.update(req.body);

      // Return the result
      return res
        .status(200)
        .json({ message: "success", updatedBrand: updatedBrand });
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
    }
  }
  async delete(req, res) {
    try {
        // Validate request
        const { error } = validateBrand(req.body, constants.brandActions.Delete);
        if (error) return res.status(400).send(error.details[0].message);

        await brandsService.delete(req.body.id);

        res.status(200).json({"message " : "Brand has been deleted"});
  
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
    }
  }
}

export default new BrandsController();
