function store(){
    var name = 'samir'
    sessionStorage.setItem("name",name)
    sessionStorage.setItem("id",101)

    var user  = {
        name : 'ram',
        id : 102
    }
    struser = JSON.stringify(user)
    sessionStorage.setItem("user",struser)
    alert("data stored")
}

function retrieve(){


    var name = sessionStorage.getItem("name")
    var id = sessionStorage.getItem("id")
    var user = sessionStorage.getItem("user")
    var objUser = JSON.parse(user)
    console.log(name)
    console.log(id)
    console.log(user)
    console.log(objUser)
    console.log(objUser.name)

}

function remove(){
    sessionStorage.removeItem("id")
    alert("id removed")
}

function cleardata(){
    sessionStorage.clear()
    alert("all data removed")
}