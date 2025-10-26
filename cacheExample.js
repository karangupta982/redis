const client = require('./client');
const axios = require('axios');

async function fetchUser() {
  const cacheKey = 'user:1';
  const cached = await client.get(cacheKey);

  if (cached) {
    console.log('From Cache:', JSON.parse(cached));
    return;
  }

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1');
  await client.setex(cacheKey, 30, JSON.stringify(data));
  console.log('Fetched from API:', data);
}

fetchUser();
