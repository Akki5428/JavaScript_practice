demo = (x) =>{
    var promise = new Promise((res,rej)=>{
        setTimeout(() => {
            if(x == 1)
            {
                res("Sucsess")
            }
            if(x==0)
            {
                rej("Reject")
            }
        }, 3000);
    })

    promise.then((data)=>{
        console.log(data)
        document.getElementById("print").style.backgroundColor = "red";
    })
    promise.catch((err)=>{
        console.log(err)
        document.getElementById("print").style.backgroundColor = "Green";
    })
}

