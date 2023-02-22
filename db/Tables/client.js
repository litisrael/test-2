import { Sequelize, DataTypes, Model } from "sequelize";


export async function createClient (sequelize)
{
  const client = sequelize.define(
    "clients",
    {
      id: {
        type: DataTypes.BIGINT,
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
  client.sync()
  .then(() => {
    console.log('Tabla creada');
  })
  .catch((error) => {
    console.error('Error al crear la tabla:', error);
  });
  return {
    Schema: client,
    insert: async (item) => {
      const result = await client.create(item);
      return result.toJSON();
    },
  };
}