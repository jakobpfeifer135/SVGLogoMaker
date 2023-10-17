const Shape = require("./shapes.js")

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor); // Correct the order of parameters
        this.shapeColor = shapeColor; // Assign the shapeColor
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>`;
    }
}

module.exports = Circle;