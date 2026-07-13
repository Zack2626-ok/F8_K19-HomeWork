import { v7 as uuidv7 } from "uuid";

export class Product {
  private _id: string = uuidv7();

  constructor(
    private _name: string,
    private _price: number,
    private _stock: number,
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get price(): number {
    return this._price;
  }
  get stock(): number {
    return this._stock;
  }

  set name(name: string) {
    this._name = name;
  }

  set price(price: number) {
    if (price < 0) {
      throw new Error("price ko dc am");
    }

    this._price = price;
  }

  increaseStock(quantity: number) {
    if (quantity < 0) {
      throw new Error("quantity ko dc am");
    }

    this._stock += quantity;
  }

  decreaseStock(quantity: number): void {
    if (quantity < 0) {
      throw new Error("quantity ko dc am");
    }

    if (this._stock - quantity < 0) {
      throw new Error("insufficient stock");
    }

    this._stock -= quantity;
  }

  toString() {
    return `Product [id: '${this.id}', name: '${this.name}', price: '${this.price}', stock: '${this.stock}'] `;
  }
}
