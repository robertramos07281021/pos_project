import Joi from "joi";

const UserSchemaValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});

const ProductSchemaValidation = Joi.object({
  barcode: Joi.string().required(),
  product_name: Joi.string().required(),
  price: Joi.number().precision(2),
  description: Joi.any(),
  qty: Joi.any(),
});
const StockSchemaValidation = Joi.object({
  barcode: Joi.any(),
  product_name: Joi.any(),
  price: Joi.any(),
  description: Joi.any(),
  qty: Joi.number().required(),
});

export { UserSchemaValidation, StockSchemaValidation, ProductSchemaValidation };
