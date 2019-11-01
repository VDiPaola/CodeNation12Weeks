function timeout(seconds){
    setTimeout( () => {
        console.log("running after timeout")
    }, seconds * 1000);
}

async function asyncTest(seconds){
    await timeout(seconds);
    console.log("end of async function");
}


asyncTest(2);