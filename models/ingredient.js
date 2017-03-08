"use strict";

module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        ingredient: DataTypes.STRING(25),
        qty: DataTypes.INTEGER(10),
        unit: DataTypes.STRING(25)
    });

    return Ingredient;
};
