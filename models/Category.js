// Import required modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define Category model by extending Sequelize's Model class
class Category extends Model {}

// Initialize the Category model with table columns and configuration options
Category.init(
  {
    // Define id column with INTEGER data type, primary key, and auto-increment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define category_name column with STRING data type and not null constraint
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    // Set the sequelize connection instance
    sequelize,
    // Disable timestamps
    timestamps: false,
    // Set table name to singular form
    freezeTableName: true,
    // Use snake_case for column names
    underscored: true,
    // Set the model name to 'category'
    modelName: 'category',
  }
);

// Export the Category model
module.exports = Category;
