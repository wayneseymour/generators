const { resolve, dirname } = require('path');
const { readdir } = require('fs').promises;

async function* directoryDrip(directory) {
  for (const x of await readdir(directory)) yield x;
}

(async function(){
  for await (const entry of directoryDrip('/Users/tre/main/test/functional/apps/context/classic'))
    console.log(`\n### entry: \n\t${entry}`);
})();

// (async function(){
//   const itr = await directoryDrip('/Users/tre/main/test/functional/apps/context/classic')
//   console.log(await itr.next())
//   console.log(await itr.next())
//   console.log(await itr.next())
// })();
