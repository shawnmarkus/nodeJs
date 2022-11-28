const os = require("os"); //it is a constant(preferable for os module)
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.arch()); //gives you the os config type whether x64 or not?
console.log(os.cpus()); // it reflect the info about the cpu core
