function App() {
  const products = [
    { id: 1, name: 'Laptop', stock: 5 },
    { id: 2, name: 'Mouse', stock: 10 }
  ];

  return (
    <div>
      <h1>Inventario</h1>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - Stock: {product.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;