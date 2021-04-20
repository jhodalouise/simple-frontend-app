const productList = [
    {
        name: "SIGNATURE BUBBLE TEA",
        description: "Our signature CoCo milk tea with sweet chewy tapioca.",
        calories: "414 - 654 calories",
        price: "PHP 90.00",
        picture: "./products/signaturebubbletea.png"
    },
    {
        name: "CLASSIC MILK TEA",
        description: "Made with premium black tea, brown sugar and non dairy creamer.",
        calories: "249 - 517 calories",
        price: "PHP 85.00",
        picture: "./products/classicmilktea.png"
    },
    {
        name: "LAVA PEARL MILK TEA",
        description: "Black sugar coated tapioca with milk tea.",
        calories: "472 calories",
        price: "PHP 100.00",
        picture: "./products/lavapearlmilktea.png"
    },
    {
        name: "LAVA PEARL JASMINE MILK TEA",
        description: "Black sugar coated tapioca with Jasmine milk tea.",
        calories: "546 calories",
        price: "PHP 130.00",
        picture: "./products/lavapearljasminemilktea.png"
    },
    {
        name: "TARO MILK TEA",
        description: "Made from the purple Taro root. Caffeine-free.",
        calories: "305 - 512 calories",
        price: "from PHP 100.00",
        picture: "./products/taromilktea.png"
    },
    {
        name: "JASMINE MILK TEA",
        description: "Made from our traditional Jasmine green tea.",
        calories: "270 - 535 calories",
        price: "PHP 85.00",
        picture: "./products/jasminemilktea.png"
    },
    {
        name: "CARAMEL MILK TEA",
        description: "Our milk tea infused with toasty caramel. Made with non dairy creamer.",
        calories: "315 - 605 calories",
        price: "PHP 110.00",
        picture: "./products/caramelmilktea.png"
    },
    {
        name: "VANILLA MILK TEA",
        description: "Our milk tea infused with sweet vanilla. Made with non dairy creamer.",
        calories: "315 - 605 calories",
        price: "from PHP 95.00",
        picture: "./products/vanillamilktea.png"
    },
    {
        name: "2 LADIES MILK TEA",
        description: "Our signature CoCo milk tea with bubbles and pudding.",
        calories: "254 - 460 calories",
        price: "from PHP 90.00",
        picture: "./products/2ladiesmilktea.png"
    },
    {
        name: "3 GUYS MILK TEA",
        description: "Our signature CoCo milk tea with bubbles, pudding and grass jelly.",
        calories: "309 - 545 calories",
        price: "from PHP 100.00",
        picture: "./products/3guysmilktea.png"
    },
]

for (let i=0; i < productList.length; i++) {
    cName=".p"+i;
    let div = document.createElement("div");
    div.className="p"+i;
    document.querySelector('.box').appendChild(div);

    let img = document.createElement("img");
    img.src = productList[i].picture;
    img.width=250;
    img.height=250;
    document.querySelector(cName).appendChild(img);
    

    let h1 = document.createElement("h1");
    h1.innerHTML = productList[i].name;
    document.querySelector(cName).append(h1);
    

    let p = document.createElement("p");
    p.innerHTML = productList[i].description;
    document.querySelector(cName).append(p);

    let cal = document.createElement("p");
    cal.innerHTML = productList[i].calories;
    document.querySelector(cName).append(cal);

    let h2 = document.createElement("h2");
    h2.innerHTML = productList[i].price;
    document.querySelector(cName).append(h2);

    let btn = document.createElement("button");
    btn.innerHTML = "Order";
    btn.id= "button"+i;
    document.querySelector(cName).appendChild(btn);
}

let itemPicture=[];
let itemName=[];
let itemPrice=[];
function addToCart(i) {
    itemPicture.push(productList[i].picture);
    itemName.push(productList[i].name);
    itemPrice.push(productList[i].price);

    let y ="item" + i*1000;
    cName=".item"+ y;
    let div = document.createElement("div");
    div.className="item"+y;
    document.querySelector('.cartList').appendChild(div);

    let img = document.createElement("img");
    img.src = productList[i].picture;
    img.width=200;
    img.height=200;
    document.querySelector(cName).appendChild(img);
    

    let h1 = document.createElement("h1");
    h1.innerHTML = productList[i].name;
    document.querySelector(cName).append(h1);
    

    let h2 = document.createElement("h2");
    h2.innerHTML = productList[i].price;
    document.querySelector(cName).append(h2);
    window.alert(productList[i].name + " has been added to your cart.");   
}

for (let i=0; i < productList.length; i++) {
    document.getElementById("button"+i).addEventListener ("click", function() {
        addToCart(i);
    });
}

let modal = document.getElementById("modalId");
let btn = document.getElementById("cartIcon");
let span = document.getElementsByClassName("exit")[0];
btn.onclick = function() {
    modal.style.display = "flex";
    let cartItems= "Number of items in the cart: " + itemPicture.length;
    document.getElementById("nCart").innerHTML=cartItems;
  }
span.onclick = function() {
    modal.style.display = "none";
}


