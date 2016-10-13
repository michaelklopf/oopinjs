export default class Document {
  constructor(archived, documentNo, image, supplierAddress, supplierNo) {
    this._archived = archived;
    this._documentNo = documentNo;
    this._image = image;
    this._supplierAddress = supplierAddress;
    this._supplierNo = supplierNo;
  }
  
  get archived() {
    return this._archived;
  }

  set archived(archived) {
    this._archived = archived;
  }

  get documentNo() {
    return this._documentNo;
  }

  set documentNo(documentNo) {
    this._documentNo = documentNo;
  }

  get image() {
    return this._image;
  }

  set image(image) {
    this._image = image;
  }

  get supplierAddress() {
    return this._supplierAddress;
  }

  set supplierAddress(supplierAddress) {
    this._supplierAddress = supplierAddress;
  }

  get supplierNo() {
    return this._supplierNo;
  }

  set supplierNo(supplierNo) {
    this._supplierNo = supplierNo;
  }

  // direct access of properties
  toString() {
    return "This is document class\n" +
      "Archived: " + this._archived + "\n" +
      "Dcoument no: " + this._documentNo + "\n" +
      "Supplier address: " + this._supplierAddress + "\n" +
      "Supplier no: " + this._supplierNo;
  }

  archive() {
    this._archived = true;
  }

  showImage() {
    console.log(this._image);
  }
};
