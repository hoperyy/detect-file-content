const detect = require('./index');
const fse = require('fs-extra');
const fs = require('fs');
const path = require('path');

(async () => {
    const testFile = path.join(__dirname, 'test-file');

    // create and write file content after 10 seconds
    setTimeout(() => {
        fse.ensureFileSync(testFile);
        fs.writeFileSync(testFile, 'hello world');
    }, 10 * 1000);

    const detectResult = await detect({ filePath: testFile, matchReg: /hello2/, maxTimes: 12 });

    console.log(detectResult);
})();
