const client = require('./client');
async function sortedSetInit(){
    try{
        await client.del('scores');
        await client.zadd('scores', 100, 'Tanish', 130, 'Sharad', 90, 'Priyanshu');
        const allScores = await client.zrange('scores', 0, -1, 'WITHSCORES')
        console.log('All Score', allScores);

        const res1 = await client.zadd('racer_Scores', {
            score:10, value: 'Lokesh'
        });
        console.log("res1:", res1);

        const res2 = await client.zadd('racer_scores',{
            score:50, value:'Thor'
        });
        console.log("res2:",res2);
    }
    catch(err){
        console.log("error:",err);
    }
    finally{
        client.quit();
    }

}

sortedSetInit();