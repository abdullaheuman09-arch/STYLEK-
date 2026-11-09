import React, { useState } from 'react';

const products = [
  { id: 1, name: "قميص", price: 300, store: "محل كفر الشيخ" },
    { id: 2, name: "بنطلون", price: 450, store: "محل كفر الشيخ" },
      { id: 3, name: "جاكيت", price: 700, store: "محل كفر الشيخ" }
      ];

      function App() {
        const [query, setQuery] = useState("");

          const results = products.filter((product) =>
              product.name.includes(query.trim())
                );

                  return (
                      <main>
                            <h1>STYLEK</h1>
                                  <p>اكتشف ستايلك في كفر الشيخ</p>
                                        <input
                                                className="search"
                                                        type="text"
                                                                placeholder="ابحث عن منتج..."
                                                                        value={query}
                                                                                onChange={(e) => setQuery(e.target.value)}
                                                                                      />
                                                                                            <div className="cards">
                                                                                                    {results.map((product) => (
                                                                                                              <div className="card" key={product.id}>
                                                                                                                          <h2>{product.name}</h2>
                                                                                                                                      <p className="price">{product.price} جنيه</p>
                                                                                                                                                  <p className="store">{product.store}</p>
                                                                                                                                                            </div>
                                                                                                                                                                    ))}
                                                                                                                                                                          </div>
                                                                                                                                                                                {results.length === 0 && <p className="empty">لا توجد نتائج</p>}
                                                                                                                                                                                    </main>
                                                                                                                                                                                      );
                                                                                                                                                                                      }

                                                                                                                                                                                      export default App;