import fs from 'fs';
import axios from 'axios';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  try {
    const { data } = await axios.get('https://dummyjson.com/products?limit=194');
    
    // Generate a JS file with the products array
    const jsContent = `const products = ${JSON.stringify(data.products, null, 2)};\n\nexport default products;`;
    
    fs.writeFileSync(`${__dirname}/products.js`, jsContent);
    console.log('✅ All products saved to products.js!');
  } catch (error) {
    console.error('❌ Failed to fetch products:', error.message);
  }
})();