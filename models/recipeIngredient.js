"use strict";

module.exports = function (sequelize, DataTypes) {
    var recipeIngredient = sequelize.define("recipeIngredient", {
        ingredient_id: DataTypes.INTEGER,
        qty: DataTypes.DECIMAL(10,2),
        unit_id: DataTypes.INTEGER
    },{
        paranoid:true,
        classMethods:{
            associate: function (models) {
                recipeIngredient.belongsTo(models.Post);
                recipeIngredient.belongsTo(models.Ingredient);
                recipeIngredient.belongsTo(models.Unit);
            }
        }
    });

    return recipeIngredient;
};
