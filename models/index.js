const User = require('./User');
const Post = require('./Post');

//create association
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Defines relationship between Post model and User model
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };