const db= require('../common/connect');

const BillItem =function(billItem){
   
}

BillItem.read=function(result){
    db.query('SELECT * FROM donhangsp',function (err,billItems){
    if(err)
    {
        console.log('err BillItem model read \n'+err);
    }
    else{
        result(billItems);
    }});
}

BillItem.create=function(data,result){
    db.query("INSERT INTO donhangsp SET ?",data,function (err,BillItem){
        if(err){
            console.log('err BillItem model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

BillItem.update=function(data,result){
    db.query("UPDATE donhangsp SET Gia=?,SoLuong=? WHERE MaDonHangSP=? AND MaSanPham=?",[data.Gia,data.SoLuong,data.MaDonHangSP,data.MaSanPham],function (err,type){
        if(err){
            console.log('err BillItem model update\n'+err);
        }
        else{
            result({...data});
        }
    })
}

BillItem.delete=function(data,result){
    db.query("DELETE FROM donhangsp WHERE MaDonHangSP=?,MaSanPham=?",[data.MaDonHangSP,data.MaSanPham],function (err,billItems){
        if(err){
            console.log('err BillItem model DELETE\n'+err);
        }
        else{
            result({...data});
        }
    })
}

BillItem.getByType=function(data,result){
    db.query("SELECT * FROM donhangsp WHERE MaDonHangSP=? ",data,function (err,BillItem){
        if(err){
            console.log('err BillItem model get by type\n'+err);
        }
        else{
            result(BillItem);
        }
    })
}
module.exports = BillItem;