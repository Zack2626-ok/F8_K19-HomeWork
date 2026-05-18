const employees = [
  { id: 1, name: "Alice", age: 23, status: "working" },
  { id: 3, name: "Bob", age: 25, status: "working" },
  { id: 6, name: "John", age: 27, status: "working" },
  { id: 8, name: "David", age: 23, status: "quit_job" },
  { id: 10, name: "Eve", age: 20, status: "working" },
];

const products = [
  { id: 1, name: "Phone", price: 1200 },
  { id: 2, name: "Laptop", price: 3000 },
  { id: 3, name: "Tab", price: 2000 },
  { id: 4, name: "PC", price: 800 },
  { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
  { id: 1, employeeId: 1, productId: 4, quantity: 1 },
  { id: 2, employeeId: 3, productId: 2, quantity: 4 },
  { id: 3, employeeId: 1, productId: 5, quantity: 3 },
  { id: 4, employeeId: 6, productId: 1, quantity: 2 },
  { id: 5, employeeId: 3, productId: 5, quantity: 3 },
  { id: 6, employeeId: 8, productId: 1, quantity: 1 },
  { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// Bai 1:
const getEmployeesWorking = (employees) => {
  return employees.filter((employees) => employees.status === "working");
};
console.log(getEmployeesWorking(employees));

console.log("--------------------");

// Bai 2:
const getOldestEmployee = (employees) => {
  let odlestEmployee = null;

  odlestEmployee = employees[0];

  for (let eIdx = 0; eIdx < employees.length; eIdx++) {
    if (odlestEmployee.age < employees[eIdx].age)
      odlestEmployee = employees[eIdx];
  }
  return odlestEmployee;
};
console.log(getOldestEmployee(products));

console.log("--------------------");
// Bai 3:

const getCheapestProduct = (products) => {
  let cheapestProduct = null;

  cheapestProduct = products[0];

  for (let eIdx = 0; eIdx < products.length; eIdx++) {
    if (cheapestProduct.price > products[eIdx].price)
      cheapestProduct = products[eIdx];
  }
  return cheapestProduct;
};
console.log(getCheapestProduct(products));

console.log("--------------------");
// Bai 4:

const getBestSellingProduct = (orders, products) => {
  const orderProductMap = {};

  for (const order of orders) {
    if (!orderProductMap[order.productId]) {
      orderProductMap[order.productId] = 0;
    }

    orderProductMap[order.productId] += order.quantity;
  }
  const result = [];

  for (const productId in orderProductMap) {
    result.push({
      productId: +productId,
      quantity: orderProductMap[productId],
    });
  }

  result.sort((a, b) => b.quantity - a.quantity);

  const bestSeller = result[0];

  const product = products.find(
    (product) => product.id === bestSeller.productId,
  );

  return {
    productName: product.name,
    quantity: bestSeller.quantity,
  };
};
console.log(getBestSellingProduct(orders, products));

console.log("--------------------");

// Bai 5:
const getHighestRevenueProduct = (orders, products) => {
  const orderProductMap = {};

  for (const order of orders) {
    const product = products.find((product) => product.id === order.productId);

    if (!orderProductMap[order.productId]) {
      orderProductMap[order.productId] = 0;
    }

    orderProductMap[order.productId] += order.quantity * product.price;
  }

  console.log(orderProductMap);

  const result = [];

  for (const productId in orderProductMap) {
    result.push({
      productId: +productId,
      revenue: orderProductMap[productId],
    });
  }

  result.sort((a, b) => b.revenue - a.revenue);

  const bestSeller = result[0];

  const product = products.find((p) => p.id === bestSeller.productId);

  return {
    productName: product.name,
    revenue: bestSeller.revenue,
  };
};

console.log(getHighestRevenueProduct(orders, products));
