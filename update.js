const fs = require('fs'); const p = 'app/page.tsx'; let c = fs.readFileSync(p, 'utf8'); c = c.replace(/Rakovica', icon: '🏡', businessCount: 11 },\r?\n  { name: 'Palilula'/g, \
Rakovica, icon: 🏡, businessCount: 11 },\n  { name: Savski
venac, icon: 🌳, businessCount: 14 },\n  { name: Palilula\); fs.writeFileSync(p, c, 'utf8'); console.log('Updated!');
