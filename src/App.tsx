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
                      <div className="app">
                            <div className="header">
                                    <div className="bell">
                                              🔔<span className="badge">2</span>
                                                      </div>
                                                              <div className="logo">
                                                                        <h1>STYLE<span>K</span></h1>
                                                                                  <p>ستايلك .. اختياراتك الأفضل</p>
                                                                                          </div>
                                                                                                  <div className="city">📍 كفر الشيخ</div>
                                                                                                        </div>

                                                                                                              <input
                                                                                                                      className="search"
                                                                                                                              type="text"
                                                                                                                                      placeholder="ابحث عن ملابس أو متجر..."
                                                                                                                                              value={query}
                                                                                                                                                      onChange={(e) => setQuery(e.target.value)}
                                                                                                                                                            />

                                                                                                                                                                  <div className="cards">
                                                                                                                                                                          {results.map((product) => (
                                                                                                                                                                                    <div className="card" key={product.id}>
                                                                                                                                                                                                <h2>{product.name}</h2>
                                                                                                                                                                                                            <p className="price">{product.price} EGP</p>
                                                                                                                                                                                                                        <p className="store">{product.store}</p>
                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                          ))}
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                      {results.length === 0 && <p className="empty">لا توجد نتائج</p>}
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                            export default App;