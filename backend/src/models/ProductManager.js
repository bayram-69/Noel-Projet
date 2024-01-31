const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  constructor() {
    super({ table: "product" });
  }

  // CRUD
  async create(product) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, quantity, price, category_id, manufacturer_id) VALUES(?, ?, ?, ?, ?)`,
      [
        product.name,
        product.quantity,
        product.price,
        product.category_id,
        product.manufacturer_id,
      ]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`
      SELECT p.*, c.name as category_name
      FROM ${this.table} p
      JOIN category c ON p.category_id = c.id
      ORDER BY p.id DESC
    `);

    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `
      SELECT p.*, c.name as category_name
      FROM ${this.table} p
      JOIN category c ON p.category_id = c.id
      WHERE p.id = ?
    `,
      [id]
    );

    return rows[0];
  }

  async update(product, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name =?, quantity =?, price = ?, category_id = ?, manufacturer_id = ? WHERE id = ?`,
      [
        product.name,
        product.quantity,
        product.price,
        product.category_id,
        product.manufacturer_id,
        id,
      ]
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

module.exports = ProductManager;
