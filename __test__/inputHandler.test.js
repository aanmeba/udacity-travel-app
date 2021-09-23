// Import the js file to test
import { handleSubmit } from "../src/client/js/inputHandler";

describe("Testing the submit functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
        })
    }
);