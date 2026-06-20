import { describe, expect, it } from "vitest";
import { createPerson } from "./examples";


describe("createPerson", () => {
    it("Create a person", () => {
        expect(createPerson("Bob", 20))
            .toEqual(
                {
                    "name": "Bob",
                    "age": 20
                }
            )
        }
    )
})