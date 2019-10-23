var userArr =[

user1 = {
  isAdmin : true,
  email : 'user1@gmail.com'
},

user2 = {
    isAdmin : true,
    email : 'user2@gmail.com'
},

user3 = {
    isAdmin : false,
    email : 'user3@gmail.com'
}

];



function adminList(arr){
    var adminCount = 0;
    var adminArr = [];
    for(let x = 0; x < arr.length; x++){
        if(arr[x].isAdmin === true){
            adminCount ++;
            adminArr.push(arr[x]);
        }

    }
    return adminArr;
}

console.log(adminList(userArr));
