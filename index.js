const fs = require('fs');
module.exports = function (snowpackConfig, options) {
  // Update @types/react to allow 'class', if file is present
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
      return contents.replace(/(React\.createElement\([^)]+)(class)(:\s)/, '$1className$3')
    }
  };
};
