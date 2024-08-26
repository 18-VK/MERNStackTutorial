var message  = "Hey, Global!";
console.log(global.message); // undefined as message is not the part of global object

global.myVariable = "Hello, World!"; // this variable is accessible to other file in this node application
console.log(global.myVariable); // Outputs: Hello, World!

const objPath = require('path');
// Function
console.log(__filename);
console.log(objPath.basename(__filename));
console.log(objPath.basename(__filename,'.js'));

console.log(objPath.dirname(__filename));

console.log(objPath.extname(__filename));

console.log(objPath.join(__dirname,objPath.basename(__filename)));

const path = require('path');

const filePath = '/user/local/bin/file.txt';

console.log('Base name:', path.basename(filePath)); // Outputs: file.txt
console.log('Directory name:', path.dirname(filePath)); // Outputs: /user/local/bin
console.log('Extension:', path.extname(filePath)); // Outputs: .txt
console.log('Is absolute:', path.isAbsolute(filePath)); // Outputs: true
console.log('Normalized:', path.normalize('/user/local/../bin/file.txt')); // Outputs: /user/bin/file.txt
console.log('Joined path:', path.join('/user', 'local', 'bin', 'file.txt')); // Outputs: /user/local/bin/file.txt
console.log('Resolved path:', path.resolve('user', 'local', 'bin', 'file.txt'));
// Outputs an absolute path depending on the current working directory

const os = require('os');

console.log('OS Architecture:', os.arch());
console.log('OS Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('System Uptime (seconds):', os.uptime());
console.log('Host Name:', os.hostname());
console.log('Home Directory:', os.homedir());
console.log('Temp Directory:', os.tmpdir());
console.log('Free Memory (bytes):', os.freemem());
console.log('Total Memory (bytes):', os.totalmem());
console.log('CPU Info:', os.cpus());
console.log('Network Interfaces:', os.networkInterfaces());
