const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');
const images = [
  'family-hero.png',
  'van-hero.png',
  'plumber-hero.png',
  'boiler-advice.png',
  'hero-bg.png'
];

async function optimize() {
  console.log('Optimizing images to WebP...');
  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping missing image: ${img}`);
      continue;
    }

    const extName = path.extname(img);
    const baseName = path.basename(img, extName);
    const outputPath = path.join(publicDir, `${baseName}.webp`);

    try {
      const startSize = fs.statSync(inputPath).size;
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      const endSize = fs.statSync(outputPath).size;
      const reduction = ((startSize - endSize) / startSize * 100).toFixed(1);
      console.log(`Optimized ${img} -> ${baseName}.webp: ${(startSize/1024/1024).toFixed(2)}MB -> ${(endSize/1024).toFixed(0)}KB (Reduced by ${reduction}%)`);
    } catch (err) {
      console.error(`Error optimizing ${img}:`, err);
    }
  }
}

optimize();
