const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');
const images = [
  { file: 'family-hero.png', maxWidth: 1920, quality: 90 },
  { file: 'van-hero.png', maxWidth: 1600, quality: 90 },
  { file: 'plumber-hero.png', maxWidth: 1600, quality: 90 },
  { file: 'boiler-advice.png', maxWidth: 1200, quality: 90 },
  { file: 'hero-bg.png', maxWidth: 1920, quality: 90 }
];

async function optimize() {
  console.log('Generating high-quality WebP images...');
  for (const item of images) {
    const inputPath = path.join(publicDir, item.file);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping missing image: ${item.file}`);
      continue;
    }

    const extName = path.extname(item.file);
    const baseName = path.basename(item.file, extName);
    const outputPath = path.join(publicDir, `${baseName}.webp`);

    try {
      const fileBuffer = fs.readFileSync(inputPath);
      const startSize = fileBuffer.length;
      
      const buffer = await sharp(fileBuffer)
        .resize({ width: item.maxWidth, withoutEnlargement: true })
        .webp({ quality: item.quality })
        .toBuffer();
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`Generated ${baseName}.webp: ${(startSize/1024/1024).toFixed(2)}MB -> ${(buffer.length/1024).toFixed(0)}KB (Quality: ${item.quality}%, MaxWidth: ${item.maxWidth}px)`);
    } catch (err) {
      console.error(`Error processing ${item.file}:`, err);
    }
  }
}

optimize();
