const fs = require('fs');

module.exports = async ({ internalTime = 1000, maxTimes = 180, filePath = '', matchReg = null }) => {
    let count = 1;

    if (!filePath) {
        return { success: false, reason: '"filePath" should be passed in as string', count };
    }

    if (!matchReg) {
        return { success: false, reason: '"matchReg" should be passed in as RegExp', count };
    }

    const runInternally = () => {
        return new Promise((resolve) => {
            let timer = setInterval(() => {
                if (count >= maxTimes) {
                    clearInterval(timer);
                    resolve({ success: false, reason: 'timeout', count });
                    return;
                }

                if (fs.existsSync(filePath)) {
                    const curContent = fs.readFileSync(filePath, 'utf8');

                    if (matchReg.test(curContent)) {
                        resolve({ success: true, count, content: curContent });
                        clearInterval(timer);
                    }   
                }

                count++;
            }, internalTime);
        });
    };

    return await runInternally();
};