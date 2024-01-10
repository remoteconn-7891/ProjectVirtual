module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define('user role', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return role;
};