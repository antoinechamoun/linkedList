import { describe } from "yargs";
import { Node } from "./Node";

const nullNode = Node()
const valueNode = Node("value")

describe("Node properties", ()=>{
    test('Empty node', ()=>{
        expect(valueNode.value).toBe("value")
    })
})