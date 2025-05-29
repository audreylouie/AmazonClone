export const cart = [];

export function addToCart(productId, quantity){
  let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity += Number(quantity.value);
    }    
    else{
      cart.push({
        productId,
        quantity: Number(quantity.value)
      });
    }
}