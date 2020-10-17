self.addEventListener('push', () => {
    self.ServiceWorkerRegistration.sendNotification('test message title', {

    });
});