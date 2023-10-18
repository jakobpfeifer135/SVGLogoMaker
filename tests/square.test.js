const Square = require("../lib/square.js");

describe('Square class', () => {
    it('should generate a square with specific parameters', () => {
        const expectedOutput = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" height="200" width="200" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TestSquare</text>
        </svg>`;

        const square = new Square("TestSquare", "blue", "green");
        const currentOutput = square.render();

        expect(currentOutput).toBe(expectedOutput);
    });
});