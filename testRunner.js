// testRunner.js
const { spawn } = require('child_process');
const path = require('path');

const runTest = (filePath, done) => {
  const script = path.resolve(__dirname, filePath);
  const child = spawn('node', [script]);

  let output = '';

  child.stdout.on('data', (data) => {
    output += data.toString();
  });

  child.stderr.on('data', (data) => {
    output += data.toString();
  });

  child.on('close', (code) => {
    done(output, code);
  });
};

const compareOutputs = (output1, output2) => {
  return output1.includes('finished') && output2.includes('finished');
};

const testFiles = ['index.js', 'index-new.js'];

const runTests = () => {
  let results = [];

  const runNextTest = (index) => {
    if (index >= testFiles.length) {
      const [result1, result2] = results;
      const isSuccess = compareOutputs(result1.output, result2.output);
      console.log(`Test result: ${isSuccess ? 'PASSED' : 'FAILED'}`);
      return;
    }

    const file = testFiles[index];
    runTest(file, (output, code) => {
      results.push({ file, output, code });
      runNextTest(index + 1);
    });
  };

  runNextTest(0);
};

runTests();
