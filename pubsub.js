const client = require('./client');

async function publishMessage() {
  setInterval(() => {
    const message = `Hello at ${new Date().toISOString()}`;
    client.publish('notifications', message);
    console.log('Published:', message);
  }, 3000);
}

publishMessage();
