// Testing: https://regex101.com/r/B5oRTv/1/
const transform = (contents) => {
  const reg = /(React\.createElement\([^)]+?)(class:)/g;
  return contents.replace(reg, '$1className:')
}

module.exports = transform;