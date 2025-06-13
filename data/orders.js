export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder (order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}
export function getOrder(orderId){
  let matchingOrder;
  orders.forEach((order) => {
    if(order.id === orderId){
      matchingOrder = order;
    }
  });
  return matchingOrder;
}

document.querySelector('.js-search-button').addEventListener('click', () => {
  console.log('hi');
const search = document.querySelector('.js-search-bar').value;
window.location.href = `amazon.html?search=${encodeURIComponent(search)}`;
});

document.querySelector('.js-search-bar').addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
  const search = document.querySelector('.js-search-bar').value;
  window.location.href = `amazon.html?search=${encodeURIComponent(search)}`;
}
});