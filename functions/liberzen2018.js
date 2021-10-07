require("dotenv").config();
const Airtable = require('airtable-node');
 
const apiKey = process.env.API_KEY;


const airtable = new Airtable({ apiKey: apiKey})
  .base('appZrSYuCLtfDeFr6')
  .table('2018')

exports.handler = async (event, context) => {
    try{
        const {records} = await airtable.list();
        const data = records.map(item=>{
            const {id,fields:{month,desc,image}}=item;
            return {id,image,desc,month}
        })
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };

    }catch{
        return {
            statusCode: 500,
            body: "server error",
        };
    }
};
