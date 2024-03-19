let users=["Eric","John","Admin","Joey","Katrina","Rachel"];

for (var index in users){
    if (users[index]=="Admin"){
        console.log("Hello Admin Would hou like to see STATUS Report")
    }
    else{
        console.log("Hello",users[index],"Welcome aboard\n")
    }
}