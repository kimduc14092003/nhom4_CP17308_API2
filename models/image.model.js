const db= require('../common/connect');

const Image =function(image){
    this.id=product.id;
    this.link=product.link;
}

Image.read=function(result){
    db.query('SELECT * FROM hinhanh',function (err,product){
    if(err)
    {
        console.log('err Image model read \n'+err);
    }
    else{
        result(product);
    }});
}

Image.getById=function(data,result){
    db.query(' SELECT * FROM hinhanh WHERE 	MaSanPham= ?',data,function (err,product){
    if(err)
    {
        console.log('err Image model getById \n'+err);
    }
    else{
        result(product);
    }});
}

Image.create=function(data,result){
    db.query("INSERT INTO hinhanh SET ?",data,function (err,product){
        if(err){
            console.log('err Image model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

// Image.update=function(data,result){
//     db.query("UPDATE hinhanh SET Link= ? WHERE MaSanPham=?",[data.Link,data.MaSanPham],function (err,type){
//         if(err){
//             console.log('err Image model update\n'+err);
//         }
//         else{
//             result({...data});
//         }
//     })
// }

// Image.delete=function(data,result){
//     db.query("DELETE FROM hinhanh WHERE MaSanPham=? ",data.MaSanPham,function (err,courses){
//         if(err){
//             console.log('err Image model DELETE\n'+err);
//         }
//         else{
//             result({...data});
//         }
//     })
// }
module.exports = Image;