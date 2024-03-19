let GuestList=["Ishaq Madni","Israr","Ali"];

GuestList[2]="Rashid";
GuestList.unshift("Afzal");
GuestList.push("zubair");
console.log(GuestList)
for (let i=0; i<3;i++){
    console.log("I am sorry for inconvenience the Dinner has been canceled Mr.",GuestList.pop())
    console.log("we will meet another time please.......")       
}
console.log(GuestList)