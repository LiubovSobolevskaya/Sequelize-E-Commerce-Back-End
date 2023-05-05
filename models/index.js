// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id', // foreign key to the category table
  onDelete: 'CASCADE', // if a category is deleted, also delete associated products
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // foreign key from the product table
  onDelete: 'CASCADE', // if a category is deleted, also delete associated products
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag, // join table between product and tag
    unique: false, // allow duplicates
    foreignKey: 'product_id', // foreign key to the product table
  },
  as: 'tags' // alias for the tags
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model:  ProductTag, // join table between tag and product
    unique: false, // allow duplicates
    foreignKey: 'tag_id', // foreign key to the tag table
  },
  as: 'products' // alias for the products
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
