// Import the js file to test
import { geoURLChecker } from "../src/client/js/geoChecker";

// The describe() function
describe("Testing the URL validity", () => {
    // The test() function
    test("Testing the geoURLChecker() function", () => {
        expect(geoURLChecker).toBeDefined();
        })
    }
);