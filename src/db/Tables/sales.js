import { Sequelize, DataTypes, Model } from "sequelize";
import { createClient } from "./client.js";
import { createProduct } from "./product.js";

export async function createSales(sequelize) {
  const client = await createClient(sequelize);
  const product = await createProduct(sequelize);

  const sales = sequelize.define("sales", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
  },  {
    schema: "store",
    timestamps: false,
  },
  );

  sales.belongsTo(client.Schema, { foreignKey: "clienteId" });
  sales.belongsTo(product.Schema, { foreignKey: "productoId" });
  client.Schema.hasMany(sales);
  product.Schema.hasMany(sales);

  await sequelize.sync();
  console.log("Tabla sales creada");

  return {
    Schema: sales,
    insert: async (item) => {
      const result = await sales.create(item);
      return result.toJSON();
    },
  };
}
