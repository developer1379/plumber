const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\3edc7427-061e-4b53-9e05-ab95feca687b\\media__1784536860019.png';
const outPath = path.join(__dirname, '..', 'public', 'van-hero.png');

async function cropVan() {
  const metadata = await sharp(srcPath).metadata();
  console.log('User image metadata:', metadata.width, 'x', metadata.height);

  // Extract the van portion (right 58% of the image)
  const left = Math.floor(metadata.width * 0.42);
  const top = 0;
  const width = metadata.width - left;
  const height = metadata.height;

  await sharp(srcPath)
    .extract({ left, top, width, height })
    .toFile(outPath);

  console.log('Successfully saved exact van photo to public/van-hero.png!');
}

cropVan().catch(console.error);
