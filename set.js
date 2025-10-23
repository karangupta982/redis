const client = require('./client');

async function setinit(){
    try{

        await client.del('students');
        await client.sadd('students','Tanish', 'Sharad', 'Priyanshu');
        let members = await client.smembers('students');
        console.log("members: ", members);

        await client.sadd('students', 'loki');
        const afterRemove = await client.srem('students','loki');
        console.log('after srem', afterRemove);
        const size = await client.scard('students');
        console.log("size",size);

        // const finalMembers = await client.spop('students')
        // console.log("final members", finalMembers);

        members = await client.smembers('students');
        console.log("members: ", members);
        isExist = await client.sismember('students','Tanish');
        console.log("isExist:", isExist);

        members = await client.srandmember('students');
        console.log("random member:", members);
    }
    catch(err){
        console.log("error: ",err);
    }
    finally{
        client.quit();
    }

}

setinit();