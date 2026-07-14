import fs from 'fs';
import { PNG } from 'pngjs';

function analyzePngWithLibrary(filePath) {
  try {
    const pngBuffer = fs.readFileSync(filePath);
    const png = PNG.sync.read(pngBuffer);
    
    let whitePixels = 0;
    let blackPixels = 0;
    let coloredPixels = 0;
    let transparentPixels = 0;
    
    let samples = [];
    
    for (let y = 0; y < png.height; y++) {
      for (let x = 0; x < png.width; x++) {
        const idx = (png.width * y + x) * 4;
        const r = png.data[idx];
        const g = png.data[idx+1];
        const b = png.data[idx+2];
        const a = png.data[idx+3];
        
        if (a < 20) {
          transparentPixels++;
        } else {
          const brightness = (r + g + b) / 3;
          if (brightness > 200) {
            whitePixels++;
            if (samples.length < 5) samples.push(`white_rgb(${r},${g},${b})`);
          } else if (brightness < 40) {
            blackPixels++;
            if (samples.length < 5) samples.push(`black_rgb(${r},${g},${b})`);
          } else {
            coloredPixels++;
            if (samples.length < 5) samples.push(`color_rgb(${r},${g},${b})`);
          }
        }
      }
    }
    
    console.log(`File: ${filePath.split('/').pop()}`);
    console.log(`Dimensions: ${png.width}x${png.height}`);
    console.log(`Transparent: ${transparentPixels}, White: ${whitePixels}, Black: ${blackPixels}, Colored: ${coloredPixels}`);
    console.log(`Samples:`, samples.slice(0, 5));
  } catch (e) {
    console.error(e);
  }
}

analyzePngWithLibrary('d:/laravel/plumber/web/public/logo-dark-text.png');
