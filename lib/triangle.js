const Shape = require("./shapes.js");

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
        super(logoText, textColor);
        this.shapeColor = shapeColor;
    }

    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" /> <!-- Use this.shapeColor -->
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>`;
    }
}

module.exports = Triangle;