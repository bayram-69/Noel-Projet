// Import access to database tables
const argon2 = require("argon2");
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation

const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    next(error);
  }
};

// The R of BREAD - Read operation

const read = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await tables.user.readByEmail(id);

    if (user == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    next(error);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  const { firstname, lastname, birthdate, hashedPassword, mail } = req.body;
  const id = parseInt(req.params.id, 10);

  try {
    const user = await tables.user.readByEmail(mail);

    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const verified = await argon2.verify(user.password, req.body.password);
    if (verified) {
      delete req.body.password;
      const userUpdated = await tables.user.update(
        firstname,
        lastname,
        mail,
        hashedPassword,
        birthdate.split("T")[0],
        id
      );
      if (userUpdated === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).json({ message: "User updated" });
      }
    } else {
      res.sendStatus(422);
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation

const add = async (req, res, next) => {
  try {
    delete req.body.password;
    const user = await tables.user.create(req.body);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "User created" });
    }
  } catch (error) {
    next(error);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await tables.user.delete(parseInt(id, 10));

    if (user === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ message: "User deleted" });
    }
  } catch (error) {
    next(error);
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
