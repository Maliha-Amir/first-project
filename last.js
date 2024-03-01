// function searchBarClicked() {
//     onclick;x
// }
// searchBarClicked();
// function clicked(){
//     document.getElementById("add").innerText = "Item added to cart!";
// }

// clicked();




// document.getElementById("add").addEventListener("click", clicked);

// items_in_cart = [{ 
//     "name": "Product A",
//     "price": 6,
// },
// { 
//     "name": "Product B",
//     "price": 4,
// },
// { 
//     "name": "Product C",
//     "price": 9,
// },
// { 
//     "name": "Product D",
//     "price": 7,
// },
// { 
//     "name": "Product E",
//     "price": 5,
// },
// { 
//     "name": "Product F",
//     "price": 8,
// },
// { 
//     "name": "Product G",
//     "price": 10,
// },
// { 
//     "name": "Product H",
//     "price": 8,
// },

// ];

// let subTotal = 0;
// for(let itemPrice of items_in_cart){
//     subTotal = subTotal + itemPrice; 
// }
// let taxRate = 0.1;
// let tax_amount = subTotal * taxRate;

// let total_amount = subTotal + tax_amount;

// console.log(total_amount);





// // Step 1: Retrieve prices of items added to the cart
// items_in_cart = [...]; // List of items in the cart, each item containing its price
// subtotal = 0;

// for each item in items_in_cart {
//     subtotal += item.price;
// }

// // Step 2: Calculate taxes (if applicable)
// tax_rate = 0.1; // Example tax rate of 10%
// tax_amount = subtotal * tax_rate;

// // Step 3: Calculate the total amount
// total_amount = subtotal + tax_amount;

// // Optionally, you can also apply any discounts or promotions here before calculating the total amount.

// Output the total amount
// output total_amount;



// let addToCart=document.querySelector("picture-item");
// let btn= document.querySelector("add-to-cart");
// let itemPrice= 6;
// let tax_rate= 0.1;
// let subTotal=0;

// addToCart.addEventListener('click', function() {
//     subTotal += itemPrice*300 + tax_rate;
// });
// btn.click.addToCart;


// let btn = document.getElementsByClassName("add-to-cart");
// let status = document.getElementById("message");

// function clicked(){
//     message.textContent = 'Add to Cart Successfully';
// }
// btn.addEventListener('click', function() {
//     // Call the function to print success message
//     clicked();
// });         


let addToCartButtons = document.querySelectorAll('.add-to-cart');

//Function to print "Add to Cart Successfully" message
function printSuccessMessage() {
    alert('Add to Cart Successfully');
}
function button(){
    button.addEventListener('click', printSuccessMessage);
}
//ARROW FINCTION IS A CONCISE WAY OF WRITING AN FUNCTION:

addToCartButtons.forEach(button => {
    button.addEventListener('click', printSuccessMessage);
});


// let totalPrice = 0;

//   function addToCart(price) {
//        totalPrice += price;
//       document.getElementById('total-price').innerText = totalPrice + '$';
//   }