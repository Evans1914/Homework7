// // Sales Data
const salesData = [
    { transactionId: 1, customerId: 101, productId: 'P001', region: 'Atlanta-Georgia', salesAmount: 1800, date: '2024-12-01' },
    { transactionId: 2, customerId: 102, productId: 'P002', region: 'Ohio', salesAmount: 300, date: '2024-12-02' },
    { transactionId: 3, customerId: 103, productId: 'P003', region: 'Ohio', salesAmount: 500, date: '2025-01-24' },
    { transactionId: 4, customerId: 104, productId: 'P004', region: 'NYC', salesAmount: 1000, date: '2025-01-01' },
    { transactionId: 5, customerId: 105, productId: 'P005', region: 'Ohio', salesAmount: 500, date: '2025-01-24' },
    { transactionId: 6, customerId: 106, productId: 'P006', region: 'Michigan', salesAmount: 500, date: '2025-01-24' },
    { transactionId: 7, customerId: 107, productId: 'P007', region: 'Ohio', salesAmount: 2000, date: '2025-01-24' },
    { transactionId: 8, customerId: 108, productId: 'P008', region: 'Ohio', salesAmount: 450, date: '2025-01-24' },
    { transactionId: 9, customerId: 109, productId: 'P009', region: 'Texas', salesAmount: 150, date: '2024-12-24' },
  ];
  
  // Customers Data
  const customers = [
    { customerId: 107, name: 'LMC', email: 'LMC@example.com' },
    { customerId: 102, name: 'Oshi', email: 'Dyl@example.com' },
    { customerId: 103, name: 'Evans', email: 'Evans@example.com' },
  ];
  
  // Products Data
  const products = [
    { productId: 'P001', name: 'Laptop', category: 'Electronics' },
    { productId: 'P002', name: 'Shirt', category: 'Apparel' },
    { productId: 'P003', name: 'Rice', category: 'Grocery' },
  ];
  
  // 1. Calculate Total Sales by Region using reduce
  function calculateSalesByRegion(salesData) {
    return salesData.reduce((acc, sale) => {
      acc[sale.region] = (acc[sale.region] || 0) + sale.salesAmount;
      return acc;
    }, {});
  }
  console.log(calculateSalesByRegion(salesData)) // Print out the result

  const salesByRegion = calculateSalesByRegion(salesData);
  const regions = Object.keys(salesByRegion);
  const salesRegionValues = Object.values(salesByRegion);
  
  // 2. Identify Top Customers using reduce & map
  function getTopCustomers(salesData, customers) {
    const customerSpending = salesData.reduce((acc, sale) => {
      acc[sale.customerId] = (acc[sale.customerId] || 0) + sale.salesAmount;
      return acc;
    }, {});
  
    return customers.map((customer) => ({
      name: customer.name,
      totalSpent: customerSpending[customer.customerId] || 0,
    })).sort((a, b) => b.totalSpent - a.totalSpent);
  }
  
console.log(getTopCustomers(salesData, customers))// Print out the result

const topCustomers = getTopCustomers(salesData, customers);
  const customerNames = topCustomers.map(c => c.name);
  const customerSpendingValues = topCustomers.map(c => c.totalSpent);
  
  // 3. Calculate Total Sales by Category using reduce
  function calculateSalesByCategory(salesData, products) {
    const productMap = products.reduce((map, product) => {
      map[product.productId] = product.category;
      return map;
    }, {});
  
    return salesData.reduce((acc, sale) => {
      const category = productMap[sale.productId];
      acc[category] = (acc[category] || 0) + sale.salesAmount;
      return acc;
    }, {});
  }
  console.log(calculateSalesByCategory(salesData, products))// Print out the result
  
  const salesByCategory = calculateSalesByCategory(salesData, products);
  const categories = Object.keys(salesByCategory);
  const categoryValues = Object.values(salesByCategory);
  
  // Create Visualization Charts
  const ctxRegion = document.getElementById('salesByRegionChart').getContext('2d');
  new Chart(ctxRegion, {
    type: 'bar',
    data: {
      labels: regions,
      datasets: [{
        label: 'Total Sales ($)',
        data: salesRegionValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Total Sales by Region',
        },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
  
  const ctxCustomer = document.getElementById('topCustomersChart').getContext('2d');
  new Chart(ctxCustomer, {
    type: 'bar',
    data: {
      labels: customerNames,
      datasets: [{
        label: 'Total Spent ($)',
        data: customerSpendingValues,
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      indexAxis: 'y', // Horizontal bar chart
      plugins: {
        title: {
          display: true,
          text: 'Top Customers',
        },
      },
      scales: {
        x: { beginAtZero: true },
      },
    },
  });
  
  const ctxCategory = document.getElementById('salesByCategoryChart').getContext('2d');
  new Chart(ctxCategory, {
    type: 'pie',
    data: {
      labels: categories,
      datasets: [{
        label: 'Sales by Category',
        data: categoryValues,
        backgroundColor: [
          'rgba(223, 21, 206, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(4, 28, 75, 0.6)',
          'rgba(201, 203, 207, 0.6)',
        ],
        borderColor: [
          'rgba(153, 102, 255, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(201, 203, 207, 1)',
          'rgb(15, 15, 15)',
        ],
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Total Sales by Category',
        },
      },
    },
  });
  