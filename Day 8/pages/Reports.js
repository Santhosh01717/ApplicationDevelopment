import React, { useState, useEffect } from 'react';

const Reports = () => {
  const [salesData, setSalesData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch your data from an API or database here.
    // For this example, we'll mock some data.
    const mockSalesData = [
      { date: '2023-09-01', amount: 1000 },
      { date: '2023-09-02', amount: 1500 },
      // Add more sales data as needed.
    ];

    const mockInventoryData = [
      { product: 'Product A', quantity: 100 },
      { product: 'Product B', quantity: 75 },
      // Add more inventory data as needed.
    ];

    setSalesData(mockSalesData);
    setInventoryData(mockInventoryData);
  }, []);

  return (
    <div>
      <h1>Pharmacy Management Reports</h1>

      <section>
        <h2>Sales Report</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={index}>
                <td>{sale.date}</td>
                <td>{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2>Purchase Report</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Reports;
