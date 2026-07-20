const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '..', 'public', 'logos');
const files = fs.readdirSync(logosDir).filter(f => f.endsWith('.png'));

async function processLogos() {
  for (const file of files) {
    const filePath = path.join(logosDir, file);
    const { data, info } = await sharp(filePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Convert near-white background to transparent
      if (r > 235 && g > 235 && b > 235) {
        data[i + 3] = 0;
      }
    }

    const tmpPath = filePath + '.tmp.png';
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(tmpPath);

    fs.copyFileSync(tmpPath, filePath);
    fs.unlinkSync(tmpPath);
    console.log('Processed transparent logo:', file);
  }
}

processLogos().catch(console.error);
