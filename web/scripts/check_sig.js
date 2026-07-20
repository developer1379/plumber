const fs = require('fs');

const imagePath = 'C:\\Users\\Hp\\.gemini\\antigravity-ide\\brain\\c39fe64d-1748-4027-b49f-ec36ac2e4dec\\plumber_hero_1784524762073.png';

const buffer = Buffer.alloc(12);
const fd = fs.openSync(imagePath, 'r');
fs.readSync(fd, buffer, 0, 12, 0);
fs.closeSync(fd);

console.log("Magic bytes:", buffer.toString('hex').toUpperCase());
console.log("As string:", buffer.toString('ascii'));
