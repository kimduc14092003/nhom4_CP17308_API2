const db= require('../common/connect');

const CartItem =function(cartItem){
    this.cartID=cart.cartID;
    this.productId=cart.productId;
    this.quantity=cart.quantity;
    this.price=cart.price;
}

CartItem.read=function(result){
    db.query('SELECT * FROM giohangsp',function (err,cartItems){
    if(err)
    {
        console.log('err CartItem model read \n'+err);
    }
    else{
        result(cartItems);
    }});
}

CartItem.create=function(data,result){
    db.query("INSERT INTO giohangsp SET ?",data,function (err,cartItem){
        if(err){
            console.log('err CartItem model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

CartItem.update=function(data,result){
    db.query("UPDATE giohangsp SET Soluong=?,GiaSP=? WHERE MaGioHang=? AND MaSanPham=?",[data.Soluong,data.GiaSP,data.MaGioHang,data.MaSanPham],function (err,type){
        if(err){
            console.log('err CartItem model update\n'+err);
        }
        else{
            result({...data});
        }
    })
}

CartItem.delete=function(data,result){
    db.query("DELETE FROM giohangsp WHERE MaGioHang=?,MaSanPham=?",[data.MaGioHang,data.MaSanPham],function (err,cartItems){
        if(err){
            console.log('err CartItem model DELETE\n'+err);
        }
        else{
            result({...data});
        }
    })
}

CartItem.getByType=function(data,result){
    db.query("SELECT * FROM giohangsp WHERE MaGioHang=? ",data,function (err,cartItem){
        if(err){
            console.log('err CartItem model get by type\n'+err);
        }
        else{
            result(cartItem);
        }
    })
}
module.exports = CartItem;