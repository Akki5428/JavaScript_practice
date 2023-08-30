const size = {
    "small" : 100,
    "medium" : 200,
    "large" : 300,
}

const crust = {
    "thin" : 100,
    "thick" : 200,
    "stuffed" : 300,
}

const sause = {
    "tomato" : 0, 
    "bbq" : 100,
    "spicy" : 200,
}

const order = (event)=>{
    event.preventDefault();
    var size = document.getElementById("size").value;
    console.log(size);
    var crust = document.getElementById("crust").value;
    console.log(crust);
    var sause = document.getElementById("sause").value;
    console.log(sause);
    var qty = document.getElementById("qty").value;
    console.log(qty);


    var orderData = {
        size : size,
        crust : crust,
        sause : sause,
        qty : qty,
    }

    bill(orderData)

    var orderstring = JSON.stringify(orderData);
    console.log(orderstring)
    document.getElementById("box").innerHTML = orderstring;
}

var total= 0;
const bill = (orderData) => {
    if(orderData.size == "small")
    {
        total = total + size.small;
    }
    else if(orderData.size =="medium"){
        total = total + size.medium;
    }
    else if(orderData.size =="large"){
        total = total + size.large;
    }
    if(orderData.crust =="thin"){
        total = total + crust.thin;
    }
    else if(orderData.crust =="thick"){
        total = total + crust.thick;
    }
    else if(orderData.crust =="stuffed"){
        total = total + crust.stuffed;
    }
    if(orderData.sauce =="tomato"){
        total = total + sauce.tomato;
    }
    else if(orderData.sauce =="bbq"){
        total = total + sauce.bbq;
    }
    else if(orderData.sauce =="spicy"){
        total = total + sauce.spicy;
    }
    
    total = total * orderData.qty;
    console.log(total);
    console.log(orderData)
}

const placeorder = () =>{
    var flag = confirm("Are you sure you want to place this order?");
    if(flag==true){
        alert("Your order has been placed successfully"+total);

            document.getElementById("psize").innerHTML = orderData.size;
            document.getElementById("pcrust").innerHTML = orderData.crust;
            document.getElementById("psause").innerHTML = orderData.sauce;
            document.getElementById("pqty").innerHTML = orderData.qty;
            document.getElementById("pkm").innerHTML = orderData.km;
            document.getElementById("ptotal").innerHTML = total;
    }
    else{
        alert("Your order has been cancelled");
    }
} 