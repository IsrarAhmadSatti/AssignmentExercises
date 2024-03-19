let GuestList=["Ishaq Madni","Dr Israr","Ali"];

GuestList[2]="Rashid";

console.log("I would like to invite ","\"",GuestList[0],"\"","for dinner")
console.log("Please accept my invitation for dinner","\"",GuestList[1],"\"")
console.log("Would you care to have dinner","\"",GuestList[2],"\"")
GuestList.unshift("Afzal");
GuestList.push("zubair");
console.log(GuestList)
