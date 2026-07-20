const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\media__1784527283522.png';
const outputDir = 'd:\\laravel\\plumber\\web\\public\\icons';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    const W = this.width;
    const H = this.height;
    
    // Divide into 5 columns
    const cols = 5;
    const colWidth = Math.floor(W / cols);
    
    const iconNames = [
      'plumbing.png',
      'boiler.png',
      'heating.png',
      'emergency.png',
      'installations.png'
    ];

    for (let col = 0; col < cols; col++) {
      const startX = col * colWidth;
      const endX = (col === cols - 1) ? W : (col + 1) * colWidth;
      
      // Target only the inner icon bounds (avoiding top card borders at y < 30)
      const scanMinX = startX + 60;
      const scanMaxX = startX + 144;
      const scanMinY = 32;
      const scanMaxY = 96;
      
      let minX = scanMaxX, maxX = scanMinX;
      let minY = scanMaxY, maxY = scanMinY;
      
      // Find bounding box of non-white pixels inside this central window
      for (let y = scanMinY; y < scanMaxY; y++) {
        for (let x = scanMinX; x < scanMaxX; x++) {
          const idx = (y * W + x) * 4;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];
          
          if (r < 250 || g < 250 || b < 250) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      
      if (maxX >= minX && maxY >= minY) {
        // Add a padding of 4px around the icon
        const pad = 4;
        const cropX = Math.max(startX, minX - pad);
        const cropY = Math.max(0, minY - pad);
        const cropW = Math.min(endX - cropX, (maxX - minX) + 2 * pad);
        const cropH = Math.min(H - cropY, (maxY - minY) + 2 * pad);
        
        console.log(`Column ${col} (${iconNames[col]}): Crop bounding box X:${cropX} Y:${cropY} W:${cropW} H:${cropH}`);
        
        const dst = new PNG({ width: cropW, height: cropH });
        
        for (let y = 0; y < cropH; y++) {
          for (let x = 0; x < cropW; x++) {
            const srcX = cropX + x;
            const srcY = cropY + y;
            const srcIdx = (srcY * W + srcX) * 4;
            const dstIdx = (y * cropW + x) * 4;
            
            const r = this.data[srcIdx];
            const g = this.data[srcIdx + 1];
            const b = this.data[srcIdx + 2];
            
            // Apply smart alpha transparency based on color distance from white
            const alpha = 255 - Math.min(r, g, b);
            
            dst.data[dstIdx] = r;
            dst.data[dstIdx + 1] = g;
            dst.data[dstIdx + 2] = b;
            dst.data[dstIdx + 3] = alpha;
          }
        }
        
        const outPath = path.join(outputDir, iconNames[col]);
        dst.pack().pipe(fs.createWriteStream(outPath))
          .on('finish', () => {
            console.log(`Saved transparent icon: ${outPath}`);
          });
      } else {
        console.log(`No icon pixels detected in column ${col}`);
      }
    }
  })
  .on('error', function(err) {
    console.error(err);
  });
