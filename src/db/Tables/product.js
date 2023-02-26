import { Sequelize, DataTypes, Model } from "sequelize";
import { createTableSapak } from "./sapak.js";

export async function createProduct(sequelize) {
  const sapak = await createTableSapak(sequelize);
  const product = sequelize.define(
    "products",
    {
      skdu: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      sapakId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: sapak.Schema,
          key: "companyNumber"
        }
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
  product.belongsTo(sapak.Schema, { foreignKey: 'sapakId' });
  product.sync();
  return {
    Schema: product,
    insert: async (item) => {
      const result = await product.create(item);
      return result.toJSON();
    },
  };
}
