const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const logosDir = path.join(publicDir, 'logos');

async function enhanceImage(filePath) {
  if (!fs.existsSync(filePath)) return;

  const image = sharp(filePath);
  const metadata = await image.metadata();

  // Upscale by 2x if small, apply subtle sharpening and high quality PNG encoding
  let pipeline = sharp(filePath);

  if (metadata.width && metadata.width < 1000) {
    pipeline = pipeline.resize({
      width: metadata.width * 2,
      kernel: sharp.kernel.lanczos3
    });
  }

  const tmpPath = filePath + '.enhanced.png';
  await pipeline
    .sharpen({ sigma: 1.2, m1: 0.5, m2: 2.0 })
    .png({ quality: 100, compressionLevel: 6 })
    .toFile(tmpPath);

  fs.copyFileSync(tmpPath, filePath);
  fs.unlinkSync(tmpPath);
  console.log('Enhanced logo quality:', path.basename(filePath));
}

async function enhanceAllLogos() {
  const mainLogo = path.join(publicDir, 'logo-new.png');
  await enhanceImage(mainLogo);

  const partnerLogos = fs.readdirSync(logosDir).filter(f => f.endsWith('.png'));
  for (const file of partnerLogos) {
    await enhanceImage(path.join(logosDir, file));
  }
}

enhanceAllLogos().catch(console.error);
