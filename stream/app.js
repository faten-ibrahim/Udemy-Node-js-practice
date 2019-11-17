var fs = require('fs');

var content = fs.readFileSync(__dirname + '/file.txt', 'utf8');
// console.log(content);

fs.readFile(__dirname + '/file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    // console.log(data);
});

var readable=fs.createReadStream(__dirname+'/file.txt',{encoding:'utf8',highWaterMark:4*1024});// chunk size 4kb through stream
var writable=fs.createWriteStream(__dirname+'/writableFile.txt',{encoding:'utf8',highWaterMark:4*1024});
// readable.on('data',function(chunck) {
//     writable.write(chunck);
//     console.log(chunck);
//     // console.log(chunck.length);
    
// }); 
// we can use pipe to write data from readable stream and move it to writable stream 
// (the same functionality) of hashed code can be done by the following line

readable.pipe(writable);
