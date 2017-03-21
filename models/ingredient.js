"use strict";

module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        ingredient_1: DataTypes.STRING(30),
        ingredient_2: DataTypes.STRING(30),
        ingredient_3: DataTypes.STRING(30),
        ingredient_4: DataTypes.STRING(30),
        ingredient_5: DataTypes.STRING(30),
        ingredient_6: DataTypes.STRING(30),
        ingredient_7: DataTypes.STRING(30),
        ingredient_8: DataTypes.STRING(30),
        ingredient_9: DataTypes.STRING(30),
        ingredient_10: DataTypes.STRING(30),
        description: DataTypes.STRING(25),
    });

    return Ingredient;
};
