const Image = require('../models/image.model');

exports.read=function(req, res){
    Image.read(function(data){
<<<<<<< HEAD
        res.send(data);
=======
        res.send({result: data});
>>>>>>> parent of 5db9ed6 (test)
    })
}

exports.getById=function(req, res){
    const data=req.params.slug;
    Image.getById(data,function(response){
        res.send({result: response});
    })
}

exports.create=function(req, res){
    const data=req.body;
    Image.create(data,function(response){
        res.send({result:response});
    })
};

// exports.update=function(req, res){
//     const data=req.body;
//     Image.update(data,function(response){
//         res.send({result:response});
//     })
// };

// exports.delete=function(req, res){
//     const data=req.body;
//     Image.delete(data,function(response){
//         res.send({result:response});
//     })
// };