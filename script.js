// const dateOfBirth = document.querySelector("#bdate");
// const luckyNumber = document.querySelector("#luckyno");
// const checkButton = document.querySelector("#btnsubmit");
// const displayMessage = document.querySelector("#output-container");

// const calculateSum = (date) => {
//   let sum = 0;
//   date = date.replaceAll("-", "");
//   for (let digit of date) {
//     sum = sum + Number(digit);
//   }
//   return sum;
// };

// const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
//   console.log(sumOfDate, numberToCheck);
//   if (sumOfDate % numberToCheck === 0) {
//     return showMessage(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
//   }
//   showMessage(`${numberToCheck} is not that lucky 😕`);
// };

// const showMessage = (message) => {
//   displayMessage.innerText = message;
// };

// checkButton.addEventListener("click", () => {
//   const date = dateOfBirth.value;
//   const numberToCheck = luckyNumber.value;
//   if (date && numberToCheck) {
//     const sumOfDate = calculateSum(date);
//     checkIsNumberLucky(sumOfDate, numberToCheck);
//   } else {
//     showMessage("Please enter both the fields");
//   }
// });





const date= document.querySelector("#bdate");
const luckyno= document.querySelector("#luckyno");
const btn= document.querySelector("#btnsubmit");
const displayMessage = document.querySelector("#output-container");



function compareValues(dob, lno, sum)
{
    if(sum % lno ==0)
    // console.log("Lucky NO");
    displayMessage.value="Lucky NO";
    else
    // console.log("Not a Lucky No");
    displayMessage.value="Not a Lucky NO";
}

function Sumation(dob)
{
    let sum=0
    dob=dob.replaceAll("-","");
    // console.log(dob);
    for(let i=0; i<dob.length; i++)
    {
        sum=sum+ Number(dob.charAt(i));
    }
    return sum;
}

function checkBirthDateLucky()
{
    
    const dob= date.value;
    // console.log(dob)
    const lno=luckyno.value;
    const sum= Sumation(dob);

    if(sum && dob)
    {
        compareValues(dob, lno, sum);
    }
    else
    {
        displayMessage.value="Please Enter the both Fields";
    }
}



 btn.addEventListener("click", checkBirthDateLucky);

// console.log(dob.value)
// console.log(luckyno.value)
// console.log(12)
