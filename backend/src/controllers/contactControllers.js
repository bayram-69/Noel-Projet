const tables = require("../tables");

const add = async (req, res, next) => {
  try {
    const newMessage = req.body;
    const message = await tables.contact.create(newMessage);

    if (message == null) {
      res.sendStatus(404);
    } else {
      res
        .status(201)
        .json({ message: "Your message has been sent successfully!" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { add };
