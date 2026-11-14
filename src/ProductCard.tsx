import { useState } from 'react';
import { stores } from './data';
import type { Product } from './data';

type Props = {
  product: Product;
    isFav: boolean;
      onToggleFav: () => void;
        onOpen: () => void;
        };

        function ProductCard({ product: p, isFav, onToggleFav, onOpen }: Props) {
          const [imgFailed, setImgFailed] = useState(false);
            const st = stores.find((s) => s.id === p.storeId);
              const pct = p.oldPrice > p.price ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
                const showImage = !!p.image && !imgFailed;

                  return (
                      <div className="card" onClick={onOpen}>
                            <div className="img">
                                    {showImage ? (
                                              <img
                                                          className="pimg"
                                                                      src={p.image}
                                                                                  alt={p.name}
                                                                                              loading="lazy"
                                                                                                          onError={() => setImgFailed(true)}
                                                                                                                    />
                                                                                                                            ) : (
                                                                                                                                      p.icon
                                                                                                                                              )}
                                                                                                                                                    </div>
                                                                                                                                                          <button
                                                                                                                                                                  className="heart"
                                                                                                                                                                          onClick={(e) => { e.stopPropagation(); onToggleFav(); }}
                                                                                                                                                                                >
                                                                                                                                                                                        {isFav ? "❤️" : "🤍"}
                                                                                                                                                                                              </button>
                                                                                                                                                                                                    {pct > 0 && <div className="discount">{pct}% -</div>}
                                                                                                                                                                                                          {p.stock === 0 && <div className="soldout">نفد مؤقتًا</div>}
                                                                                                                                                                                                                <div className="info">
                                                                                                                                                                                                                        <h2>{p.name}</h2>
                                                                                                                                                                                                                                <p className="price">
                                                                                                                                                                                                                                          <span>{p.price} ج.م</span>
                                                                                                                                                                                                                                                    {pct > 0 && <span className="old">{p.oldPrice} ج.م</span>}
                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                    <p className="shop">
                                                                                                                                                                                                                                                                              {st ? st.name : ""} ⭐ {p.rating} {st && st.verified && <span className="verified">✔</span>}
                                                                                                                                                                                                                                                                                      </p>
                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                  export default ProductCard;