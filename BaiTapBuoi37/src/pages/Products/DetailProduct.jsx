import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../plugins/axios";
import HeaderBar from "../../components/HeaderBar";

const DetailProduct = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const getProductById = async () => {
    const { data } = await api.get(`products/${+id}`);

    setProduct(data);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <>
      <HeaderBar />

      <main className="container detail-page">
        {!product ? (
          <div>Loading san pham...</div>
        ) : (
          <div className="detail-card">
            <div className="detail-image">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="detail-info">
              <div>
                <span className="detail-category">{product.category}</span>
                <h1>{product.title}</h1>
                <div className="detail-rating">
                  ⭐ {product.rating?.rate} · {product.rating?.count} reviews
                </div>
                <div className="detail-price">${product.price}</div>
                <p className="detail-description">{product.description}</p>
              </div>

              <div>
                <div className="detail-actions">
                  <button className="btn-primary">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default DetailProduct;
