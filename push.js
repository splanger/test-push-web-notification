import push from 'web-push';
// var push = require('web-push');

let vapidKeys = {
    publicKey: 'BGZbRJZmo18JPnFckrGPNW3cPc3EZgPFPGw5UwLDWTHEZoLTK9JA7FO2XPscbDVpPAo_3vvgNW2ytMjchhMoMrg',
    privateKey: 'bzev4o9HP-Wdz51eXLTle7PssFselBOPekV-4gjw-vk'
}

push.setVapidDetails('mailto:yuri.kroz@outlook.com', vapidKeys.publicKey ,vapidKeys.privateKey)

// List of subscribers. It is the returned value from calling "sw.pushManager.subscribe(...)" on the client side. 
let sub = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/fLU-Z4IGrnU:APA91bEFyNtoMdKRDPF2sJa1FBIVJgv6AS_u3GgiFwgUmw2aEDHtSY8VyQdEtoq6NiC4EwWAFLrd13sE87TdI3Ga0VRMdszYnjGurkxzlbCdIOa00Y4txqH_g6TxifpBmJ7nQtghm0mf',
    expirationTime: null,
    keys: {
        p256dh: 'BGzOQ88tMXbzpS_bZPIeIeUwwXRAHBNGjRrpriQk6YyRVPpOZjEGBNqfcFU3l8cY-_HGuUwU1pPpsAkwS09T_vI',
        auth: 'Z7nPqr5sAqxf3Eme_Mo6PQ'
    }
};

push.sendNotification(sub, 'test-message')