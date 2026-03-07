 let issueALLCard = [];


function filterBtn(id){
    const tabAll = document.getElementById("tabAll");
    const tabOpen = document.getElementById("tabOpen");
    const tabClosed = document.getElementById("tabClosed");



    tabAll.classList.remove("bg-blue-700","text-white");
    tabOpen.classList.remove("bg-blue-700","text-white");
    tabClosed.classList.remove("bg-blue-700","text-white");

    
    const getId = document.getElementById(id);
    getId.classList.add("bg-blue-700","text-white")

   
} 


filterBtn("tabAll");


// all issues data get api
const allIssuesApi = async () => {
    //removeSpinner(true);

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    const data = await res.json();
    issueALLCard = data.data;

    displayAllIssuesData(issueALLCard);

   // removeSpinner(false);

}



 const displayAllIssuesData = (issues) =>{
   
        issues.forEach(element => {
            console.log(element)
        })
       


 }
  //displayAllIssuesData();

 allIssuesApi();