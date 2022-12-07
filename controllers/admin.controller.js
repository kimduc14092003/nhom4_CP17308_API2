const Admin = require('../models/admin.model');

exports.login=function(req, res){
    const username = req.body.TaiKhoan;
    const password = req.body.MatKhau;
    Admin.login(username,password,function(result){
        res.send({result: result});
    });
}