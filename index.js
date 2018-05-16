var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {
    itemName: item,
    itemPrice: Math.floor(Math.random()*100)
  }
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var end = 'In your cat, you have ';
  for (var i = 0; i < cart.length; i++) {
    if (cart.length === 1) {
      end = end.concat(`${cart[i].itemName} at ${cart[i].itemPrice}.`);
    } else if (cart.length >= 2) {
      if (i < cart.length-1) {
        end = end.concat(`${cart[i].itemName} at ${cart[i].itemPrice}, `);
      } else if (i === cart.length-1) {
        end = end.concat(`and ${cart[i].itemName} at ${cart[i].itemPrice}.`)
      }
    } else if (cart.length === 0) {
      end = 'Your shopping cart is empty.';
    }
  }
  return end;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
