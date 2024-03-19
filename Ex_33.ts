let numarr=[1,2,3,4,5,6,7,8,9];

for (var index in numarr){
    if (numarr[index]==1){
        console.log("1st")
    }
    if (numarr[index]==2){
        console.log("2nd")
    }
    if (numarr[index]==3){
        console.log("3rd")
    }
    if (numarr[index]>3){
        console.log(numarr[index],"th")
    }     
}