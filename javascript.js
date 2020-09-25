let quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener('change', updateCartTotal);
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0];
  let cartRows = cartItemContainer.getElementsByClassName('cart-row');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i];
      let priceElement = cartRow.getElementsByClassName('cart-price')[0];
      let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
      let price = Number(priceElement.innerText.split(' ')[1].replace('.',''));
      let quantity = quantityElement.value;
      total = total + (price * quantity);
  }
  total = Math.round(total * 100) / 100;
  let totalFormat = formatMoney(total);
  document.getElementsByClassName('cart-total-price')[0].innerText = totalFormat;
}

function formatMoney(num) {
  let str = num.toString();
  let result = '';
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (count % 3 === 0 && count >= 3) {
      result = str[i] + '.' + result;
      count++;
    } else {
      result = str[i] + result;
      count++;
    }
  }
  result = `Rp. ${result}`;
  return result;
}

// Cancel Clicked
let cancelCartItemButtons = document.getElementsByClassName('btn-cancel');
  for (let i = 0; i < cancelCartItemButtons.length; i++) {
      let button = cancelCartItemButtons[i];
      button.addEventListener('click', function() { cancelCartItem(button) });
  }

function cancelCartItem(event) {
  event.previousSibling.previousSibling.value = "0"
  updateCartTotal()
}

// Purchase Clicked
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
  alert('THANK YOU FOR YOUR PURCHASE, STAY HEALTHY & WEAR A MASK :)');
  clearCartItem()
}

// Clear Clicked
document.getElementsByClassName('btn-clear')[0].addEventListener('click', clearCartItem);

function clearCartItem() {
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.value = "0";
  }
  updateCartTotal()
}