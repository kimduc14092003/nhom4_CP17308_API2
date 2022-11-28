const db= require('../common/connect');

const Product =function(product){
    this.id=product.id;
    this.name=product.name;
    this.price=product.price;
    this.description=product.description;
    this.type=product.type;
    this.amount=product.amount;

}

Product.read=function(result){
    db.query('SELECT * FROM sanpham',function (err,products){
    if(err)
    {
        console.log('err Product model read \n'+err);
    }
    else{
        console.log('not err Product model read \n');
        result(products);
    }});
}

Product.create=function(data,result){
    db.query("INSERT INTO sanpham SET ?",data,function (err,product){
        if(err){
            console.log('err Product model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Product.update=function(data,result){
    db.query("UPDATE sanpham SET TenSanPham= ?,Gia=?,MoTa=?,MaLoai=?,SoLuong=? WHERE MaSanPham=?",[data.TenSanPham,data.Gia,data.MoTa,data.MaLoai,data.SoLuong,data.MaSanPham,],function (err,type){
        if(err){
            console.log('err Product model update\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Product.delete=function(data,result){
    db.query("DELETE FROM sanpham WHERE MaSanPham=? ",data.MaSanPham,function (err,products){
        if(err){
            console.log('err Product model DELETE\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Product.getByType=function(data,result){
    db.query("SELECT * FROM sanpham WHERE MaLoai=? ",data,function (err,products){
        if(err){
            console.log('err Product model get by type\n'+err);
        }
        else{
            result({products});
        }
    })
}
module.exports = Product;