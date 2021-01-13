import * as os from 'os';

const free = os.freemem();
const total = os.totalmem();
const used = total - free;

console.log('used', used / 1024 / 1024, "MB");
console.log('free', free / 1024 / 1024, "MB");
console.log('total', total / 1024 / 1024, "MB");
