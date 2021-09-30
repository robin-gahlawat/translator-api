
const {spawn} = require('child_process');

const handleTranslation = (message, toLanguage, callback) =>{
    childPython = spawn('python', ['translate.py', message, toLanguage]);

    childPython.stdout.on('data', (data)=>{
        callback(undefined, data);
    })

    childPython.stderr.on('data', (data)=>{
        callback('error occurred', undefined);
    })

    childPython.on('close', (code)=>{
    })
}


module.exports = handleTranslation;

