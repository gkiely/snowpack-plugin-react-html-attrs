const transform = require('./transform');
const tests = require('./tests');

describe('tests', () => {
  it
  .each(tests)('test', (input, output) => {
    expect(transform(input)).toBe(output);
  })
})