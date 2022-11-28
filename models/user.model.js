const db= require('../common/connect');

const User =function(user){
    this.id=user.id;
    this.name=user.name;
    this.username=user.username;
    this.password=user.password;
    this.phone=user.phone;
    this.address=user.address;
}

User.login=function(username,password,result){
    db.query('SELECT * FROM khachhang WHERE TaiKhoan=? AND MatKhau=?',[username,password],function(err,user){
        if(err){
            console.log('user login err: '+err);
        } else if(user.length>0){
            result(user[0]);
        }
        else {
            result('tai khoan hoac mat khau khong chinh xac');
        }
    })
}

User.register=function(data,result){
    db.query('INSERT INTO khachhang SET ?',data,function(err,user){
        if(err){
            console.log('user register err: '+err);
        }
        else {
            result({...data});
        }
    })
}
module.exports=User;