const fs = require('fs');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\media__1784527527728.png';

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    console.log("Analyzing first column pixels (X: 12 to 60, Y: 8 to 56)...");
    for (let y = 8; y < 56; y++) {
      for (let x = 12; x < 60; x++) {
        const idx = (y * this.width + x) * 4;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        
        // Print if it looks like a non-white pixel
        if (r < 250 || g < 250 || b < 250) {
          console.log(`Pixel at (${x}, ${y}): RGB(${r}, ${g}, ${b})`);
        }
      }
    }
  });
