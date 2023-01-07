import { Sequelize } from "sequelize";

const db = new Sequelize('pgtest', 'pgtest', 'owoadeanu', {
    host: 'pgtest.cc1qdwldgbjh.us-east-1.rds.amazonaws.com',
    dialect: "postgres"
});


export default db