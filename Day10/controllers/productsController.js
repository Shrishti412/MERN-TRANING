const productModel = require('../models/productsModel.js');

const getAllProducts = async (req, res) => {
    // await fs_promise.readFile("./data.json", "utf-8");
    // const arr = JSON.parse(data).products;
    const data = await productModel.find();
    console.log(data);
    console.log(req.url)
    res.json({
        status: 'success',
        results: 0,
        data: {
            products: []
        }
    })
}


module.exports = {
    getAllProducts
}