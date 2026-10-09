import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({root,server:{fs:{allow:[path.resolve(root,'../..')]}},build:{outDir:path.join(root,'dist'),emptyOutDir:true},base:'./'});
