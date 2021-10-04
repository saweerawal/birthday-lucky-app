var dob         = document.querySelector("#dob");
var luckyNumber = document.querySelector("#lucky-number");
var checkbtn    = document.querySelector("#check-btn");
var result      = document.querySelector("#result");

function calculateSum(dateOfBirth)
{
   var sum=0;
   for(var index in dateOfBirth){
           sum = sum + Number(dateOfBirth[index]);
   }
   return sum;
}

function checkBirthdayLucky()
{
    var dateOfBirth = dob.value;
    var dateOfBirth = dateOfBirth.replaceAll("-","");
    var sum = calculateSum(dateOfBirth);
    var MyLuckyNumber = Number(luckyNumber.value);

    if(MyLuckyNumber == "" || sum == ""){
        result.innerText="Select date and lucky number"; 
    }
    else if(MyLuckyNumber <= 0){
        result.innerText="Enter a positive integer number";
    }
    else{
        if(sum%MyLuckyNumber===0){
            result.innerText="lucky number is lucky 🤩";
        }
        else{
            result.innerText="lucky number is not so lucky 😟";
        }
    }

}


checkbtn.addEventListener("click", checkBirthdayLucky);


