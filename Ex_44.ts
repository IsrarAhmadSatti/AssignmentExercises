function sandwich(arr:string[])
{
    console.log("Sandwich you want to order has: ")
    for (var ind in arr)
    {
        console.log(arr[ind])
    }
}
let items=["egg","mayo"]
sandwich(items)
let additems=["chicken","cheese","bread"]
sandwich(additems)