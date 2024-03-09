var x = prompt("Nhập x = ");
var y = prompt("Nhập y = ");

confirm(typeof x);
confirm(typeof y);


function cong(a, b){
    //
    //
    let kq = parseInt(a) + parseInt(b);
    return kq;
}

var kq = cong(x, y);

confirm(kq);


confirm(cong(9, 6));