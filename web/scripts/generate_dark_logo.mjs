import fs from 'fs';
import { PNG } from 'pngjs';

function generateDarkLogo(inputPngPath, outputPngPath) {
  try {
    const pngBuffer = fs.readFileSync(inputPngPath);
    const png = PNG.sync.read(pngBuffer);
    
    for (let y = 0; y < png.height; y++) {
      for (let x = 0; x < png.width; x++) {
        const idx = (png.width * y + x) * 4;
        const r = png.data[idx];
        const g = png.data[idx + 1];
        const b = png.data[idx + 2];
        const a = png.data[idx + 3];
        
        if (a > 10) {
          // Check if pixel is "nearly grayscale and bright" (this targets the white text R, H and subtitle)
          const diffRG = Math.abs(r - g);
          const diffGB = Math.abs(g - b);
          const diffRB = Math.abs(r - b);
          const brightness = (r + g + b) / 3;
          
          if (brightness > 180 && diffRG < 25 && diffGB < 25 && diffRB < 25) {
            // Colorize the white text to our brand's primary dark color (#0a192f)
            png.data[idx] = 10;     // R
            png.data[idx + 1] = 25; // G
            png.data[idx + 2] = 47; // B
          }
        }
      }
    }
    
    const outputBuffer = PNG.sync.write(png);
    fs.writeFileSync(outputPngPath, outputBuffer);
    console.log(`Successfully generated transparent dark-text logo at: ${outputPngPath}`);
  } catch (e) {
    console.error('Error generating dark logo:', e);
  }
}

// Generate the dark-text logo by colorizing the cropped transparent white-text logo
generateDarkLogo(
  'd:/laravel/plumber/web/public/logo-white-text-transparent.png',
  'd:/laravel/plumber/web/public/logo-dark-text.png'
);
