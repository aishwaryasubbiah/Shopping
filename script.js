// Script to insert the data into Orders, product and customer Collection

const { ObjectId } = require('mongodb');
const dbConnect = require('./middlewares/dbConnect');
let db;

async function dataLoad() {
    db = await dbConnect.connectDb();
    let orders = [{
        "product_id": new ObjectId("666fc7da73b592fd4a87b877"),
        "customer_id": new ObjectId('666fc7da73b592fd4a87b889'),
        "date_of_sale": "2023-12-15",
        "quanity_sold": 2,
        "shipping_cost": 10.00,
        "payment_method": "Credit Card"
   }];
   const product = [
        {
            "_id": new ObjectId("666fc7da73b592fd4a87b877"),
           "product_name": "Iphone",
           "category": "Electronics",
           "unit_price": 50000,
           "discount": 15.00
        }
   ];
   const customer = [
    {
        "_id": new ObjectId('666fc7da73b592fd4a87b889'),
       "customer_name": "Aishwarya",
       "customer_address": "KK Nagar, Madurai"
    }
];
    orders = orders.map((currOrder) => {
       let eachOrder = currOrder;
       const productData = product.find((eachPro) => eachPro._id == eachOrder.product_id);
       const currTotalPrice = productData.unit_price + eachOrder.shipping_cost;
       const discount = currTotalPrice * (product.discount/100);
       const totalPrice = currTotalPrice - discount;
       eachOrder.total_price = totalPrice;
       return eachOrder;
   });
    console.log('db', db);
    await db.collection('orders').insertMany(orders);
    await db.collection('products').insertMany(product);
    await db.collection('customer').insertMany(customer);
}
// dataLoad();

exports.dataLoad = dataLoad;

