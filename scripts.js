window.addEventListener('load', InitalizePage);

var amtPizza = 10;
var aryTypePizzas = ["Pepperoni", "Sausage", "Burger", "Supreme", "Taco"];
var price = 12.99;


function InitalizePage()
{
    CreateAmtPizzas();
    CreateTypePizzas();
    document.getElementById("orderForm").addEventListener("submit", CheckForm);
}

function CreateAmtPizzas()
{
    for(i=1; i <= amtPizza; i++)
    {
        var optionEl = document.createElement('option');
        optionEl.innerHTML=i; 
        optionEl.value=i;
        document.getElementById("amtPizzas").appendChild(optionEl);
    }
}

function CreateTypePizzas()
{
    for(i=0; i < aryTypePizzas.length; i++)
    {
        var optionEl = document.createElement('option');
        optionEl.innerHTML=aryTypePizzas[i];
        optionEl.value=aryTypePizzas[i];  
        document.getElementById("typePizzas").appendChild(optionEl);
    }
}

function CheckForm(e){
    isValid = true;
    frm = e.target;
    regx = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    
    if(frm.firstName.value == ""){
        isValid = false;
        frm.firstName.focus();
        frm.firstName.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgName");
        error.style.display = "inline";
        error.innerHTML = "Please enter your first name";
        e.preventDefault();
    }
    else{
        frm.firstName.style.backgroundColor = "#ffffff";
        document.getElementById("errorMgName").style.display = "none";
    }

    if(frm.lastName.value == ""){
        isValid = false;
        frm.lastName.focus();
        frm.lastName.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgName");
        error.style.display = "inline";
        error.innerHTML = "Please enter your last name";
        e.preventDefault();
    }
    else{
        frm.lastName.style.backgroundColor = "#ffffff";
        document.getElementById("errorMgName").style.display = "none";
    }

    if(frm.firstName.value == "" && frm.lastName.value == ""){
        isValid = false;
        frm.firstName.focus();
        frm.firstName.style.backgroundColor = "#ffccff";
        frm.lastName.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgName");
        error.style.display = "inline";
        error.innerHTML = "Please enter your first name and last name";
        e.preventDefault();
    }
    else if(frm.firstName.value == ""){
        isValid = false;
        frm.firstName.focus();
        frm.firstName.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgName");
        error.style.display = "inline";
        error.innerHTML = "Please enter your first name";
        e.preventDefault();

        frm.lastName.style.backgroundColor = "#ffffff";
    }
    else if(frm.lastName.value == ""){
        isValid = false;
        frm.lastName.focus();
        frm.lastName.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgName");
        error.style.display = "inline";
        error.innerHTML = "Please enter your last name";
        e.preventDefault();

        frm.firstName.style.backgroundColor = "#ffffff";
    }
    else{
        frm.firstName.style.backgroundColor = "#ffffff";
        frm.lastName.style.backgroundColor = "#ffffff";
        document.getElementById("errorMgName").style.display = "none";
    }

    if((frm.firstName.value.length + frm.lastName.value.length) < 6 && frm.firstName.value.length > 0 && frm.firstName.value.length > 0){
        isValid = false;
        frm.firstName.focus();
        frm.firstName.style.backgroundColor = "#ffccff";
        frm.lastName.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgName");
        error.style.display = "inline";
        error.innerHTML = "First and last name must have a total of 6 letters";
        e.preventDefault();
    }
    else if(isValid)
    {
        frm.lastName.style.backgroundColor = "#ffffff";
        frm.lastName.style.backgroundColor = "#ffffff";
    }
    
    
    if(!regx.test(frm.inputPhoneNum.value)){
        isValid = false;
        frm.inputPhoneNum.focus();
        frm.inputPhoneNum.style.backgroundColor = "#ffccff";
        var error = document.getElementById("errorMgPhone");
        error.style.display = "inline";
        error.innerHTML = "Please input a VALID phone number in the format of 000-000-0000";
        e.preventDefault();
    }
    else{
        frm.inputPhoneNum.style.backgroundColor = "#ffffff";
        document.getElementById("errorMgPhone").style.display = "none";
    }

    if(isValid){
        document.getElementById("errorMgName").style.display = "none";
    }
}

//function OrderSubmit()
//{
//    var subTotal = document.getElementById("amtPizzas").value * 9.49;
//    var taxes = subTotal * 0.076;
//
//    alert("Customer Name: " + document.getElementById("firstName").value+ " " + document.getElementById("lastName").value + " \n"
//    + "Phone Number: " + document.getElementById("inputPhoneNum").value + "\n"
//    + "Amount of Pizzas ordered: " + document.getElementById("amtPizzas").value + "\n"
//   + "Type of Pizza ordered: " + document.getElementById("typePizzas").value + "\n"
//    + "------Total Price------\n"
//    + "Sub Total: $" + subTotal + "\n"
//    + "Taxes: $" + taxes + "\n"
//    + "Total: $" + (subTotal + taxes) + "\n");
//}
