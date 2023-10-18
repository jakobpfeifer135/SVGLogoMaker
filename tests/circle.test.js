

const Circle = require("../lib/circle.js");

describe('circle shape and shape color', () => {
    it('should generate a red circle', () => {
        const circle = new Circle("txt", "blue", "red");
        const currentOutput = circle.render();
        expect(currentOutput).toContain('<circle cx="150" cy="100" r="100" fill="red" />');
        expect(currentOutput).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">txt</text>'); // Remove the extra double quotes
    });
});