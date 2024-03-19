function make_great(magi:string[]){
    for (var index in magi){
       magi[index]+=" The Great"
    }
    return magi
}
function show_magicians(arr:string[]){
    make_great(arr)
    for (var index in arr){
        console.log(arr[index])
    }
}

var magicians=["Shrike","coco","Lionel"];
show_magicians(magicians)