const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\media__1784528157847.png';
const outputDir = 'd:\\laravel\\plumber\\web\\public\\icons';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.createReadStream(imagePath)
  .pipe(new PNG())
  .on('parsed', function() {
    const W = this.width;
    const H = this.height;
    
    const logoRanges = [
      { name: 'brand_worcester.png', minX: 74, maxX: 161 },
      { name: 'brand_vaillant.png', minX: 256, maxX: 361 },
      { name: 'brand_ideal.png', minX: 456, maxX: 505 },
      { name: 'brand_baxi.png', minX: 601, maxX: 685 },
      { name: 'brand_glowworm.png', minX: 781, maxX: 872 }
    ];

    const scanMinY = 2;
    const scanMaxY = 109;

    logoRanges.forEach((logo) => {
      let minX = logo.maxX, maxX = logo.minX;
      let minY = scanMaxY, maxY = scanMinY;
      
      // Find bounding box of non-white pixels
      for (let y = scanMinY; y < scanMaxY; y++) {
        for (let x = logo.minX; x < logo.maxX; x++) {
          const idx = (y * W + x) * 4;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];
          
          if (r < 240 || g < 240 || b < 240) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
          }
        }
      }
      
      if (maxX >= minX && maxY >= minY) {
        const pad = 2;
        const cropX = Math.max(logo.minX, minX - pad);
        const cropY = Math.max(scanMinY, minY - pad);
        const cropW = Math.min(logo.maxX - cropX, (maxX - minX) + 2 * pad);
        const cropH = Math.min(scanMaxY - cropY, (maxY - minY) + 2 * pad);
        
        console.log(`Logo ${logo.name}: Crop bounding box X:${cropX} Y:${cropY} W:${cropW} H:${cropH}`);
        
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
        
        const outPath = path.join(outputDir, logo.name);
        dst.pack().pipe(fs.createWriteStream(outPath))
          .on('finish', () => {
            console.log(`Saved transparent logo: ${outPath}`);
          });
      } else {
        console.log(`No logo pixels detected for ${logo.name}`);
      }
    });
  })
  .on('error', function(err) {
    console.error(err);
  });
