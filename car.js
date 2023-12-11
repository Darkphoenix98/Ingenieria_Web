const products = [
    {
      name: 'Bicicleta de ruta',
      image: './assets/bicileta.jpg',
      price: 260,
      quantity: 2,
    },
    {
      name: 'Iphone 9',
      image: './assets/celular.jpg',
      price: 380,
      quantity: 5,
    },
    {
      name: 'Lentes de sol',
      image: './assets/lentes.jpg',
      price: 120,
      quantity: 8,
    },
    {
      name: 'Mesa de Comder',
      image: './assets/mesa.jpg',
      price: 140,
      quantity: 1,
    },
  ];
  
  // Función para calcular el total del carrito
  function calcularTotal() {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  }
  
  // Función para mostrar la tabla dinámica en el HTML
  function mostrarTabla() {
    const tabla = document.createElement('table');
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio Unitario</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${products.map(product => `
          <tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
          </tr>`).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">Total</td>
          <td>$${calcularTotal().toFixed(2)}</td>
        </tr>
      </tfoot>
    `;
    document.body.appendChild(tabla);
  }
  
  // Llama a la función para mostrar la tabla cuando se carga la página
  window.onload = mostrarTabla;
  