const User = require('./user.model');
const Product = require('./product.model');
const Cart = require('./car.model');
const Order = require('./order.model')
const ProductInCart = require('./productInCart.model')
const ProductInOrder = require('./productInOrder.model')

User.hasMany(Product);
Product.belongsTo(User);
User.hasOne(Cart);
Cart.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);

Cart.belongsToMany(Product, { through: ProductInCart })
Order.belongsToMany(Product, { through: ProductInOrder })
