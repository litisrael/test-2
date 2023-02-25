import { Sequelize, DataTypes, Model } from "sequelize";

export async function createTableSapak(sequelize) {
  const sapak = sequelize.define(
    "sapak",
    {
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
      timestamps: false,
    }
  );
  sapak.sync();
  return {
    schema: sapak,
    insert: async (item) => {
      const result = await sapak.create(item);
      return result.toJSON();
    },
  };
}
