/**
 * Created by benj on 08/03/17.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var Unit = sequelize.define("Unit", {
        unit_1: DataTypes.STRING(30),
        unit_2: DataTypes.STRING(30),
        unit_3: DataTypes.STRING(30),
        unit_4: DataTypes.STRING(30),
        unit_5: DataTypes.STRING(30),
        unit_6: DataTypes.STRING(30),
        unit_7: DataTypes.STRING(30),
        unit_8: DataTypes.STRING(30),
        unit_9: DataTypes.STRING(30),
        unit_10: DataTypes.STRING(30)
    });

    return Unit;
};
