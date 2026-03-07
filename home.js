  // issue count dekhanur jonno
 const issueCount = document.getElementById("issueCount");
 
 //Shob cardgulu ke ei container vitore rekhchi
 const allCardContainer = document.getElementById("issuesContainer");
 let issueALLCard = [];

 //ei filter btn ta toggle korechi colour change hoyeche 
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


// new card label section array crad er bhetor label gulo array teke loop chaliye notun array baniye string a convert kore return korechi
const bugAndHelpLabels = (labels) => {

    let newArr = labels.map((label) => {

        let icon = "";

        if (label === "bug") {
            icon = `<i class="fa-solid fa-bug"></i>`;
        }

        if (label === "help wanted") {
            icon = `<i class="fa-solid fa-handshake"></i>`;
        }

        if (label === "enhancement") {
            icon = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;
        }

        return `<span class="flex items-center gap-1 font-semibold text-[10px] px-2 py-[2px] rounded-2xl border
                      ${label === "bug" ? "bg-red-100 text-red-400" :
                label === "help wanted" ? "bg-[#fff6d1] text-[#f59e0b]" :
                    "bg-[#defce8] text-[#00a96e]"}"> ${icon} ${label.toUpperCase()} </span>  `;


    });

    return newArr.join(" ");

};





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
                             ${bugAndHelpLabels(issue.labels)}
                          
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
  



 // filter btn display show in toggle
function filterIssues(status) {
    //removeSpinner(true);

   // setTimeout(() => {

        if (status === "all") {
            displayAllIssuesData(issueALLCard);
        }

        if (status === "open") {

            const openIssues = issueALLCard.filter(issue => issue.status === "open");
            displayAllIssuesData(openIssues);

        }

        if (status === "closed") {
            const closedIssues = issueALLCard.filter(issue => issue.status === "closed");
            displayAllIssuesData(closedIssues);
        }

        //removeSpinner(false);


    }
     


    // all card  access 
const allActiveCard = async (id) => {

    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    const res = await fetch(url)
    const data = await res.json()
    displayShowModal(data.data)

}

    // modal function 
function displayShowModal(card) {
    console.log(card)
    const modalContainer = document.getElementById("modal_container")
    modalContainer.innerHTML = "";

    const div = document.createElement("div")
    div.innerHTML = `
                        <div class="space-y-6 border-[2px] border-opacity-100  rounded-md p-4 ${card.status === "closed" ? "border-[#a855f7]" : "border-[#22b780]"}">

                          <div>
                              <h2 class="font-semibold text-2xl mb-2">${card.title}</h2>
              
                              <div class="flex items-center gap-2 flex-wrap sm:flex">
                               <p class="text-sm px-3 py-[2px] text-white rounded-2xl font-semibold
                               ${card.status === "closed" ? "bg-[#a855f7]" : "bg-[#22b780]"}">
                                         ${card.status}
                                         </p>
                                  <span class="w-[9px] h-[9px] rounded-full bg-gray-500"></span>
                                  <p class="text-sm text-[#64748b]">Opened by ${card.author}</p>
                                  <span class="w-[9px] h-[9px] rounded-full bg-gray-500"></span>
                                  <p class="text-sm text-[#64748b]">
                                      ${new Date(card.createdAt).toLocaleDateString()}
                                  </p>
                              </div>
                          </div>
              
                          <div class="flex flex-wrap gap-3">
                              ${bugAndHelpLabels(card.labels)}
                          </div>
              
                          <p class="text-[15px] text-[#64748b]">
                              ${card.description}
                          </p>
              
                          <div class="bg-[#f8fafc] flex p-4 rounded-lg">
                              <div class="w-[50%] space-y-1">
                                  <p class="text-[#64748b]">Assignee:</p>
                                  <p class="font-bold">${card.assignee.toUpperCase()}</p>
                              </div>
              
                              <div class="w-[50%] space-y-2">
                                  <p class="text-[#64748b]">Priority:</p>
                                   <p class="text-sm px-3 py-[2px] text-white inline-block rounded-2xl ${card.priority === "high"
            ? "bg-red-600"
            : card.priority === "medium"
                ? "bg-yellow-500"
                : "bg-gray-500"}">
                                           ${card.priority.toUpperCase()}
                                           </p>
                                                                                                     </div>
                          </div>
              
                          <div class="modal-action">
                              <form method="dialog">
                                  <button class="btn bg-gradient-to-r  from-purple-600 via-purple-500 to-blue-500 
                                      hover:opacity-90 transition text-white px-7 rounded-md">Close</button>
                              </form>
                          </div>
              
                      </div>
              

                      `;

    modalContainer.appendChild(div)

    document.getElementById("modal_card").showModal()

}


 allIssuesApi();

 






