"use strict";

module.exports = function (sequelize, DataTypes) {
    var Ingredient = sequelize.define("Ingredient", {
        description: DataTypes.STRING(25),
    });

    return Ingredient;
};
