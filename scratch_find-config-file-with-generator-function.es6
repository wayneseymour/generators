const {resolve, dirname} = require('path');
const {readdir, stat} = require('fs').promises;

const isDir = async x => (await stat(x)).isDirectory();
const isConfig = x => /.*config\.(ts|js)/.test(x)
const directoryOf = x => dirname(x);

const testFile = '/Users/tre/main/test/functional/apps/context/classic/_filters.ts';

const config = await findConfigFile(testFile)
console.log(`\n### config: \n\t${config}`);

async function* readDir (directory) {
  for (const x of await readdir(directory)) yield x;
}

async function findConfigFile(filePath) {
  if (count === 4) return;
  count++
  const directory = directoryOf(filePath)
  for await (const x of readDir(directory))
    if (isConfig(x)) return resolve(directory, x);


  return await findConfigFile(directory)
}

// for await (const x of findConfigFile(directory))
//   console.log(`\n### x: \n\t${x}`);
//
// async function* findConfigFile(directory) {
//   const xs = await readdir(directory);
//
//   for (const x of xs) {
//     const resolved = resolve(directory, x);
//     if (isConfig(resolved)) yield resolved
//     if (await isDir(resolved)) yield* findConfigFile(resolved)
//   }
// }
