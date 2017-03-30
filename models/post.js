"use strict";

module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
            title: DataTypes.STRING(30),
            description: DataTypes.STRING(50),
            directions: DataTypes.STRING(500),
            category: DataTypes.STRING(25),
            featured: DataTypes.INTEGER(1),
            sponsored: DataTypes.INTEGER(1),
            image_path: DataTypes.STRING(50)
        },
        {
            classMethods: {
                associate: function (models) {
                    Post.hasMany(models.Ingredient,
                        {
                            foreignKey: 'PostId',
                            constraints: false
                        })
                }
            }
        });
    return Post;
};
