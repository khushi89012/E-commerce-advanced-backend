

const mongoose = require('mongoose');

require('dotenv').config();


const connect = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true}
).then(() => {
    console.log("connected to db");
}
).catch(err => {
    console.log(err);
}
);

module.export = connect;













// const { MongoClient } = require('mongodb');
// const mongoose = require('mongoose');
// require('dotenv').config();


// async function main() {
//     const client = await MongoClient.connect(process.env.MONGO_URL, { useNewUrlParser: true });

//     try {
    
//         await client.connect();

       
//         await console.log(printCheapestSuburbs(client, '07/14/2021', 'Product'));

//     }
//     catch (err) {
//         console.error(err);
//     }
// }

// main().catch(console.error);


// async function printCheapestSuburbs(client,date,feild) {
//     const pipeline = [
//             {
//               '$match': {
//                 'Date': {
//                     '$gte': new Date(date)
//                 }
//               }
//             }, {
//               '$count': feild
//             }
          
//     ]
  
//     const aggCursor = client.db("shopping").collection("orders").aggregate(pipeline);

//     await aggCursor.forEach(order=> {
//         console.log(order.feild + ": " + order.count);
        
      
//     });
// }
