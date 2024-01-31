// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const categories = await tables.category.readAll();
    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(categories);
    }
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    const categories = await tables.category.read(parseInt(req.params.id, 10));

    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(categories);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  try {
    const categories = req.body;
    const updatedCategories = await tables.category.update(
      categories,
      parseInt(req.params.id, 10)
    );

    if (updatedCategories == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "category updated successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  try {
    const categories = req.body;
    const newCategories = await tables.category.create(categories);

    if (newCategories == null) {
      res.sendStatus(404);
    } else {
      res.status(201).json({ message: "category created successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    const categories = await tables.category.delete(
      parseInt(req.params.id, 10)
    );

    if (categories == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "categories deleted successfully" });
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
