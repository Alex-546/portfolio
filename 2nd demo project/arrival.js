let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, category){

    cart.push({name, price, category});

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

    openCart();
}

function updateCart(){

    let items = document.getElementById("cart-items");

    let total = 0;

    items.innerHTML = "";

    cart.forEach(item => {

        total += item.price;

        items.innerHTML += `
            <div class="item">
                <div>
                    <p>${item.name}</p>
                    <small>${item.category}</small>
                </div>
                <p>₦${item.price.toLocaleString()}</p>
            </div>
        `;
    });

    document.getElementById("cart-total").innerText =
    total.toLocaleString();
}

function openCart(){
    document.getElementById("cart").style.right = "0";
}

function closeCart(){
    document.getElementById("cart").style.right = "-400px";
}

function checkout(){
    window.location.href = "checkout.html";
}