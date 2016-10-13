import Document from './Document';

export default class SalesOrder extends Document {
  constructor(archived, documentNo, image, supplierAddress, supplierNo, deliveryDate, orderNo, positions) {
    super(archived, documentNo, image, supplierAddress, supplierNo);
    this._deliveryDate = deliveryDate;
    this._orderNo = orderNo;
    this._positions = positions;
  }

  get deliveryDate() {
    return this._deliveryDate;
  }

  set deliveryDate(deliveryDate) {
    this._deliveryDate = deliveryDate;
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
      "\nThis is sales order class\n" +
      "Delivery date: " + this.deliveryDate + "\n" +
      "Order no: " + this.orderNo + "\n" +
      "\nPositions for sales order\n" +
      positionString;
  }
};
