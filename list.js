const client = require('./client');

async function listinit(){
    try{
        await client.del('fruits');
        await client.lpush('fruits', 'apple');
        await client.lpush('fruits', 'banana');
        await client.rpush('fruits', 'kiwi')

        let items = await client.lrange('fruits',0,1);
        console.log("Fruits:", items)
        items = await client.lrange('fruits',0,-1); // get all items
        console.log("Fruits:", items)
        const popped = await client.lpop('fruits');
        console.log("Popper itemL", popped);
        items = await client.lrange('fruits',0,-1);

        await client.ltrim('fruits',0,1)
        items = await client.lrange('fruits',0,-1);
        console.log("Fruits after ltrim:", items);
    }
    catch(err){
        console.log("error: ",err);
    }
    finally{
        client.quit();
    }
}

listinit();