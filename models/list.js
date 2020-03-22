module.exports = function (sequelize, DataTypes) {
    var list = sequelize.define("list", {
        task: DataTypes.STRING,
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },


    }, {
        timestamps: false,
        tableName: 'list'
    });

    return list;
}