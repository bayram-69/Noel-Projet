// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const products = await tables.product.readAll();
    if (products == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(products);
    }
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    const products = await tables.product.read(parseInt(req.params.id, 10));

    if (products == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(products);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  try {
    const products = req.body;
    const updatedProducts = await tables.product.update(
      products,
      parseInt(req.params.id, 10)
    );

    if (updatedProducts == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "products updated successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  try {
    const newProducts = req.body;
    const products = await tables.product.create(newProducts);

    if (products == null) {
      res.sendStatus(404);
    } else {
      res.status(201).json({ message: "products created successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    const products = await tables.product.delete(parseInt(req.params.id, 10));

    if (products == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "products deleted successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
