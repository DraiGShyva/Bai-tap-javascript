const fs = require('fs');

// write file sync
fs.writeFileSync('./Bai-tap/Buoi_8/data-sync.txt', 'Hello, I am writing to a file');

// read file sync
data = fs.readFileSync('./Bai-tap/Buoi_8/data-sync.txt', 'utf8');
console.log(data);

// write file async
fs.writeFile('./Bai-tap/Buoi_8/data-async.txt', 'Hello, I am writing to a file', (err) => {
    if (err) throw err;
    console.log('Write file async success');
});

// read file async
fs.readFile('./Bai-tap/Buoi_8/data-async.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});