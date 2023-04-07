class SVG {
  constructor(width = 300, height = 200) {
    this.width = width;
    this.height = height;
    this.text = null;
    this.shape = null;
  }

  setText(content, color) {
    if (content.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }

    this.text = {
      content: content,
      color: color,
      render: function () {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
      },
    };
  }

  setShape(shape) {
    this.shape = shape;
  }

  render() {
    let elements = '';

    if (this.shape) {
      elements += this.shape.render();
    }

    if (this.text) {
      elements += this.text.render();
    }

    return `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">${elements}</svg>`;
  }
}

module.exports = SVG;