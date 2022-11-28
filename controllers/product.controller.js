const Product = require('../models/product.model');

exports.read=function(req, res){
    Product.read(function(data){
        res.send({result: data});
    });
}

exports.create=function(req, res){
    const data=req.body;
    Product.create(data,function(response){
        res.send({result:response});
    })
};

exports.update=function(req, res){
    const data=req.body;
    Product.update(data,function(response){
        res.send({result:response});
    })
};

exports.delete=function(req, res){
    const data=req.body;
    Product.delete(data,function(response){
        res.send({result:response});
    })
};

exports.getByType=function(req, res){
    const data=req.params.slug;
    Product.getByType(data,function(response){
        res.send({result:response});
    })
};