const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');
const PNG = require('pngjs').PNG;

const dir = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec';

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.png') && !file.endsWith('.jpg')) return;
  const filePath = path.join(dir, file);
  const size = fs.statSync(filePath).size;
  
  // Read first 4 bytes
  const buffer = Buffer.alloc(4);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buffer, 0, 4, 0);
  fs.closeSync(fd);
  
  const hex = buffer.toString('hex').toUpperCase();
  let format = 'Unknown';
  let dims = 'N/A';
  
  if (hex === '89504E47') {
    format = 'PNG';
    try {
      const pngBuf = fs.readFileSync(filePath);
      const png = PNG.sync.read(pngBuf);
      dims = `${png.width}x${png.height}`;
    } catch (e) {
      dims = 'Error reading';
    }
  } else if (hex.startsWith('FFD8FF')) {
    format = 'JPEG';
    try {
      const jpgBuf = fs.readFileSync(filePath);
      const jpg = jpeg.decode(jpgBuf, { useTArray: true });
      dims = `${jpg.width}x${jpg.height}`;
    } catch (e) {
      dims = 'Error reading';
    }
  }
  
  console.log(`${file} (${size} bytes) - Format: ${format}, Dimensions: ${dims}`);
});
