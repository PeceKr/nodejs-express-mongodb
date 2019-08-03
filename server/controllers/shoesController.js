import shoesService from "../services/shoesService";
import {validateShoe} from "../models/shoes";

class ShoesController {
  async insert(req, res) {
    try {
      // Validate request
      const { error } = validateShoe(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      // Insert the new items into the database
      const result = await shoesService.insert(req.body);

      // Return the newly created record
      return res
        .status(201)
        .json({ message: "Successfully inserted", shoe: result });
    } catch (error) {
      res
        .status(error.status || 500)
        .send(error.message || "Something went wrong");
    }
  }
}

export default new ShoesController();
