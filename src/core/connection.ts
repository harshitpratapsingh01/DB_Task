const Sequelize = require('sequelize');
import dotenv from 'dotenv';
import { DatabaseConfigAttributes } from './DbConfig';
dotenv.config();

const sqlize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    pool:{
        max:10,
        min:0,
        aquire:3000,
        idle:10000
    }
  });


const databaseConfig: DatabaseConfigAttributes = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT,
}

class Connection {
    static async dbconnection() {
        console.log(databaseConfig)
        try {
            // const msgonconnection = sqlize.authenticate;
            const sequelize = new Sequelize(databaseConfig)
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}


export { sqlize, Connection };
