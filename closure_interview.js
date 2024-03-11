function a()
{
    var a=10;
    function b()
    {
        console.log(a);
    }
    return b;
}
a()(); // It is same as var z = a(); and console.log(a()) and z() ;

var z = a();
console.log(a());
z();