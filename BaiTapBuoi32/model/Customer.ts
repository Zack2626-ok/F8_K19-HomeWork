import { v7 as uuidv7 } from "uuid";

export class Customer {
  private _id: string = uuidv7();

  constructor(
    private _name: string,
    private _phone: string,
    private _address: string,
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get phone(): string {
    return this._phone;
  }
  get address(): string {
    return this._address;
  }

  set name(name: string) {
    this._name = name;
  }

  updatePhone(phone: string) {
    if (phone.length === 10 && phone[0] === "0") {
      this._phone = phone;
    } else {
      throw new Error("Error phone");
    }
  }

  updateAddress(address: string) {
    this._address = address;
  }

  toString(): string {
    return `Customer { id: '${this.id}', name: '${this.name}', phone: '${this.phone}', address: '${this.address}' }`;
  }
}
