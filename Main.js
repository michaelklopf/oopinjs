import SalesOrder from './Entities/SalesOrder';
import Invoice from './Entities/Invoice';
import OrderResponse from './Entities/OrderResponse';
import Position from './Entities/Position';

let invoice = new Invoice(true, "12345", "imagedata", "Codeallee 10, 1010 Codestadt", "101010", "EUR", "19");
console.log("invoice object", invoice);
console.log(invoice.toString());

let position1 = new Position(7, "565656", "1", "14");
let position2 = new Position(4, "121212", "2", "22");
let positions = [position1, position2];
let salesOrder = new SalesOrder(false, "889988", "imagedataSO", "Wunderweg 2, 78787 Wunderstadt", "777777", "2016-09-23", "123321", positions);
console.log("sales order object", salesOrder);
console.log(salesOrder.toString());

let position1Or = new Position(2, "111111", "1", "5");
let position2Or = new Position(2, "222222", "2", "7");
let positionsOr = [position1Or, position2Or];
let orderResponse = new OrderResponse(false, "123123", "imagedataOR", "Awestreet 4, 1122 Awetown", "989898", "2016-09-23", "098890", positionsOr);
console.log(orderResponse.toString());
