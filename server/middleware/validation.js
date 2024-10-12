import {
  UserSchemaValidation,
  StockSchemaValidation,
  ProductSchemaValidation,
} from "../middleware/joi.js";

const validateCreateUser = (req, res, next) => {
  const { error } = UserSchemaValidation.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res.status(400).json(msg);
  } else {
    next();
  }
};

const validationProduct = (req, res, next) => {
  const { error } = ProductSchemaValidation.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res.status(400).json(msg);
  } else {
    next();
  }
};

const validationStock = (req, res, next) => {
  const { error } = StockSchemaValidation.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res.status(400).json(msg);
  } else {
    next();
  }
};

export { validateCreateUser, validationProduct, validationStock };
