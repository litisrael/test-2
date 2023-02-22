import { createClient } from "./client.js";


export async function initTables(connection) {
    const client = await createClient(connection)

    return {
        client: client
    }

} 