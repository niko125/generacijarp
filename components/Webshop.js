import { useState } from 'react';

const products = [
  { id: 1, name: 'VIP Paket', price: 50 },
  { id: 2, name: 'Custom Skin', price: 100 },
  { id: 3, name: 'Exclusive Vehicle', price: 150 },
];

export default function Webshop() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Webshop</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id} className="mb-4">
            <strong>{product.name}</strong> - ${product.price}
            <button 
              onClick={() => addToCart(product)} 
              className="ml-4 bg-primary text-white px-2 py-1 rounded"
            >
              Dodaj u košaricu
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6">Košarica</h3>
      {cart.length === 0 ? (
        <p>Košarica je prazna</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

