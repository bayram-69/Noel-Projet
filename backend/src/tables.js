/* ************************************************************************* */
// Register Data Managers for Tables
/* ************************************************************************* */

// Import the manager modules responsible for handling data operations on the tables
const ItemManager = require("./models/ItemManager");
const CategoryManager = require("./models/CategoryManager");
const ManufacturerManager = require("./models/ManufacturersManager");
const ProductManager = require("./models/ProductManager");
const UserManager = require("./models/UserManager");
const ContactManager = require("./models/ContactManager");
const RoleManager = require("./models/RoleManager");

const managers = [
  ItemManager,
  CategoryManager,
  ManufacturerManager,
  ProductManager,
  UserManager,
  ContactManager,
  RoleManager,
  // Add other managers here
];

// Create an empty object to hold data managers for different tables
const tables = {};

// Register each manager as data access point for its table
managers.forEach((ManagerClass) => {
  const manager = new ManagerClass();

  tables[manager.table] = manager;
});

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
