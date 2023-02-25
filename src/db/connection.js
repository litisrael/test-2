import { Sequelize } from "sequelize";


export async function getConnection() {
    const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        database: "store_elctronic",
        username: 'isroel',
        password: '01456',
        logging: (sql) => {
            console.log("Query: %s", sql)
        }
    })
    return sequelize;
} 