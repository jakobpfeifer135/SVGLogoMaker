const Shape = require('../lib/shapes'); // Adjust the path as needed

describe('Shape class', () => {
  it('should create a Shape instance with the given text and textColor', () => {
    const logoText = 'ABC';
    const textColor = 'blue';
    const shape = new Shape(logoText, textColor);

    expect(shape.logoText).toBe(logoText);
    expect(shape.textColor).toBe(textColor);
  });

  it('should have a default textColor of black if not provided', () => {
    const logoText = 'XYZ';
    const shape = new Shape(logoText);

    expect(shape.textColor).toBe('black');
  });

  it('should render the SVG correctly', () => {
    const logoText = 'DEF';
    const textColor = 'green';
    const shape = new Shape(logoText, textColor);
    const svg = shape.render();
  });
});



