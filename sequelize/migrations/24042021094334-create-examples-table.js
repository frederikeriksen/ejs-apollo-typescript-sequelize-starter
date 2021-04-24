module.exports.up = (queryInterface, DataTypes) =>{
    return queryInterface.createTable('examples', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        exampleText: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
}

module.exports.down = (queryInterface) => {
    return queryInterface.dropTable('examples');
} 