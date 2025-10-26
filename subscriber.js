const Redis = require('ioredis');
const subscriber = new Redis();

subscriber.subscribe('notifications', (err, count) => {
  if (err) throw err;
  console.log(`Subscribed to ${count} channel(s).`);
});

subscriber.on('message', (channel, message) => {
  console.log(`Received from ${channel}: ${message}`);
});
