export default class Position {
  constructor(amount, materialNo, posNo, price) {
    this._amount = amount;
    this._materialNo = materialNo;
    this._posNo = posNo;
    this._price = price;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get materialNo() {
    return this._materialNo;
  }

  set materialNo(materialNo) {
    this._materialNo = materialNo;
  }

  get posNo() {
    return this._posNo;
  }

  set posNo(posNo) {
    this._posNo = posNo;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  toString() {
    return "\nPosition class\n" +
      "Pos no: " + this.posNo + "\n" +
      "Material no: " + this.materialNo + "\n" +
      "Amount: " + this.amount + "\n" +
      "Price: " + this.price + "\n";
  }
};
