import type { Product } from "./../model/Product.js";

interface ProductServiceI {
  addProduct(product: Product): void;
  // Partial = cho tất cả kiểu dữ liaauj là ?. => là kiểu dữ liệu ko bắt buộc
  updateProduct(id: string, data: Partial<Product>): void;
  deleteProduct(id: string): void;
  findById(id: string): Product | undefined;
  findByName(keyword: string): Product[];
  getAllProducts(): Product[];
  printProducts(): void;
}

export class ProductService implements ProductServiceI {
  private products: Product[] = [];

  addProduct(product: Product): void {
    const existProduct = this.findById(product.id);

    if (existProduct) {
      throw new Error(`product with id ${product.id} already exists`);
    }
    this.products.push(product);
  }

  updateProduct(id: string, data: Partial<Product>): void {
    const product = this.findById(id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    if (data.name !== undefined) {
      product.name = data.name;
    }
    if (data.price !== undefined) {
      product.price = data.price;
    }
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  findById(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  findByName(keyword: string): Product[] {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }

  getAllProducts(): Product[] {
    return this.products;
  }
  printProducts(): void {
    console.log("products: ");
    this.products.forEach((product) => {
      console.log(product.toString());
    });
  }
}
