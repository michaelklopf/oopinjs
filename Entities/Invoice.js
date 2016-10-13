import Document from './Document';

export default class Invoice extends Document {
  constructor(archived, documentNo, image, supplierAddress, supplierNo, currency, vat) {
    super(archived, documentNo, image, supplierAddress, supplierNo);
    this._currency = currency;
    this._vat = vat;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get vat() {
    return this._vat;
  }

  set vat(vat) {
    this._vat = vat;
  }

  // direct access of properties
  toString() {
    var documentString = super.toString();
    return "\n" + documentString + "\n" +
      "\nThis is invoice class\n" +
      "Currency: " + this._currency + "\n" +
      "Vat: " + this._vat;
  }
};
