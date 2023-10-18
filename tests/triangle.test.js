const Triangle = require("../lib/triangle.js");

describe('Triangle class', () => {
    it('should generate a triangle with specific parameters', () => {
        const expectedOutput = `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill="yellow" /> <!-- Use this.shapeColor -->
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">TestTriangle</text>
        </svg>`;

        const triangle = new Triangle("TestTriangle", "green", "yellow");
        const currentOutput = triangle.render();

        expect(currentOutput).toBe(expectedOutput);
    });
});