import { Sequelize } from 'sequelize-typescript';
import config from 'config';
import models from '../model/sequelize';

const host = config.get('db.host');
const name = config.get('db.name');
const user = config.get('db.user');
const pass = config.get('db.pass');
// Hi

const sequelize = new Sequelize(name, user, pass, {
    host: host,
    dialect: 'mysql',
    dialectOptions: {
        supportBigNumbers: true,
        decimalNumbers: true
    },
    models
});

export default sequelize;