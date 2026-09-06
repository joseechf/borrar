import test from "node:test"
import assert from "node:assert/strict"
import { suma } from "./suma.js"

test("suma dos numeros correctos", () => {
    assert.equal(suma(2, 3), 5)
})

test("suma numeros negativos", () => {
    assert.equal(suma(-2, -3), -5)
})