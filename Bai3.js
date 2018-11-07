var result = confirm('Nhan "OK" va bat dau nhap lan luot hai so a, b');
if(result == true) {
    var a = prompt('Nhap a vao o ben duoi va an "OK"');
    var b = prompt('Nhap b vao o ben duoi va nhan "OK"');
    var c = a % b;
    if (c == 0) {
        alert(a + " la boi so cua " +  b);
    }
    else {

        alert(a + " khong la boi so cua " +  b);
    }

}
else
        alert("Deo thich lam thi thoi");
