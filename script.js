function search()
{
    var author = document.getElementById("lastname").value;
    //document.getElementById("list").innerHTML = author;
    function author ();
    
}

function author(){
    connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=King').catch(err=>console.log(err.toString()));
    const axios = require('axios').default;
    const connectToURL = async(url)=>{
        const outcome = axios.get(url);
        let listOfWork = (await outcome).data.work;
        listOfWork.forEach((work)=>{
            resultlist = (work.titleAuth);
        });
    }
    document.getElementById("list").innerHTML = resultlist
}

 
function validatep() {
    var principal = document.getElementById("lastname").value;
    if (author !="") {
        return true;
    } 
    else {
        alert("Please Enter a Last Name")
        document.getElementById("author").focus();
        return false;
    }
  }