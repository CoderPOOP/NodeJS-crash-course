// Importing FS Module
const fs = require('fs');

// Basic Syntax to read a File with "fs.readFile" function
fs.readFile('file.txt', 'utf8', (error, data) => {
    // If null, then there is no error, Congratulations! 
    // console.log(error)
    // console.log(data)
})

// Basic Syntax to read a File with "fs.readFileSync" function
const file1 = fs.readFileSync('file.txt', 'utf8', (error, data) => {
    // If null, then there is no error, Congratulations! 
    // console.log(error)
    // console.log(data)
})

// console.log(file1)
// console.log(file1.toString())
// console.log("Finished reading file.")

// Basic Syntax to write a File with "fs.writeFile" function
fs.writeFile('file2.txt', 'Example Data', () => {
    // console.log("Written to the File")
})

// Basic Syntax to write a File with "fs.writeFileSync" function
fs.writeFileSync('file2.txt', 'Example Data 2.0', () => {
    // console.log("Written to the File")
})
// console.log("Finished writing File")