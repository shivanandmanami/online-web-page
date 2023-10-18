import React from 'react';
import './App.css';

const Mobiles = [
  {
    id: 1,
    name: 'Samsung s23 ultra',
    price: '₹149999',
    description: ' 6.8-inch Dynamic AMOLED display with 120Hz refresh rate, Snapdragon 8 Gen 2 processor, 5000mAh battery, up to 12gigs of RAM, and 1TB of storage.'
  },
  {
    id: 2,
    name: 'Mobile 2',
    price: '$399',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 3,
    name: 'Mobile 3',
    price: '$499',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 4,
    name: 'Mobile 4',
    price: '$599',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 5,
    name: 'Mobile 5',
    price: '$699',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 6,
    name: 'Mobile 6',
    price: '$799',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 7,
    name: 'Mobile 7',
    price: '$899',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 8,
    name: 'Mobile 8',
    price: '$999',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 9,
    name: 'Mobile 9',
    price: '$1099',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    id: 10,
    name: 'Mobile 10',
    price: '$1199',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Electronics Shop</h1>
      </header>
      <nav>
        <ul>
          {Mobiles.map((mobile) => (
            <li key={mobile.id}>
              <a href={`#mobile${mobile.id}`}>{mobile.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        {Mobiles.map((mobile) => (
          <section key={mobile.id} id={`mobile${mobile.id}`}>
            <h2>{mobile.name}</h2>
            <p>Price: {mobile.price}</p>
            <p>{mobile.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;
