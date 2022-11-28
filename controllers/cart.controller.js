const Cart = require('../models/cart.model');

exports.read=function(req, res){
    Cart.read(function(data){
        res.send({result: data});
    });
}

exports.create=function(req, res){
    const data=req.body;
    Cart.create(data,function(response){
        res.send({result:response});
    })
};

exports.update=function(req, res){
    const data=req.body;
    Cart.update(data,function(response){
        res.send({result:response});
    })
};

exports.delete=function(req, res){
    const data=req.body;
    Cart.delete(data,function(response){
        res.send({result:response});
    })
};

exports.getByType=function(req, res){
    const data=req.params.slug;
    Cart.getByType(data,function(response){
        res.send({result:response});
    })
};