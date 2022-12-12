const Bill = require('../models/bill.model');

exports.read=function(req, res){
    Bill.read(function(data){
        res.send({result: data});
    });
}

exports.create=function(req, res){
    const data=req.body;
    Bill.create(data,function(response){
        res.send({result:response});
    })
};

exports.update=function(req, res){
    const data=req.body;
    Bill.update(data,function(response){
        res.send({result:response});
    })
};

exports.delete=function(req, res){
    const data=req.body;
    Bill.delete(data,function(response){
        res.send({result:response});
    })
};

exports.getByUserID=function(req, res){
    const data=req.params.slug;
    Bill.getByUserID(data,function(response){
        res.send({result:response});
    })
};

exports.getByUserState=function(req, res){
    let data='';
    switch (req.url) {
        case '/delivering':
            data='Đang vận chuyển';
            break;
        case '/received':
            data='Đã nhận hàng';
            break;
        case '/canceled':
            data='Đã hủy';
            break;
        default:
            break;
    }
    Bill.getByUserState(data,function(response){
        res.send({result:response});
    })
};