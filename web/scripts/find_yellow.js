const fs = require('fs');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\media__1784527527728.png';

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    console.log("Searching for yellow pixels (R > 200, G > 150, B < 100)...");
    let found = 0;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (y * this.width + x) * 4;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        
        if (r > 200 && g > 150 && b < 100) {
          if (found < 20) {
            console.log(`Yellow pixel at (${x}, ${y}): RGB(${r}, ${g}, ${b})`);
          }
          found++;
        }
      }
    }
    console.log(`Total yellow pixels found: ${found}`);
  });
