"use strict";

module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
            title: DataTypes.STRING(25),
            description: DataTypes.STRING(50),
            category: DataTypes.STRING(25),
            featured: DataTypes.INTEGER(10),
            sponsored: DataTypes.INTEGER(10),
            image_path: DataTypes.STRING(35)
        });
    return Post;
};
