const db= require('../common/connect');

const Type =function(type){
    this.id=user.id;
    this.name=user.name;
}

Type.read=function(result){
    db.query('SELECT * FROM loaisanpham',function (err,types){
    if(err)
    {
        console.log('err Type model read \n'+err);
    }
    else{
        result(types);
    }});
}

Type.create=function(data,result){
    db.query("INSERT INTO loaisanpham SET ?",data,function (err,types){
        if(err){
            console.log('err Type model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Type.update=function(data,result){
    db.query("UPDATE loaisanpham SET TenLoai= ? WHERE MaLoai=?",[data.TenLoai,data.MaLoai],function (err,courses){
        if(err){
            console.log('err Type model update\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Type.delete=function(data,result){
    db.query("DELETE FROM loaisanpham WHERE MaLoai=? ",data.MaLoai,function (err,courses){
        if(err){
            console.log('err Type model DELETE\n'+err);
        }
        else{
            result({...data});
        }
    })
}
module.exports = Type;