// ADD TO CART
function addToCart(name, price){
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let item = cart.find(i => i.name === name);

if(item){
item.quantity += 1;
}else{
cart.push({name, price, quantity:1});
}

localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart");
}


// LOAD CART
function loadCart(){
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let box = document.getElementById("cartBox");

if(!box) return;

let total = 0;
box.innerHTML = "";

cart.forEach((item, index) => {

total += item.price * item.quantity;

box.innerHTML += `
<div class="cart-item">
<div>
<b>${item.name}</b><br>
₹${item.price} x ${item.quantity}
</div>

<div>
<button onclick="decrease(${index})">-</button>
<span>${item.quantity}</span>
<button onclick="increase(${index})">+</button>
<button onclick="removeItem(${index})">❌</button>
</div>
</div>
`;
});

document.getElementById("total").innerText = "Total: ₹" + total;
}


// INCREASE
function increase(index){
let cart = JSON.parse(localStorage.getItem("cart"));
cart[index].quantity++;
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}


// DECREASE
function decrease(index){
let cart = JSON.parse(localStorage.getItem("cart"));

if(cart[index].quantity > 1){
cart[index].quantity--;
}else{
cart.splice(index,1);
}

localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}


// REMOVE
function removeItem(index){
let cart = JSON.parse(localStorage.getItem("cart"));
cart.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cart));
loadCart();
}


// ✅ FINAL CONFIRM ORDER FIX
function confirmOrder(){
localStorage.removeItem("cart");
window.location.href = "confirm.html";
}