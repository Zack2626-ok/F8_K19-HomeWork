const products = [
  { id: 1, name: "iPhone", price: 2000 },
  { id: 2, name: "Samsung", price: 1500 },
  { id: 3, name: "Xiaomi", price: 1000 },
  { id: 4, name: "Oppo", price: 1200 },
];
const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 },
    ],
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 },
    ],
  },
];

function findHighestRevenue(products, orders) {
  const productMap = {};

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productMap[product.id] = product.price;
  }

  const revenueMap = {};
  for (let i = 0; i < orders.length; i++) {
    const items = orders[i].items;

    for (let j = 0; j < items.length; j++) {
      const productId = items[j].productId;
      const quantity = items[j].quantity;

      const revenue = productMap[productId] * quantity;

      if (revenueMap[productId] === undefined) revenueMap[productId] = 0;
      revenueMap[productId] += revenue;
    }
  }

  console.log(revenueMap);

  let maxRevenue = 0;
  let highestProduct = null;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const revenue = revenueMap[product.id];

    if (revenue > maxRevenue) {
      maxRevenue = revenue;
      highestProduct = product;
    }
  }
  console.log(highestProduct);

  return `sản phẩn có doanh thu cao nhất là ${highestProduct.name} với giá ${maxRevenue}`;
}

console.log(findHighestRevenue(products, orders));
