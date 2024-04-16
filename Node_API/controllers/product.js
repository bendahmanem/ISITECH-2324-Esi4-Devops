import product from "../models/product.js";

export const getProducts = (req, res) => {
  product
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

export const createProduct = (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = new product({
    name,
    price,
    description,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

export const getProductById = (req, res) => {
  const id = req.params.id;
  product
    .findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

export const updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price, description } = req.body;
  product
    .findByIdAndUpdate(id, { name, price, description }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
