import { classify } from './lib/classifier';

async function testEzakProfile(name: string, url: string) {
  try {
    const res = await fetch(url + '?type=all&state=all');
    if (!res.ok) { console.log(name, 'Failed:', res.status); return; }
    const html = await res.text();
    
    const linkRegex = /<a href="(contract_display_\d+\.html)">\s*([^<]+)\s*<\/a>/g;
    let m;
    let total = 0;
    let matched = 0;
    
    while ((m = linkRegex.exec(html)) !== null) {
      total++;
      const title = m[2].trim();
      const c = classify(title);
      if (c.disciplina) {
        matched++;
        console.log(`  [${c.disciplina}] ${title}`);
      }
    }
    console.log(`${name}: Total=${total}, Matched=${matched}\n`);
  } catch(e) {
    console.log(name, 'ERR');
  }
}

async function main() {
  await testEzakProfile('SZ', 'https://zakazky.spravazeleznic.cz/contract_index.html');
  await testEzakProfile('Brno-all', 'https://ezak.brno.cz/contract_index.html');
}
main();
