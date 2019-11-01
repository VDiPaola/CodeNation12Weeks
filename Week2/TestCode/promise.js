const promiseTest = (a) =>{
    return new Promise((resolve, reject) =>{
        if (a) {
            console.log("resolving");
            resolve();
        }else{
            reject("rejecting");
        }
    });
}

const afterPromise = () => {
    console.log("printing after promise resolve")
}

promiseTest(false).then(afterPromise).catch((e) =>{
    console.log(e);
})
