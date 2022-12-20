const util = require('util');
const fs = require('fs')

// Reading the file data
const readFileData = util.promisify(fs.readFile)

// Writing data to file
const writeFileData = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        err ? console.error(err) : console.info(`\nData Written to ${destination}`)
    );

// Reading and appending the file data
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, note) =>{
        const parsedData = JSON.parse(note);
        parsedData.push(content);
        writeFileData(file, parsedData)
    });
};
// Exporting functions 
module.exports = { readAndAppend, writeFileData, readFileData}