const dbConnect = require('../middlewares/dbConnect');

const customerAnalysisService = async(input) => {
    const db = await dbConnect.connectDb();
    let result = {};

    let orderCount = await db.collection('orders').find({
        // 'date_of_sale': { 
        //     $and: [
        //         {$gte: new Date(input.date_start_range)}, 
        //         {$lte: new Date(input.date_end_range) }    
        //     ] 
        // }   
    });
    orderCount = await (orderCount.toArray((eachItem) => eachItem));
    console.log('orderCount: ', orderCount);
    result.orders_count = orderCount.length;
    let orderValue = 0;
    orderCount.forEach((eachOrder) => orderValue += eachOrder.total_price); // total_value is computed and stored in orders collection while inserting the orders in db
    
    result.average_order_value = (orderValue / orderCount) * 100;

    let customerData = await db.collection('orders').aggregate(
        [
            {
                '$match': {
                    'date_of_sale': { 
                        $and: [
                            {$gte: input.date_start_range}, 
                            {$lte: input.date_end_range }    
                        ] 
                    }     
                }
            },
            {
              '$lookup': {
                'from': 'customers', 
                'localField': 'customer_id', 
                'foreignField': '_id', 
                'as': 'result'
              }
            }, {
              '$unwind': {
                'path': '$result'
              }
            }, {
              '$group': {
                '_id': '$result._id', 
                'customer_count': {
                  '$sum': 1
                }
              }
            }
        ]
    );
    let customerCount = 0;
    customerData = await (customerData.toArray((eachItem) => eachItem));
    console.log('customerData: ', customerData);
    customerData.forEach((eachCust) => customerCount += eachCust.customerCount);
    result.customers_count = customerCount;


    return result;
}

exports.customerAnalysisService = customerAnalysisService;