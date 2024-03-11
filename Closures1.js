function x()
{
    var a=20;
    function y()
    {
        console.log(a);
    }
    return y;
}
var t = x();
console.log(t);
t();
