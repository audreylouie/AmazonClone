import { cart } from "../../data/cart-class.js";

describe('test suite: add to cart', ()=>{
  it('adds an existing product to the cart', () => {
    spyOn(localStorage, 'setItem');
    
    cart.cartItems = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }];
   
    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6',{ value: 1 });
    expect(cart.cartItems.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{ productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
    }]));
  });
  it('adds a new product to the cart', () => {

    spyOn(localStorage, 'setItem');
    cart.cartItems = [];

    cart.addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6',{ value: 1 });
    expect(cart.cartItems.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{ productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1,
    deliveryOptionId: '1'
    }]));
  });
});

describe('test suite: remove from cart', () =>{
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    cart.cartItems = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 2,
        deliveryOptionId: '2'
      }];
    });
  it('removes a productId that is in the cart', () => {
    cart.removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
      productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 2,
      deliveryOptionId: '2'
    }]));
  });
  it('removes a productId that is not in the cart', () => {
      cart.removeFromCart('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
      expect(cart.cartItems.length).toEqual(2);
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(localStorage.setItem).toHaveBeenCalledWith('cart-oop', JSON.stringify([{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      },{
        productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 2,
        deliveryOptionId: '2'
      }]));
    });
});

describe('test suite: update delivery option', () =>{
  beforeEach(()=>{
    spyOn(localStorage, 'setItem');
    cart.cartItems = [{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }];
    });
  it('updates delivery option if the product is in the cart', () =>{
    cart.updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '3');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('3');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  it('does nothing if the product is not in the cart', () =>{
    cart.updateDeliveryOption('does-not-exist', '3');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
  it('does nothing if deliveryOptionId does not exist', () =>{
    cart.updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', '4');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  })
});