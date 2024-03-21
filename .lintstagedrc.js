const path = require('path');
const rootDir = __dirname;

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{ts,tsx}': [`tsc-files --noEmit --project -p ${rootDir}`, 'prettier -w'],
};
