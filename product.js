//Selecting sidenav bar and menuicon
var sidenav =document.getElementById("sidenav")
var menuicon= document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function()
{
    sidenav.style.right=0
})
 closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
 })
 //Product Search functionality

var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();
    for (var count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h2").textContent.toUpperCase();
        if (productname.indexOf(enteredValue) > -1) {
            productlist[count].style.display = "block";
        } else {
            productlist[count].style.display = "none";
        }
    }
});





