const {resolve} = require('path');
const {readdir, stat} = require('fs').promises;

async function* getFiles(rootPath) {
  const fileNames = await readdir(rootPath);
  for (const fileName of fileNames) {
    const path = resolve(rootPath, fileName);
    if ((await stat(path)).isDirectory()) {
      yield* getFiles(path);
    } else {
      yield path;
    }
  }
}

// (async () => {
//   for await (const x of getFiles('.')) console.log(x);
// })
for await (const x of getFiles('/Users/tre/administrivia')) {
  console.log(`\n### x: \n\t${x}`);
}
