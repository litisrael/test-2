import { createClient } from "./client.js";
import { createProduct } from "./product.js";


export async function initTables(connection) {
    const client = await createClient(connection);
    const product= await createProduct(connection)

    return {
        client: client,
        product: product
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

