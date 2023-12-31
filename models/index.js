// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//belongstoassociation
Product.belongsTo(Category);
// Categories have many Products
//hasmany association
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
//belongstomany association
Product.belongsToMany(Tag,{
  through:{
    model: ProductTag,
    foreignKey: 'product_id'
  }
})

// Tags belongToMany Products (through ProductTag)
//belongstomany assocation
Tag.belongsToMany(Product,{
  through:{
    model: ProductTag,
    foreignKey: 'tag_id'
  }
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
