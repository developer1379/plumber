const fs = require('fs');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\media__1784528157847.png';

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    const W = this.width;
    
    let activeX = [];
    for (let x = 0; x < W; x++) {
      let hasColor = false;
      // Scan vertical range for logos (y = 5 to 105)
      for (let y = 5; y < 105; y++) {
        const idx = (y * W + x) * 4;
        const r = this.data[idx];
        const g = this.data[idx + 1];
        const b = this.data[idx + 2];
        
        // Threshold for logo pixels
        if (r < 240 || g < 240 || b < 240) {
          hasColor = true;
          break;
        }
      }
      activeX.push(hasColor ? 1 : 0);
    }
    
    // Print continuous active ranges
    let inside = false;
    let start = 0;
    for (let x = 0; x < W; x++) {
      if (activeX[x] === 1 && !inside) {
        inside = true;
        start = x;
      } else if (activeX[x] === 0 && inside) {
        inside = false;
        console.log(`Logo range: [${start}, ${x - 1}]`);
      }
    }
    if (inside) {
      console.log(`Logo range: [${start}, ${W - 1}]`);
    }
  });
