const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add-product', (req, res) => {
  res.send(`
    <form method="POST" action="/add-product">
      <label for="product-name">Product Name</label>
      <input type="text" id="product-name" name="product-name">

      <label for="product-size">Product Size</label>
      <input type="text" id="product-size" name="product-size">

      <button type="submit">Add Product</button>
    </form>
  `);
});

app.post('/add-product', (req, res) => {
  const productName = req.body['product-name'];
  const productSize = req.body['product-size'];
  console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
  res.send('Product added successfully!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
