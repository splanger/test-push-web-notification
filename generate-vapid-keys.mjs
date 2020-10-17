import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import push from 'web-push';
// var push = require('web-push');

let vapidKeys = push.generateVAPIDKeys();

console.log("Hello world!");
console.log(vapidKeys);