import { Sequelize, DataTypes, Model } from "sequelize";

export async function createTableSapak (test){
    const sapak = test.define("sapak",{
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
          
    },
    {
        schema: "store",
    }
    )
    sapak.sync()
    return{
        schema: sapak,
        insert: async (item) => {
            const result = await schema.create(item);
            return result.toJSON();
          },
    }
}