import { Sequelize, DataTypes, Model } from "sequelize";

function createTableSapak (pablo){
    const sapak = pablo.define("sapak",{
        companyNumber: {
            type: DataTypes.STRING,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          address: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          tel: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    })
}