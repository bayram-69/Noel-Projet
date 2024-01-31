// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const manufacturers = await tables.manufacturer.readAll();
    if (manufacturers == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(manufacturers);
    }
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    const manufacturers = await tables.manufacturer.read(
      parseInt(req.params.id, 10)
    );

    if (manufacturers == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(manufacturers);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  try {
    const manufacturers = req.body;
    const updatedManufacturers = await tables.manufacturer.update(
      manufacturers,
      parseInt(req.params.id, 10)
    );

    if (updatedManufacturers == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "manufacturers updated successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  try {
    const newManufacturers = req.body;
    const manufacturers = await tables.manufacturer.create(newManufacturers);

    if (manufacturers == null) {
      res.sendStatus(404);
    } else {
      res.status(201).json({ message: "manufacturers created successfully" });
    }
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    const manufacturers = await tables.manufacturer.delete(
      parseInt(req.params.id, 10)
    );

    if (manufacturers == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "manufacturers deleted successfully" });
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
