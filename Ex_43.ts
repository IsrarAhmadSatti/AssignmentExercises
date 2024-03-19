function show_Magicians(magician:string[])
{
    for (var index in magician)
    {
        console.log(magician[index])
    }
}
function make_Great(magician:string[])
{
    for(var index in magician)
    {
        magician[index]+=" The Great"
    }
return magician
}
const mag=["Lionel shrike","Jack Wilder","Xavi"]
var magician=make_Great(mag)
show_Magicians(mag)
show_Magicians(magician)


