const fs = require('fs');
const jpeg = require('jpeg-js');

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\plumber_hero_1784524762073.png';

try {
  const jpegData = fs.readFileSync(imagePath);
  const rawImageData = jpeg.decode(jpegData, { useTArray: true });
  console.log(`JPEG Dimensions: ${rawImageData.width}x${rawImageData.height}`);
} catch (err) {
  console.error(err);
}
