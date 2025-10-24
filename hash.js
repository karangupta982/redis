const client = require('./client');

async function hashinit(){
    try{
        await client.del('user:1');
        
        const res = await client.hset('user:1', 
            {
                name:'Tanish',
                age:24,
                city: 'Delhi'
            }
        );
        // console.log(res);
        
        await client.hset('user:1','profession','Upcoming IAS');
        const user = await client.hgetall('user:1');
        // console.log('user:',user);
        await client.hset('user:1','age',26);
        const updatedUser = await client.hgetall('user:1');
        // console.log('updated User:', updatedUser);

        const res1 = await client.hget('user:1','profession');
        // console.log("prefession:",res1);

        const res2 = await client.hmget('user:1',['name','age','profession']);
        console.log(res2);

        const res3 = await client.hincrby('user:1','age',10);
        console.log("res3:", res3);


    }
    catch(err){
        console.log("error: ",err);
    }
    finally{
        client.quit();
    }

}

hashinit();