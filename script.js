let products = [
  { name: "Phone", price: 299, category: "Electronics" },
  { name: "Shoes", price: 59, category: "Apparel" },
  { name: "Bag", price: 39, category: "Apparel" },
  { name: "Tablet", price: 399, category: "Electronics" }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    const item = document.createElement("div");
    item.textContent = `${p.name} - $${p.price}`;
    container.appendChild(item);
  });
}

function applyFilter() {
  const value = document.getElementById("filter").value;
  let filtered = products;
  if (value !== "All") {
    filtered = products.filter(p => p.category === value);
  }
  displayProducts(filtered);
}

function applySort() {
  const value = document.getElementById("sort").value;
  let sorted = [...products];
  if (value === "LowToHigh") sorted.sort((a, b) => a.price - b.price);
  if (value === "HighToLow") sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

window.onload = () => {
  document.getElementById("filter").innerHTML = `
    <option>All</option>
    <option>Electronics</option>
    <option>Apparel</option>
  `;
  document.getElementById("sort").innerHTML = `
    <option value="">None</option>
    <option value="LowToHigh">Price: Low to High</option>
    <option value="HighToLow">Price: High to Low</option>
  `;
  displayProducts(products);
};
