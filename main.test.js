const assert = require('assert');
const { execSync } = require('child_process');

describe('hello.js', () => {
  it('should return 0 for no arguments', () => {
    const output = execSync('node hello.js').toString().trim();
    assert.strictEqual(output, '0');
  });

  it('should return the sum of one number', () => {
    const output = execSync('node hello.js 1').toString().trim();
    assert.strictEqual(output, '1');
  });

  it('should return the sum of multiple numbers', () => {
    const output = execSync('node hello.js 1 2 3 4 5').toString().trim();
    assert.strictEqual(output, '15');
  });

  it('should ignore non-numeric arguments', () => {
    const output = execSync('node hello.js 1 abc 2 xyz 3').toString().trim();
    assert.strictEqual(output, '6');
  });
});

describe('package.json', () => {
  it('should define a hello1 script', () => {
    const output = execSync('npm run hello1').toString().trim();
    assert.strictEqual(output, '1');
  });

  it('should define a hello1_10 script', () => {
    const output = execSync('npm run hello1_10').toString().trim();
    assert.strictEqual(output, '55');
  });

  it('should define a hello_even script', () => {
    const output = execSync('npm run hello_even').toString().trim();
    assert.strictEqual(output, '110');
  });
});
