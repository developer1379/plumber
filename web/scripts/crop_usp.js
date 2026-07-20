const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\media__1784527527728.png';
const outputDir = 'd:\\laravel\\plumber\\web\\public\\icons';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    const W = this.width;
    const H = this.height;
    
    // 4 Columns
    const cols = 4;
    const colWidth = Math.floor(W / cols);
    
    const iconNames = [
      'usp_gassafe.png',
      'usp_clock.png',
      'usp_shield.png',
      'usp_users.png'
    ];

    for (let col = 0; col < cols; col++) {
      const startX = col * colWidth;
      const endX = (col === cols - 1) ? W : (col + 1) * colWidth;
      
      // Target the exact horizontal coordinates where each icon is located
      let scanMinX, scanMaxX;
      if (col === 0) {
        scanMinX = 40; scanMaxX = 90;
      } else if (col === 1) {
        scanMinX = 290; scanMaxX = 340;
      } else if (col === 2) {
        scanMinX = 535; scanMaxX = 580;
      } else {
        scanMinX = 770; scanMaxX = 825;
      }
      
      const scanMinY = 5;
      const scanMaxY = 58;
      
      let minX = scanMaxX, maxX = scanMinX;
      let minY = scanMaxY, maxY = scanMinY;
      
      // Find bounding box of non-white pixels (using threshold 230 to ignore off-white backgrounds)
      for (let y = scanMinY; y < scanMaxY; y++) {
        for (let x = scanMinX; x < scanMaxX; x++) {
          const idx = (y * W + x) * 4;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];
          
          if (r < 230 || g < 230 || b < 230) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      
      if (maxX >= minX && maxY >= minY) {
        const pad = 3;
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
            
            // Professional soft transparency thresholding
            const minVal = Math.min(r, g, b);
            let alpha = 255;
            if (minVal > 240) {
              alpha = Math.round((255 - minVal) * (255 / 15));
            }
            
            dst.data[dstIdx] = r;
            dst.data[dstIdx + 1] = g;
            dst.data[dstIdx + 2] = b;
            dst.data[dstIdx + 3] = alpha;
          }
        }
        
        const outPath = path.join(outputDir, iconNames[col]);
        dst.pack().pipe(fs.createWriteStream(outPath))
          .on('finish', () => {
            console.log(`Saved transparent USP icon: ${outPath}`);
          });
      } else {
        console.log(`No USP icon pixels detected in column ${col}`);
      }
    }
  })
  .on('error', function(err) {
    console.error(err);
  });
