import Document from './Document';

export default class OrderResponse extends Document {
  constructor(archived, documentNo, image, supplierAddress, supplierNo, orderNo, positions) {
    super(archived, documentNo, image, supplierAddress, supplierNo);
    this._orderNo = orderNo;
    this._positions = positions;
  }

  get orderNo() {
    return this._orderNo;
  }

  set orderNo(orderNo) {
    this._orderNo = orderNo;
  }

  get positions() {
    return this._positions;
  }

  set positions(positions) {
    this._positions = positions;
  }

  // access via getters and setters
  toString() {
    let positionString = "";
    for (let position of this._positions) {
      positionString = positionString + position.toString();
    }
    return "\n" + super.toString() + "\n" +
      "\nThis is order response class\n" +
      "Order no: " + this.orderNo + "\n" +
      "\nPositions for order response\n" +
      positionString;
  }
};
