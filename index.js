import { suma } from "./suma.js"

console.log("en ejecución...")
console.log("cambios libres de conflicto")
const a = 3
const b = 5
console.log(`la suma ${a} + ${b} = ${suma(a, b)}`)
