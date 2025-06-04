import { Product, Clothing, Appliance } from "../../data/products.js";

describe('test suite: product class', () => {
  let product1;
  beforeEach(()=>{
      product1 = new Product({
      id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
      image: "images/products/6-piece-non-stick-baking-set.webp",
      name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
      rating: {
        stars: 4.5,
        count: 175
      },
      priceCents: 3499,
      keywords: [
        "kitchen",
        "cookware"
      ]
    });
  });
  it('checks the properties', () => {
    expect(product1.id).toEqual('8c9c52b5-5a19-4bcb-a5d1-158a74287c53');
    expect(product1.image).toEqual('images/products/6-piece-non-stick-baking-set.webp');
    expect(product1.name).toEqual('6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set');
    expect(product1.rating).toEqual({
      stars: 4.5,
      count: 175
    });
    expect(product1.priceCents).toEqual(3499);
  });
  it('gets the stars url', () => {
    expect(product1.getStarsUrl()).toEqual('images/ratings/rating-45.png')
  });
  it('gets the price', () => {
    expect(product1.getPrice()).toEqual('$34.99');
  });
  it('does not display any extra info', () => {
    expect(product1.extraInfoHTML()).toEqual('');
  })
});

describe('test suite: clothing class', ()=>{
  let product2;
  beforeEach(() => {
    product2 = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    });
  });
  it('checks the properties', () => {
    expect(product2.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    expect(product2.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
    expect(product2.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
    expect(product2.rating).toEqual({
      stars: 4.5,
      count: 56
    });
    expect(product2.priceCents).toEqual(799);
    expect(product2.sizeChartLink).toEqual('images/clothing-size-chart.png')
  });
  it('gets the stars url', () => {
    expect(product2.getStarsUrl()).toEqual('images/ratings/rating-45.png')
  });
  it('gets the price', () => {
    expect(product2.getPrice()).toEqual('$7.99');
  });
  it('displays the size chart link in extraInfoHTML', () => {
    expect(product2.extraInfoHTML()).toContain(`<a href="images/clothing-size-chart.png" target="_blank">`)
    expect(product2.extraInfoHTML()).toContain('Size chart');
  });
});

describe('test suite: appliance class', () => {
  let product3;
  beforeEach(() => {
    product3 = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliance",
      instructionsLink: "images/appliance-instructions.png",
      warrantyLink: "images/appliance-warranty.png"
    });
  });
  it('checks the properties', () => {
    expect(product3.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(product3.image).toEqual('images/products/black-2-slot-toaster.jpg');
    expect(product3.name).toEqual('2 Slot Toaster - Black');
    expect(product3.rating).toEqual({
      stars: 5,
      count: 2197
    });
    expect(product3.priceCents).toEqual(1899);
    expect(product3.instructionsLink).toEqual('images/appliance-instructions.png');
    expect(product3.warrantyLink).toEqual('images/appliance-warranty.png');
  });
  it('gets the stars url', () => {
    expect(product3.getStarsUrl()).toEqual('images/ratings/rating-50.png');
  });
  it('gets the price', () => {
    expect(product3.getPrice()).toEqual('$18.99');
  });
  it('displays instructions and warranty links in extraInfoHTML', () => {
    expect(product3.extraInfoHTML()).toContain('<a href="images/appliance-instructions.png" target="_blank">');
    expect(product3.extraInfoHTML()).toContain('<a href="images/appliance-warranty.png" target="_blank">')
    expect(product3.extraInfoHTML()).toContain('Instructions');
    expect(product3.extraInfoHTML()).toContain('Warranty');
  });
  
});