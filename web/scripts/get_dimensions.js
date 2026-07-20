const fs = require('fs');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\plumber_hero_1784524762073.png';

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    console.log(`Dimensions: ${this.width}x${this.height}`);
  })
  .on('error', function(err) {
    console.error(err);
  });
