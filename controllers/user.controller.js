const User = require('../models/user.model');

exports.login=function(req, res){
    const username = req.body.TaiKhoan;
    const password = req.body.MatKhau;
    User.login(username,password,function(result){
        res.send({result: result});
    });
}

exports.register=function(req, res){
    const data=req.body;
    User.register(data,function(result){
        res.send({result: result});
    });
}

exports.count=function(req, res){
    const data=req.body;
    User.count(data,function(result){
        res.send({result: result});
    });
}
exports.read=function(req, res){
    User.read(function(result){
        res.send({result: result});
    });
}