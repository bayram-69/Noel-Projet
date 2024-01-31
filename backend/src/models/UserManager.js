const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "users" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (firstname, lastname, mail, password, birthdate) VALUES (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.hashedPassword,
        user.birthdate,
      ]
    );
    return result.insertId;
  }
  // The D of CRUD - Delete operation

  // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readByEmail(mail) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where mail = ?`,
      [mail]
    );
    return rows[0];
  }

  // The U of CRUD - Update operation

  async update(id, user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET firstname=?, lastname=?, mail=?, password=?, birthdate=? WHERE id =?`,
      [
        user.firstname,
        user.lastname,
        user.mail,
        user.password,
        user.birthdate,
        id,
      ]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = UserManager;
