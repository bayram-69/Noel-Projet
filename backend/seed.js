/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("DELETE FROM category");
    await database.query("ALTER TABLE category AUTO_INCREMENT=1");
    await database.query("DELETE FROM manufacturer");
    await database.query("ALTER TABLE manufacturer AUTO_INCREMENT=1");
    await database.query("TRUNCATE product");

    // Insert fake data into the 'category' table
    for (let i = 0; i < 6; i += 1) {
      queries.push(
        database.query("INSERT INTO category(name) VALUES (?)", [
          faker.commerce.department(),
        ])
      );
    }

    // Insert fake data into the 'manufacturer' table
    for (let i = 0; i < 8; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO manufacturer(name, production_country) VALUES (?, ?)",
          [faker.company.name(), faker.location.country()]
        )
      );
    }

    // Insert fake data into the 'item' table
    for (let i = 0; i < 30; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO product(name, quantity, price, is wish, category_id, manufacturer_id) VALUES (?, ?, ?, ?, ?, ?)",
          [
            faker.commerce.product(),
            faker.number.int({ min: 2, max: 50 }),
            faker.commerce.price({ max: 50 }),
            0,
            faker.number.int({ min: 1, max: 6 }),
            faker.number.int({ min: 1, max: 8 }),
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
