function timeout(seconds){
    return new Promise((resolve, reject) =>{
        setTimeout( () => {
            console.log("running after timeout")
            resolve();
        }, seconds * 1000);
        console.log("after timeout")
    });
    console.log("after promise")
}

async function asyncTest(seconds){
    await timeout(seconds);
    console.log("end of async function");
}

let secondsToWait = 2;
asyncTest(secondsToWait);