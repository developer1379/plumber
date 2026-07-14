import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';

const dir = 'C:/Users/Hp/.gemini/antigravity-ide/brain/bf13dd9c-396c-4135-b89a-95dea4263d34';

function scanAllPngs() {
  fs.readdirSync(dir).forEach(file => {
    if (file.startsWith('media__') && file.endsWith('.png')) {
      const filePath = path.join(dir, file);
      try {
        const buffer = fs.readFileSync(filePath);
        const png = PNG.sync.read(buffer);
        
        let transparent = 0;
        let nonTrans = 0;
        
        for (let i = 3; i < png.data.length; i += 4) {
          if (png.data[i] < 20) {
            transparent++;
          } else {
            nonTrans++;
          }
        }
        
        console.log(`${file}: dimensions=${png.width}x${png.height}, total=${png.width*png.height}, transparent=${transparent}, non-trans=${nonTrans}`);
      } catch (e) {
        // Ignore
      }
    }
  });
}

scanAllPngs();
