"use strict";

module.exports = function (sequelize, DataTypes) {
    var Amount = sequelize.define("Amount", {
        amount_1: DataTypes.STRING(30),
        amount_2: DataTypes.STRING(30),
        amount_3: DataTypes.STRING(30),
        amount_4: DataTypes.STRING(30),
        amount_5: DataTypes.STRING(30),
        amount_6: DataTypes.STRING(30),
        amount_7: DataTypes.STRING(30),
        amount_8: DataTypes.STRING(30),
        amount_9: DataTypes.STRING(30),
        amount_10: DataTypes.STRING(30)
    });

    return Amount;
};
