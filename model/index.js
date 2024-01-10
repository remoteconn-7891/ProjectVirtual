const config = require('../config/db.config.js');

const Sequelize = require('sequelze');
const sequelize = new Sequelize(
    config.database,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const database = {};

database.user = require('../model/user.model.js')(sequelize, Sequelize);
database.role = require('../model/role.model.js')(sequelize, Sequelize);


database.role.belongsToMany(database.user, {
    through: 'user_role'
});

database.role = ['job seeker', 'company'];

module.exports = database;