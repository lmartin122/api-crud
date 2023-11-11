const productsSchema = require('../models/products');

module.exports.getById = function(req,res) {
    const { id } = req.params;
    console.log('producto por id:', id);
    productsSchema.find({_id: id})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
}

module.exports.getByNombre = function(req,res) {
    const { name } = req.params;
    console.log('producto por nombre:', name);
    productsSchema.find({name: name})
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
}

module.exports.putById = function(req,res) {
    const { id } = req.params;
    const {name, brand, qty} = req.body;
    productsSchema.updateOne({_id: id}, {$set: {name,brand,qty}})
        .then((data) => {res.json(data)})
        .catch((error) => {res.json({message:error})})
}

module.exports.getAllProducts = function(req,res) {
    productsSchema.find()
        .then((data) => {res.json(data)})
        .catch((error) => {res.json({message:error})})
}

module.exports.DeleteById = function(req,res) {
    const { id } = req.params;
    productsSchema.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => {res.json({message:error})})
}

module.exports.AddProduct = function(req,res) {
    data = req.body
    console.log(data.weight.value);
    newProduct = new productsSchema({
        name: data.name,
        brand: data.brand,
        qty: data.qty,
        weight: {
            uom: data.weight.uom,
            value: data.weight.value
        },
        price: data.price,
        imageUrl: data.imageUrl
    })
    newProduct.save()
        .then( (data) => {res.json(data)})
        .catch((err) => {res.json(err)})

}