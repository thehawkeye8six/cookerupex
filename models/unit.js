/**
 * Created by benj on 08/03/17.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
    var Unit = sequelize.define("Unit", {
    description : DataTypes.STRING
    });

    return Unit;
};
