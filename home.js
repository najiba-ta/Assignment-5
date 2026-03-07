 const issueCount = document.getElementById("issueCount");
 
 let issueALLCard = [];
  const allCardContainer = document.getElementById("issuesContainer");
  

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
        

    allCardContainer.innerHTML ="";

         issueCount.innerText=issues.length;
        issues.forEach(issue => {
            const div = document.createElement("div")

            div.innerHTML = `
        <div onclick="allActiveCard(${issue.id})"  class="issue-card h-full shadow-md py-2 flex flex-col rounded-md border-t-[4px] ${issue.status === "open" ? "border-[#22b780]" : "border-[#a855f7]"}">

                  <div class="p-[10px]  flex flex-col flex-grow space-y-3 border-b border-gray-300">
                            <!-- icon & media -->
                            <div class="flex justify-between">
                            ${issue.status === "open" ? `<img class="h-[30px] w-[30px] rounded-full" src="./assets/Open-Status.png" alt="">` : `<img class="h-[30px] w-[30px] rounded-full" src="./assets/Closed-Status.png" alt="">`}
                              
                                <p class="font-semibold text-sm px-4 py-1 rounded-2xl">
                         ${issue.priority === "high" ? `<span class="font-semibold text-sm px-4 py-1 bg-red-100 text-red-400 rounded-2xl"> ${issue.priority.toUpperCase()}</span>`

                : issue.priority === "medium"
                    ? `<span class="font-semibold text-sm px-4 py-1 bg-[#fff6d1] text-[#f59e0b] rounded-2xl">${issue.priority.toUpperCase()}</span>`
                    : `<span class="font-semibold text-sm px-4 py-1 bg-[#eeeff2] text-[#abb1bb] rounded-2xl">${issue.priority.toUpperCase()}</span>`}
                                     </p>
                     </div>
                            <!--  Fix Navigation Menu  -->
                              <div class="min-h-[40px]">
                                  <p class="text-md font-semibold cursor-pointer">${issue.title}</p>
                              </div>
                            <!-- description -->
                            <div class="min-h-[40px]">
                                <p class="line-clamp-2 text-gray-500 text-xs">${issue.description}</p>
                            </div>
                            <!-- bug & help -->
                            <div class="flex flex-wrap gap-3 mt-auto">
                           
                          
                            </div>
                        </div>

                        <!-- footer -->
                        <div class=" flex justify-between  space-y-1 p-[14px] mt-auto">
                         <div>
                              <p class="text-[10px] text-gray-500">#${issue.id} by${issue.author}</p>
                            <p class="text-[10px] text-gray-500">Assignee: ${issue.assignee}</p>
                         </div>
                         <div>
                             <p class="text-[10px] text-gray-500 text-end">${new Date(issue.createdAt).toLocaleDateString()}</p>
                            <p class="text-[10px] text-gray-500">Updated: ${new Date(issue.updatedAt).toLocaleDateString()}</p>

                         </div>
                        
                        </div>

                    </div>
        
        `;
           allCardContainer.append(div)
        })
       
        


 }
  //displayAllIssuesData();

 allIssuesApi();

 //${bugAndHelpLabels(issue.labels)}

