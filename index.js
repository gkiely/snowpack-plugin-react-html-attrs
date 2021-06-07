const fs = require('fs');
const transform = require('./transform');

module.exports = function (snowpackConfig, options) {
  console.log(process.env);

  // Update @types/react to allow 'class' if file is present
  const filePath = './node_modules/@types/react/index.d.ts';
  if (fs.existsSync(filePath)){
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    if(!/class\?: string;/.test(fileContents)){
      const contents = fileContents.replace(/(\s+)(className\?: string;)/g, '$1class?: string;$1$2');
      fs.writeFileSync('./node_modules/@types/react/index.d.ts', contents);
    }
  }

  return {
    name: 'snowpack-plugin-react-html-attrs',
    async transform({id, contents, isDev, fileExt}) {
      const extensions = options.extensions || ['.js', '.jsx', '.ts', '.tsx'];
      if (!extensions.includes(fileExt) || !contents) return;
      return transform(contents);
    }
  };
};
