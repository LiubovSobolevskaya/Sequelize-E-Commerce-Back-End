// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection from config.js
const sequelize = require('../config/connection');

// Define the ProductTag model by extending off Sequelize's Model class
class ProductTag extends Model {}

// Set up the fields and rules for the ProductTag model
ProductTag.init(
  {
    // Define the id field with type INTEGER, allowNull false, primaryKey true, and autoIncrement true
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Define the product_id field with type INTEGER, and a foreign key reference to the Product model's id field
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    // Define the tag_id field with type INTEGER, and a foreign key reference to the Tag model's id field
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    // Define the sequelize instance to use for the model
    sequelize,
    // Disable timestamps
    timestamps: false,
    // Use "product_tag" as the table name in the database
    freezeTableName: true,
    // Use underscores instead of camelCase for column names
    underscored: true,
    // Define the name of the model in the database
    modelName: 'product_tag',
  }
);

// Export the ProductTag model for use in other parts of the application
module.exports = ProductTag;
