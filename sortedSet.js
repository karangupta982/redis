const client = require('./client');

async function sortedSetInit() {
  try {
    await client.del('scores');

    // Add multiple members using legacy-style arguments
    await client.zadd('scores', [
      { score: 100, value: 'Tanish' },
      { score: 130, value: 'Sharad' },
      { score: 90, value: 'Priyanshu' }
    ]);

    // Get all members with scores
    const allScores = await client.zRangeWithScores('scores', 0, -1);
    console.log('All Scores:', allScores);

    // Add new members
    const res1 = await client.zadd('scores', [{ score: 10, value: 'Lokesh' }]);
    console.log('res1:', res1);

    const res2 = await client.zadd('scores', [{ score: 50, value: 'Thor' }]);
    console.log('res2:', res2);

    const updatedScores = await client.zRangeWithScores('scores', 0, -1);
    console.log('Updated Scores:', updatedScores);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.quit();
  }
}

sortedSetInit();
