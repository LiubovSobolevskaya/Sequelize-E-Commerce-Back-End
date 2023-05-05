// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,    
    unique: false,
    foreignKey: 'product_id',
  },
  as: 'tags'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model:  ProductTag,
    //field referenced in the association must have a unique constraint placed on it. 
    unique: false,
    foreignKey: 'tag_id',
  },
  // Define an alias for when data is retrieved
  //call this whatever you link - related to how the data will be returned (which key)
  as: 'products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag
};
