const fs = require('fs');

// Create a readable stream
const readerStream = fs.createReadStream('large_data.txt');

// Create a writable stream
const writerStream = fs.createWriteStream('copy_data.txt');

// Pipe the read and write operations
// This transfers data chunk by chunk (usually 64KB)
readerStream.pipe(writerStream);

readerStream.on('end', () => console.log("Streaming finished."));