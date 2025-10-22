# Redis Practice Repository

> Personal repository for practicing Redis concepts, commands, and Node.js integration through hands-on examples.

## Purpose

This repository documents my learning journey with **Redis**, focusing on its data structures, commands, and real-world use in backend development. The goal is to gain a strong practical understanding of how Redis works as an **in-memory data store**, **cache**, and **message broker**.

---

## Covered Concepts

This repository includes examples and notes for the following Redis topics:

* **Installation & Setup**

  * Running Redis via Docker
  * Using Redis CLI and RedisInsight

* **Core Data Types**

  * Strings
  * Lists
  * Sets
  * Hashes
  * Sorted Sets (ZSETs)
  * Streams *(planned)*
  * Geospatial *(planned)*

* **Key Operations**

  * `SET`, `GET`, `DEL`, `EXPIRE`, `SETEX`
  * `LPUSH`, `RPUSH`, `LPOP`, `LRANGE`
  * `SADD`, `SREM`, `SMEMBERS`
  * `HSET`, `HGET`, `HGETALL`
  * `ZADD`, `ZRANGE`, `ZREVRANGE`

* **Advanced Concepts**

  * Pub/Sub mechanism
  * Expiration & TTL
  * Key naming conventions
  * Basic caching for Node.js servers
  * Performance optimization with caching

---

## Project Structure

```
redis-practice/
│
├── client.js             # Redis connection setup using ioredis
├── string.js             # Practice with String commands
├── list.js               # Working with Redis Lists
├── set.js                # Working with Redis Sets
├── hash.js               # Working with Redis Hashes
├── sortedSet.js          # Example for Sorted Sets (ZSET)
├── pubsub/
│   ├── publisher.js      # Publisher script
│   └── subscriber.js     # Subscriber script
├── cacheExample.js       # Simple caching example using Redis and Node.js
├── package.json
├── .gitignore
└── README.md
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/redis-practice.git
cd redis-practice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Redis via Docker

```bash
docker run -d --name redis -p 6379:6379 redis
```

### 4. Test Redis Connection

```bash
node client.js
```

### 5. Try Examples

Run any of the practice scripts:

```bash
node string.js
node list.js
node set.js
node hash.js
node sortedSet.js
node cacheExample.js
```

---

## Example: Basic Redis Caching

```js
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
```

---

## Future Additions

* Redis Streams
* Transactions and Pipelines
* Redis Cluster basics
* Real-world caching middleware example

---

## Author

Created and maintained by **Karan Gupta**
Learning and practicing Redis for backend and DevOps skill enhancement.
