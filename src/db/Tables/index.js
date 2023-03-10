import { createClient } from "./client.js";
import { createProduct } from "./product.js";
import { createTableSapak } from "./sapak.js";
import { createSales } from "./sales.js";
export async function initTables(connection) {
    const client = await createClient(connection);
    const product= await createProduct(connection);
    const sapak = await createTableSapak(connection)
    const sales = await createSales(connection)

    return {
        client: client, 
        product: product,
        sapak: sapak,
        sales: sales
        
    }

} 


//import { getConnection } from "../connection.js";

// async function test (){
// const connection = await getConnection()
// const db = createProduct(connection)
// ;(await db).insert({
//         skdu: "fghjk",
//         sapak: "marta",
//          price: "678"
//       })
// }
// test()

