const AbstractManager = require("./AbstractManager");

class ManufacturerManager extends AbstractManager {
  constructor() {
    super({ table: "manufacturer" });
  }

  // CRUD
  async create(manufacturer) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, production_country) VALUES(?, ?)`,
      [manufacturer.name, manufacturer.production_country]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(manufacturer, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, production_country = ? WHERE id = ?`,
      [manufacturer.name, manufacturer.production_country, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = ManufacturerManager;
