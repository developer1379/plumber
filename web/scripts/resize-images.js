const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');
const images = [
  { file: 'family-hero.webp', maxWidth: 1200 },
  { file: 'van-hero.webp', maxWidth: 1000 },
  { file: 'plumber-hero.webp', maxWidth: 1000 },
  { file: 'boiler-advice.webp', maxWidth: 800 },
  { file: 'hero-bg.webp', maxWidth: 1200 }
];

async function resize() {
  console.log('Resizing WebP images to optimized resolutions...');
  for (const item of images) {
    const inputPath = path.join(publicDir, item.file);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping missing image: ${item.file}`);
      continue;
    }

    try {
      const fileBuffer = fs.readFileSync(inputPath);
      const metadata = await sharp(fileBuffer).metadata();
      console.log(`Current size of ${item.file}: ${metadata.width}x${metadata.height}`);
      
      if (metadata.width > item.maxWidth) {
        const buffer = await sharp(fileBuffer)
          .resize({ width: item.maxWidth })
          .toBuffer();
        
        fs.writeFileSync(inputPath, buffer);
        const newSize = fs.statSync(inputPath).size;
        console.log(`Resized ${item.file} to width ${item.maxWidth}. New size: ${(newSize/1024).toFixed(0)}KB`);
      } else {
        console.log(`${item.file} is already under max width of ${item.maxWidth}px.`);
      }
    } catch (err) {
      console.error(`Error resizing ${item.file}:`, err);
    }
  }
}

resize();
