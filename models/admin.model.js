const db= require('../common/connect');

const Admin =function(admin){
    this.username=user.username;
    this.password=user.password;
}

Admin.login=function(username,password,result){
    db.query('SELECT * FROM admin WHERE TaiKhoan=? AND MatKhau=?',[username,password],function(err,admin){
        if(err){
            console.log('admin login err: '+err);
        } else if(admin.length>0){
            result(admin[0]);
        }
        else {
            result('Failed to login');
        }
    })
}
module.exports=Admin;