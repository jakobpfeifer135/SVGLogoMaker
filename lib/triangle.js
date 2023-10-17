const Shape = require("./shapes.js");//require is pulling the data from the shapes.js file

//targets the shape with the parameters listed as well as pastes in the values for the line to line to identify what is a triangle
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
//set it up for export so index.js can utilize it

module.exports = Triangle;