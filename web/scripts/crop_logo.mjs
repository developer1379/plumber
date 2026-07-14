import fs from 'fs';
import { PNG } from 'pngjs';

function cropPng(inputPath, outputPath) {
  try {
    const pngBuffer = fs.readFileSync(inputPath);
    const png = PNG.sync.read(pngBuffer);
    
    let minX = png.width;
    let maxX = 0;
    let minY = png.height;
    let maxY = 0;
    
    // Find bounding box of non-transparent pixels (alpha > 10)
    for (let y = 0; y < png.height; y++) {
      for (let x = 0; x < png.width; x++) {
        const idx = (png.width * y + x) * 4;
        const alpha = png.data[idx + 3];
        if (alpha > 10) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    
    console.log(`Bounding Box: X[${minX} to ${maxX}], Y[${minY} to ${maxY}]`);
    
    // Add small padding (e.g. 10px) to prevent clipping edges
    const padding = 15;
    minX = Math.max(0, minX - padding);
    maxX = Math.min(png.width - 1, maxX + padding);
    minY = Math.max(0, minY - padding);
    maxY = Math.min(png.height - 1, maxY + padding);
    
    const croppedWidth = maxX - minX + 1;
    const croppedHeight = maxY - minY + 1;
    console.log(`Cropped dimensions: ${croppedWidth}x${croppedHeight}`);
    
    // Create new cropped PNG
    const croppedPng = new PNG({ width: croppedWidth, height: croppedHeight });
    
    for (let y = 0; y < croppedHeight; y++) {
      for (let x = 0; x < croppedWidth; x++) {
        const srcIdx = (png.width * (y + minY) + (x + minX)) * 4;
        const destIdx = (croppedWidth * y + x) * 4;
        
        croppedPng.data[destIdx] = png.data[srcIdx];
        croppedPng.data[destIdx + 1] = png.data[srcIdx + 1];
        croppedPng.data[destIdx + 2] = png.data[srcIdx + 2];
        croppedPng.data[destIdx + 3] = png.data[srcIdx + 3];
      }
    }
    
    const outputBuffer = PNG.sync.write(croppedPng);
    fs.writeFileSync(outputPath, outputBuffer);
    console.log(`Successfully cropped and saved transparent logo to: ${outputPath}`);
  } catch (e) {
    console.error('Error cropping PNG:', e);
  }
}

// Crop the white text logo
cropPng(
  'd:/laravel/plumber/web/public/logo-white-text-transparent.png',
  'd:/laravel/plumber/web/public/logo-white-text-transparent.png'
);

// Crop the dark text logo
cropPng(
  'd:/laravel/plumber/web/public/logo-dark-text.png',
  'd:/laravel/plumber/web/public/logo-dark-text.png'
);
