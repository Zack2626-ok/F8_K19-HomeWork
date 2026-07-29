import { useEffect, useState } from "react";
import api from "../../plugins/axios";
import TestComponent from "../../components/TestComponent.jsx";
import ProductCard from "../../components/ProductCard.jsx";
import HeaderBar from "../../components/HeaderBar.jsx";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const nav = useNavigate();

  const getProducts = async () => {
    const { data } = await api.get("products");
    setProducts(data);
  };

  const onAddToCart = (productId) => {
    if (productsInCart.includes(productId)) return;
    setProductsInCart([...productsInCart, productId]);
  };

  const onNavigate = (productId) => {
    nav(`/product/${productId}`);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HeaderBar total={productsInCart.length} />

      <main className="container">
        <h1>Products</h1>
        <TestComponent num={2} name={"test 1"} />
        <TestComponent num={100} name={"test 2"} />

        <h2>Sản phẩm nổi bật</h2>
        <div className="product-grid">
          {products.map((p) => {
            console.log(p);

            if (p.rating.rate >= 4) {
              return (
                <ProductCard
                  product={p}
                  onClickAddToCard={onAddToCart}
                  onClickNavigate={onNavigate}
                />
              );
            }
          })}
        </div>

        <h2>Tất cả sản phẩm</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              product={p}
              onClickAddToCard={onAddToCart}
              onClickNavigate={onNavigate}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Products;
