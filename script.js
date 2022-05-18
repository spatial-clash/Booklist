function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    //document.getElementById("result").innerHTML = "Result: Interest paid "+interest+" at a rate of "+rate+"% over "+years+" Year(s), ending in "+year+"";
    document.getElementById("result").innerHTML = "Interest paid: ";
    document.getElementById("interest").innerHTML = interest;
    document.getElementById("srate").innerHTML = "at a rate of: ";
    document.getElementById("percentage").innerHTML = rate;
    document.getElementById("syears").innerHTML = "for ";
    document.getElementById("syear").innerHTML = years;
    document.getElementById("syearss").innerHTML = " year(s)";
    document.getElementById("sdate").innerHTML = "ending in: ";
    document.getElementById("sdates").innerHTML = year;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}  
function validatep() {
    var principal = document.getElementById("principal").value;
    if (Math.sign(principal) > 0) {
        return true;
    } 
    else {
        alert("Please enter a postive non-zero number")
        document.getElementById("principal").focus();
        return false;
    }
  }
