import { getConnection } from "./connection.js";

import * as Tables from "./Tables/index.js"

export async function initDB() {
    const connection = await getConnection()
    const tables = await Tables.initTables(connection)
    return tables
}

