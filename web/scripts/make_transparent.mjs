import fs from 'fs';
import jpeg from 'jpeg-js';
import { PNG } from 'pngjs';

function makeTransparent(inputJpgPath, outputPngPath) {
  try {
    const jpgBuffer = fs.readFileSync(inputJpgPath);
    const rawImageData = jpeg.decode(jpgBuffer, { useTiaPadLimit: true });
    
    const { width, height, data } = rawImageData;
    
    // Create a new PNG with the same dimensions
    const png = new PNG({ width, height });
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Calculate max color channel to identify background vs foreground
      const maxVal = Math.max(r, g, b);
      
      let alpha = 255;
      
      // Thresholds: 
      // Below 35: completely transparent background
      // Above 130: completely solid foreground
      // In-between: interpolate alpha for smooth anti-aliased edges
      if (maxVal < 35) {
        alpha = 0;
      } else if (maxVal < 130) {
        alpha = Math.round(((maxVal - 35) / (130 - 35)) * 255);
      }
      
      png.data[i] = r;
      png.data[i + 1] = g;
      png.data[i + 2] = b;
      png.data[i + 3] = alpha;
    }
    
    const pngBuffer = PNG.sync.write(png);
    fs.writeFileSync(outputPngPath, pngBuffer);
    console.log(`Successfully created transparent PNG logo at: ${outputPngPath}`);
  } catch (e) {
    console.error('Error generating transparent PNG:', e);
  }
}

makeTransparent(
  'd:/laravel/plumber/web/public/logo-white-text.jpg',
  'd:/laravel/plumber/web/public/logo-white-text-transparent.png'
);
