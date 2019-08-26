import axios from 'axios';
require("dotenv").config()

const endpoint = `https://api.mlab.com/api/1/databases/wfddev/collections/recipes?apiKey=${process.env.MLAB_SECRET}`;

exports.handler = async (event, context) => {
  try {
    const { data } = await axios.get(endpoint)
    const jsonData = await JSON.stringify(data)
    return {
      statusCode: 200,
      body: jsonData
    }
  }
  catch {error => { console.log(error)}}
}