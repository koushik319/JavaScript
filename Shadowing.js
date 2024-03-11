
// Shadowing with var

var a =100;
{
    var a=10;
    var b =20;
    var c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);

// o/p will be 10,20,30,10 beacause both the value of a points to the same memory that is global memory.000000000000000000