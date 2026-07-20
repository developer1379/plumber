const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const logoPath = path.join(__dirname, '..', 'public', 'van-hero.png');

async function removeRedButtonFromBackground() {
  const { data, info } = await sharp(logoPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Pixel manipulation: Replace red-hued pixels in the bottom left area (y > height * 0.7, x < width * 0.55)
  // with dark road texture sampled from neighboring dark pavement pixels
  for (let y = Math.floor(height * 0.68); y < height; y++) {
    for (let x = 0; x < Math.floor(width * 0.65); x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Detect red button pixels (High red compared to green/blue) or white text inside red button
      if ((r > 150 && g < 100 && b < 100) || (r > 200 && g > 200 && b > 200 && y > height * 0.72)) {
        // Sample dark pavement pixel from nearby asphalt (x + 180, y)
        const sampleX = Math.min(width - 1, x + 200);
        const sampleIdx = (y * width + sampleX) * channels;

        data[idx] = data[sampleIdx];
        data[idx + 1] = data[sampleIdx + 1];
        data[idx + 2] = data[sampleIdx + 2];
        if (channels === 4) {
          data[idx + 3] = data[sampleIdx + 3];
        }
      }
    }
  }

  const tmpPath = logoPath + '.cleaned.png';
  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
  .png()
  .toFile(tmpPath);

  fs.copyFileSync(tmpPath, logoPath);
  fs.unlinkSync(tmpPath);
  console.log('Successfully cleaned van-hero.png background image by removing baked-in red button!');
}

removeRedButtonFromBackground().catch(console.error);
