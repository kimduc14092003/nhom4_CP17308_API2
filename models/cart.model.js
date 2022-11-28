const db= require('../common/connect');

const Cart =function(cart){
    this.userId=cart.userId;
    this.productId=cart.productId;
    this.quantity=cart.quantity;
}

Cart.read=function(result){
    db.query('SELECT * FROM giohang',function (err,carts){
    if(err)
    {
        console.log('err Cart model read \n'+err);
    }
    else{
        result(carts);
    }});
}

Cart.create=function(data,result){
    db.query("INSERT INTO giohang SET ?",data,function (err,cart){
        if(err){
            console.log('err Cart model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Cart.update=function(data,result){
    db.query("UPDATE giohang SET TongGia=? WHERE MaGioHang=?",[data.TongGia,data.MaGioHang],function (err,type){
        if(err){
            console.log('err Cart model update\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Cart.delete=function(data,result){
    db.query("DELETE FROM giohang WHERE MaGioHang=? ",data.MaGioHang,function (err,carts){
        if(err){
            console.log('err Cart model DELETE\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Cart.getByType=function(data,result){
    db.query("SELECT * FROM giohang WHERE MaGioHang=? ",data,function (err,cart){
        if(err){
            console.log('err Cart model get by type\n'+err);
        }
        else{
            result({cart});
        }
    })
}
module.exports = Cart;