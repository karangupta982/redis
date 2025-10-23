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
        console.log(res);
        
        await client.hset('user:1','Profession','Upcoming IAS');
        const user = await client.hgetall('user:1');
        console.log('user:',user);
        await client.hset('user:1','age',26);
        const updatedUser = await client.hgetall('user:1');
        console.log('updated User:', updatedUser);

        
    }
    catch(err){
        console.log("error: ",err);
    }
    finally{
        client.quit();
    }

}

hashinit();