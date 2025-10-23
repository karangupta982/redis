const client = require('./client');


async function listinit(){
    try{
        // await client.set("msg:4", "Hello Redis from Node.js!"); 
        // const result = await client.get('user:3');
        await client.expire('msg:4', 20);
        const result = await client.get('msg:4');
        console.log("result:", result);
    }
    catch(err){
        console.log("error: ",err);
    }
    finally{
        client.quit();
    }

}
listinit();