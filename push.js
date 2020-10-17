import push from 'web-push';
// var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGZbRJZmo18JPnFckrGPNW3cPc3EZgPFPGw5UwLDWTHEZoLTK9JA7FO2XPscbDVpPAo_3vvgNW2ytMjchhMoMrg',
    privateKey: 'bzev4o9HP-Wdz51eXLTle7PssFselBOPekV-4gjw-vk'
}

push.setVapidDetails('mailto:yuri.kroz@outlook.com', vapidKeys.publicKey ,vapidKeys.privateKey)

// List of subscribers. It is the returned value from calling "sw.pushManager.subscribe(...)" on the client side. 
let sub = {};

push.sendNotification(sub, 'test-message')