const test = () =>
{
    var promise = new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("Data is enter");
            reject("Error Occured")
        }, 5000);
    })

    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((err)=>{
        console.log(err);
    })
}

test();