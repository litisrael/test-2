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