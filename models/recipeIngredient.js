"use strict";

module.exports = function (sequelize, DataTypes) {
    var RecipeIngredient = sequelize.define("RecipeIngredient", {
        directions: DataTypes.STRING(200)
    },{
        paranoid:true,
        classMethods:{
            associate: function (models) {
                RecipeIngredient.belongsTo(models.Post);
                RecipeIngredient.belongsTo(models.Ingredient);
            }
        }
    });
    return RecipeIngredient;
};
