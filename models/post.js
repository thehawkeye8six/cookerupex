"use strict";

module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
            post_title: DataTypes.STRING(25),
            post_description: DataTypes.STRING(50),
            post_category: DataTypes.STRING(25)
        },
        {
            classMethods: {
                associate: function (models) {
                    Post.hasMany(models.Ingredient, {
                            foreignKey: 'recipe_id',
                            constraints: false
                        }
                    );

                }
            }
        });
    return Post;
};
