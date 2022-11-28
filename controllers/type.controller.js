const Type = require('../models/type.model');

exports.read=function(req, res){
    Type.read(function(data){
        res.send({result: data});
    });
}

exports.create=function(req, res){
    const data=req.body;
    Type.create(data,function(response){
        res.send({result:response});
    })
};

exports.update=function(req, res){
    const data=req.body;
    Type.update(data,function(response){
        res.send({result:response});
    })
};

exports.delete=function(req, res){
    const data=req.body;
    Type.delete(data,function(response){
        res.send({result:response});
    })
};