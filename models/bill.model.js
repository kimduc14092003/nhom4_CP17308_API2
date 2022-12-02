const db= require('../common/connect');

const Bill =function(bill){
   
}

Bill.read=function(result){
    db.query('SELECT * FROM donhang',function (err,bills){
    if(err)
    {
        console.log('err Bill model read \n'+err);
    }
    else{
        result(bills);
    }});
}

Bill.create=function(data,result){
    db.query("INSERT INTO donhang SET ?",data,function (err,bill){
        if(err){
            console.log('err Bill model create\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Bill.update=function(data,result){
    db.query("UPDATE donhang SET LichSuDonHang=?,ThoiGian=? WHERE MaDonHang=?",[data.LichSuDonHang,data.ThoiGian,data.MaDonHang],function (err,type){
        if(err){
            console.log('err Bill model update\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Bill.delete=function(data,result){
    db.query("DELETE FROM donhang WHERE MaDonHang=? ",data.MaDonHang,function (err,bills){
        if(err){
            console.log('err Bill model DELETE\n'+err);
        }
        else{
            result({...data});
        }
    })
}

Bill.getByUserID=function(data,result){
    db.query("SELECT * FROM donhang WHERE MaKhachHang=? ",data,function (err,bill){
        if(err){
            console.log('err Bill model get by UserID\n'+err);
        }
        else{
            result(bill);
        }
    })
}
module.exports = Bill;