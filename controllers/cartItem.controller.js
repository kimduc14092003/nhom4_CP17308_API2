const CartItem = require('../models/cartItem.model');

exports.read=function(req, res){
    CartItem.read(function(data){
        res.send({result: data});
    });
}

exports.create=function(req, res){
    const data=req.body;
    CartItem.create(data,function(response){
        res.send({result:response});
    })
};

exports.update=function(req, res){
    const data=req.body;
    CartItem.update(data,function(response){
        res.send({result:response});
    })
};

exports.delete=function(req, res){
    const data=req.body;
    CartItem.delete(data,function(response){
        res.send({result:response});
    })
};

exports.getByType=function(req, res){
    const data=req.params.slug;
    CartItem.getByType(data,function(response){
        res.send({result:response});
    })
};