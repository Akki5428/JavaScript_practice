const e = (event) => {
    event.preventDefault();
    var age  = document.getElementById("age").value;

    try{
        if(age<18)
        {
            throw new Error("Your are not eligible for vote")
        }
        else{
            console.log("Your Eligible for war")
        }
    }catch(err)
    {
        console.error(err)
    }
    finally{
        console.log("Final block")
    }
}