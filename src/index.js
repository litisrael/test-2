import { createServer } from "../api/index.js"

createServer().then(() => {
    console.log("Exiting...")
})
