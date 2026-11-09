import React from 'react';

const products = [
  { id: 1, name: "قميص", price: 300, store: "محل كفر الشيخ" },
    { id: 2, name: "بنطلون", price: 450, store: "محل كفر الشيخ" },
      { id: 3, name: "جاكيت", price: 700, store: "محل كفر الشيخ" }
      ];

      function App() {
        return (
            <main>
                  <h1>STYLEK</h1>
                        <p>اكتشف ستايلك في كفر الشيخ</p>
                              <div className="cards">
                                      {products.map((product) => (
                                                <div className="card" key={product.id}>
                                                            <h2>{product.name}</h2>
                                                                        <p className="price">{product.price} جنيه</p>
                                                                                    <p className="store">{product.store}</p>
                                                                                              </div>
                                                                                                      ))}
                                                                                                            </div>
                                                                                                                </main>
                                                                                                                  );
                                                                                                                  }

                                                                                                                  export default App;