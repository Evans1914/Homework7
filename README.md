# Homework7- Data Analysis Tool  Project Report

**Project Overview**

The objective of this project was to create a data analysis tool to handle and manipulate complex data structures using JavaScript objects and array functions. The data analyzed included sales transactions, customer information, and product details. The project also featured data visualizations for the results using Chart.js to better understand key metrics such as sales by region, top customers, and sales by product category.

**Approach and Methodology**

1. **Data Structure Design**

I began by structuring the data into three arrays of objects:

Sales Data: Represented individual sales transactions, including attributes such as transaction ID, customer ID, product ID, region, sales amount, and date.

Customer Data: Contained customer-specific details, such as customer ID, name, and email.

Product Data: Defined product-related attributes like product ID, name, and category.

JavaScript classes were used to encapsulate the structure and functionality for each dataset: SalesTransaction, Customer & Product.

These classes provided a foundation for object-oriented manipulation of the data.

2. **Data Analysis Using JavaScript Array Functions**

To analyze the data effectively, the following array functions were employed:

reduce Function:

Purpose: To aggregate data such as calculating total sales by region or total sales by product category.

Example:

Function: calculateSalesByRegion

Aggregated sales amounts by region into a key-value pair object.

Function: calculateSalesByCategory

Mapped product IDs to their categories and summed sales for each category.

map Function:

Purpose: To transform data, such as creating a list of customers with their total spending.

Example:

Function: getTopCustomers

Mapped customer IDs to names and their respective total spending, then sorted the results in descending order of spending.

sort Function:

Purpose: To order data based on specific criteria, such as sorting customers by total spending.

3. **Data Visualization with Chart.js**

After data analysis, the results were visualized using Chart.js. Three types of charts were created:

**Bar Chart:**

Metric: Total sales by region.

Purpose: Highlight regional sales performance.

**Horizontal Bar Chart:**

Metric: Top customers by total spending.

Purpose: Showcase the contribution of individual customers to overall revenue.

**Pie Chart:**

Metric: Sales by product category.

Purpose: Provide a proportional view of sales distribution across categories.

The visualizations required preparing labels (e.g., regions, customer names) and corresponding data values (e.g., sales amounts) extracted from the analysis functions.

Functions Implemented

calculateSalesByRegion(salesData)

Description: Aggregates sales amounts by region.

Input: Array of sales transactions.

Output: Object with regions as keys and total sales as values.

getTopCustomers(salesData, customers)

Description: Calculates total spending for each customer and sorts them in descending order.

Input: Sales transactions and customer data.

Output: Array of customer objects with name and total spent.

calculateSalesByCategory(salesData, products)

Description: Aggregates sales by product category.

Input: Sales transactions and product data.

Output: Object with categories as keys and total sales as values.

**Challenges Encountered**

Data Aggregation Logic:

Challenge: Ensuring the correct mapping between related datasets (e.g., associating product IDs with categories or customer IDs with names).

Solution: Used reduce to create lookup objects (e.g., a product ID-to-category map) to streamline data aggregation.

Chart.js Integration:

Challenge: Preparing data in a format compatible with Chart.js.

Solution: Extracted labels and data values dynamically from analysis results, ensuring alignment with the chart type.

Date Parsing:

Challenge: Properly parsing and handling date strings to maintain consistent formatting.

Solution: Used JavaScript’s Date object for robust date handling.

Visualization Customization:

Challenge: Configuring Chart.js options to create visually appealing charts.

Solution: Adjusted colors, labels, and tooltips for clarity and aesthetics.

**Results and Insights**

The project successfully delivered the following insights:

Total Sales by Region:

Provided a clear view of regional sales performance, with the Atlanta-Georgia region leading.

Top Customers:

Highlighted the most valuable customers, enabling targeted marketing strategies.

Sales by Category:

Revealed sales distribution across product categories, with electronics contributing the most.

**Conclusion**

This project demonstrated effective use of JavaScript objects and array functions to manipulate and analyze complex datasets. The integration of Chart.js allowed for meaningful visual representations, making the insights actionable and accessible. Despite initial challenges with data mapping and visualization, the results underscore the importance of structured data analysis in decision-making processes.

**Reccommendations & Future enhancements could include:**

Incorporating interactive dashboards.

Adding more datasets for richer insights.

Expanding the functionality to include predictive analytics.

