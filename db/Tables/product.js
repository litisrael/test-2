export async function createProduct(sequelize) {
    const product = sequelize.define(
      "product",{
        skdu: {
          nameProduct: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        sapak: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
      
      },
      {
        schema: "store",
      }
    );
    await product.sync({force: true});
    return {
      Schema: product,
      insert: async (item) => {
        const result = await product.create(item);
        return result.toJSON();
      },
    };
  }
  