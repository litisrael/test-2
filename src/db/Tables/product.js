import { Sequelize, DataTypes, Model } from "sequelize";


export async function createProduct(sequelize) {
  const product = sequelize.define(
    "products",
    {
      skdu: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sapak: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {

      schema: "store",
      timestamps: false
    }
  );
  product.sync()
  return {
    Schema: product,
    insert: async (item) => {
      const result = await product.create(item);
      return result.toJSON();
    },
  };
}
