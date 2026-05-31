const $ = document.querySelector.bind(document);

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    return data;
  } catch (e) {
    alert("get data failed");
  }
};

const renderProductList = async (products) => {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = products
    .map(
      (product) => `
      <div class="product-item" data-id="${product.id}">
        <div class="product-item-img">
          <img src="${product.image}" alt="" />
        </div>

        <p class="product-item-title">
          ${product.title}
        </p>

        <p class="product-item-star">
          <i class="fa-solid fa-star"></i>
          ${product.rating.rate}
          <span class="quantity-star">
            (${product.rating.count})
          </span>
        </p>

        <div class="product-item-footer">
          <p class="product-item-price">
            $${product.price}
          </p>

          <button title="Thêm vào giỏ hàng" class="btn-cart">
            <i class="bi bi-cart2"></i>
          </button>
        </div>
      </div>
    `,
    )
    .join("");
};

const renderCategoryList = (categories, onClick) => {
  const sidebarContent = document.querySelector(".sidebar-content");

  categories.forEach((category) => {
    const categorieItem = document.createElement("div");
    categorieItem.classList = "categorie-item active";
    categorieItem.innerText = category;

    categorieItem.addEventListener("click", () => {
      onClick(category);
    });

    sidebarContent.append(categorieItem);
  });
};

const init = async () => {
  const products = await getProducts();
  renderProductList(products);
  console.log(products);

  let categoryNames = [...products.map((p) => p.category)];
  categoryNames = new Set(categoryNames);
  categoryNames = Array.from(categoryNames);

  renderCategoryList(categoryNames, (categoryName) => {
    console.log(categoryName);

    const filteredProducts = products.filter(
      (p) => categoryName === p.category,
    );

    // filter products
    renderProductList(filteredProducts);
  });
};

init();
