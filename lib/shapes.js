class Shape {
    constructor(logoText, textColor, shapeColor) {
        this.logoText = logoText;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        
    }
}

class Circle extends Shape {
    constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor)}
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>`;
    }
}

class Square extends Shape {
    constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor)}
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="50" height="200" width="200" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor)}
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>`;
    }
}


module.exports = { Circle, Square, Triangle };