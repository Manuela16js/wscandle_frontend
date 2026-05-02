import Producto from './Producto';

// Lista de productos de la tienda ws.candle
function ListaProductos() {
  const productos = [
    { id: 1, nombre: "Vela aromática", precio: 20000 },
    { id: 2, nombre: "Vela decorativa", precio: 25000 }
  ];

  return (
    <div>
      <h2>Productos</h2>
      {productos.map(p => (
        <Producto key={p.id} nombre={p.nombre} precio={p.precio} />
      ))}
    </div>
  );
}

export default ListaProductos;