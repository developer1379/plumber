const sharp = require('sharp');
const path = require('path');

const logoPath = path.join(__dirname, '..', 'public', 'logo-new.png');
const outPath = path.join(__dirname, '..', 'public', 'logo-new-trans.png');

async function makeTransparent() {
  const { data, info } = await sharp(logoPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Iterate over RGBA pixels and convert near-white background to fully transparent (alpha = 0)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is near-white / off-white background
    if (r > 235 && g > 235 && b > 235) {
      data[i + 3] = 0; // alpha = 0 (transparent)
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
  .png()
  .toFile(logoPath + '.tmp.png');

  // Overwrite public/logo-new.png with transparent version
  const fs = require('fs');
  fs.copyFileSync(logoPath + '.tmp.png', logoPath);
  fs.unlinkSync(logoPath + '.tmp.png');
  console.log('Successfully updated logo-new.png with 100% transparent background!');
}

makeTransparent().catch(console.error);
