const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\3edc7427-061e-4b53-9e05-ab95feca687b\\media__1784535083535.png';
const outDir = path.join(__dirname, '..', 'public', 'logos');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function cropLogos() {
  const metadata = await sharp(srcPath).metadata();
  const w = metadata.width;
  const h = metadata.height;

  const crops = [
    { name: 'gassafe-exact.png', left: 20, width: 130, top: 0, height: 98 },
    { name: 'worcester-exact.png', left: 160, width: 140, top: 0, height: 98 },
    { name: 'which-exact.png', left: 310, width: 130, top: 0, height: 98 },
    { name: 'checkatrade-exact.png', left: 450, width: 140, top: 0, height: 98 },
    { name: 'trustpilot-exact.png', left: 600, width: 160, top: 0, height: 98 }
  ];

  for (const crop of crops) {
    const outPath = path.join(outDir, crop.name);
    await sharp(srcPath)
      .extract({
        left: crop.left,
        top: crop.top,
        width: crop.width,
        height: crop.height
      })
      .toFile(outPath);
    console.log('Saved successfully:', crop.name);
  }
}

cropLogos().catch(console.error);
