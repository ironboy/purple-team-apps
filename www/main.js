const products = await(await fetch('/api/products')).json();

document.body.innerHTML = `
  <main>
    <h1>Our Products</h1>
    ${products.map(({ id: _id, name, description, price }) => `
      <div class="product">
        <h2>${name}</h2>
        <p>${description}</p>
        <p class="price">Price: ${price} SEK</p>
      </div>
    `).join('')}
  </main>
`;