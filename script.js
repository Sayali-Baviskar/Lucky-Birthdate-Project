const date= document.querySelector("#bdate");
const luckyno= document.querySelector("#luckyno");
const btn= document.querySelector("#btnsubmit");
const displayMessage = document.querySelector("#output-container");

function compareValues(dob, lno, sum)
{
    if(sum % lno ==0)
    // console.log("Lucky NO");
    displayMessage.innerHTML="Yayy! It's a Lucky NO";
    else
    // console.log("Not a Lucky No");
    displayMessage.innerHTML="Ohh! It's Not a Lucky NO";
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
