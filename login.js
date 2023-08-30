function store(){
   user = {
    id : 120,
    name : 'Akshat',
    email :"thakkarakshat5428@gmail.com",
    password : "akt123"
   } 
   if(document.getElementById("pass").value == user.password && document.getElementById("emai").value == user.email){
        alert("User Found")
        strdata = JSON.stringify(user)
        localStorage.setItem("user",strdata)
   }
   else{
        alert("User not Found")
   }

}

function check(event){
    event.preventDefault()
    nuser = JSON.parse(localStorage.getItem("user"))
    if(document.getElementById("identi").value == nuser.id)
    {
        alert("User Found")
        nice = localStorage.getItem("user")
        console.log(nice)
    }
    else{
        alert("User not Found")
    }
    return false;
}