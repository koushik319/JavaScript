function a()
{
    for( let i=0;i<=5;i++)
    {
        setTimeout(function()
        {
            console.log(i);
        },i*1000);
    }
    console.log("Hii ")
}
a();