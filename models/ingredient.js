"use strict";

module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        recipe_id: DataTypes.INTEGER(10),
        ingredient: DataTypes.STRING(30),
        amount: DataTypes.STRING(30),
        unit: DataTypes.STRING(30)
    });
    return Ingredient;
};
