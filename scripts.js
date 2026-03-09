// const signInBtn = document.getElementById("submitBtn");
// if (signInBtn) {
//   const userNameInput = document.getElementById("userName");
//   const passwordInput = document.getElementById("password");

//   signInBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const user = "admin";
//     const pass = "admin123";

//     if (userNameInput.value === user && passwordInput.value === pass) {
//       window.location.href = "home.html";
//     } else {
//       alert("Invalid credentials!");
//     }
//   });
// }

// const issuesContainer = document.getElementById("issuesContainer");
// const loadingSpinner = document.getElementById("loadingSpinner");
// const totalIssueText = document.getElementById("totalIssue");

// const allBtn = document.getElementById('allBtn');
// const openBtn = document.getElementById('openBtn');
// const closedBtn = document.getElementById('closedBtn');

// let allIssues = [];

// function showLoading() {
//   loadingSpinner.classList.remove("hidden");
//   issuesContainer.innerHTML = "";
// }
// function hideLoading() {
//   loadingSpinner.classList.add("hidden");
// }

// function updateStats(count) {
//   if (totalIssueText) {
//     totalIssueText.innerHTML = `${count} <span>Issues</span>`;
//   }
// }

// async function loadIssues() {
//   try {
//     showLoading();
//     const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
//     const data = await res.json();

//     allIssues = data.data || [];

//     displayIssues(allIssues);
//     updateStats(allIssues.length);
//     toggleStyle('allBtn');

//   } catch (err) {
//     issuesContainer.innerHTML = `<p class="text-red-500">Failed to load issues.</p>`;
//     console.error(err);
//   } finally {
//     hideLoading();
//   }
// }

// function toggleStyle(activeId) {
//   const buttons = [allBtn, openBtn, closedBtn];
//   buttons.forEach(btn => {
//     if (btn) {
//       btn.classList.remove('bg-blue-500', 'text-white', 'border-none');
//       btn.classList.add('btn-outline');
//     }
//   });

//   const selected = document.getElementById(activeId);
//   if (selected) {
//     selected.classList.remove('btn-outline');
//     selected.classList.add('bg-blue-500', 'text-white', 'border-none');
//   }
// }

// if (allBtn) {
//   allBtn.addEventListener('click', () => {
//     toggleStyle('allBtn');
//     displayIssues(allIssues);
//     updateStats(allIssues.length);
//   });
// }

// if (openBtn) {
//   openBtn.addEventListener('click', () => {
//     toggleStyle('openBtn');
//     const filtered = allIssues.filter(issue => issue.status === 'open');
//     displayIssues(filtered);
//     updateStats(filtered.length);
//   });
// }

// if (closedBtn) {
//   closedBtn.addEventListener('click', () => {
//     toggleStyle('closedBtn');
//     const filtered = allIssues.filter(issue => issue.status === 'closed');
//     displayIssues(filtered);
//     updateStats(filtered.length);
//   });
// }

// function displayIssues(issues) {
//   issuesContainer.innerHTML = "";

//   if (issues.length === 0) {
//     issuesContainer.innerHTML = `<p class="text-gray-400 col-span-full text-center py-10 font-medium">No issues found matching this status.</p>`;
//     return;
//   }

//   issues.forEach((issue) => {
//     const card = document.createElement("div");
//     card.className = "bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-lg p-6 flex flex-col justify-between";

//     const labelColors = {
//       bug: "bg-red-100 text-red-600",
//       enhancement: "bg-blue-100 text-blue-600",
//       documentation: "bg-green-100 text-green-600",
//       "good first issue": "bg-purple-100 text-purple-600",
//       "help wanted": "bg-yellow-100 text-yellow-600"
//     };

//     card.innerHTML = `
//         <div class="flex justify-between items-center mb-4">
//            ${issue.status === "open"
//         ? `
//       <span class="flex items-center gap-1 text-green-600 text-xs">
//         <span class="relative flex h-4 w-4">
//           <span class="absolute h-4 w-4 rounded-full border-2 border-green-500"></span>
//           <span class="m-auto h-2 w-2 rounded-full bg-green-500"></span>
//         </span>
//       </span>
//       `
//         : `
//       <span class="flex items-center gap-1 text-purple-600 text-xs">
//         <span class="flex items-center justify-center w-4 h-4 border-2 border-purple-600 rounded-full">
//           <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
//             <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z" clip-rule="evenodd"/>
//           </svg>
//         </span>
//       </span>
//       `
//       }
//             <span class="px-3 py-1 text-[10px] font-bold uppercase rounded-full ${issue.priority === "high" ? "bg-red-100 text-red-600" :
//         issue.priority === "medium" ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-600"
//       }">${issue.priority} priority</span>
//         </div>
//         <div class="space-y-2">
//             <h2 class="font-semibold text-lg line-clamp-1">${issue.title}</h2>
//             <p class="text-gray-500 text-sm line-clamp-2">${issue.description}</p>
//             <div class="flex gap-2 flex-wrap pt-2">
//                 ${issue.labels.map(label => `<span class="px-2 py-1 text-[10px] font-medium rounded-full ${labelColors[label] || "bg-gray-100 text-gray-600"}">${label}</span>`).join("")}
//             </div>
//         </div>
//         <div class="mt-6 pt-4 border-t border-gray-50 flex  gap-1">
//             <div class="flex justify-between text-xs font-mono text-gray-400">
//                 <span>#${issue.id}</span>
//                 <span>by ${issue.author}</span>
//             </div>
//         </div>
//         <p>${issue.created}</p
//         `;
//     issuesContainer.appendChild(card);
//   });
// }

// if (issuesContainer) loadIssues();

// function displayIssues(issues) {
//   issuesContainer.innerHTML = "";

//   if (issues.length === 0) {
//     issuesContainer.innerHTML = `<p class="text-gray-400 col-span-full text-center py-10 font-medium">No issues found matching this status.</p>`;
//     return;
//   }

//   issues.forEach((issue) => {
//     const card = document.createElement("div");
//     // Added cursor-pointer for UX and onclick to trigger modal
//     card.className = "bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-lg p-6 flex flex-col justify-between cursor-pointer";
//     card.onclick = () => openModal(issue.id);

//     const labelColors = {
//       bug: "bg-red-100 text-red-600",
//       enhancement: "bg-blue-100 text-blue-600",
//       documentation: "bg-green-100 text-green-600",
//       "good first issue": "bg-purple-100 text-purple-600",
//       "help wanted": "bg-yellow-100 text-yellow-600"
//     };

//     card.innerHTML = `
//         <div class="flex justify-between items-center mb-4">
//             ${issue.status === "open"
//                 ? `<span class="flex items-center gap-1 text-green-600 text-xs">
//                     <span class="relative flex h-4 w-4">
//                       <span class="absolute h-4 w-4 rounded-full border-2 border-green-500"></span>
//                       <span class="m-auto h-2 w-2 rounded-full bg-green-500"></span>
//                     </span>
//                    </span>`
//                 : `<span class="flex items-center gap-1 text-purple-600 text-xs">
//                     <span class="flex items-center justify-center w-4 h-4 border-2 border-purple-600 rounded-full">
//                       <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
//                         <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z" clip-rule="evenodd"/>
//                       </svg>
//                     </span>
//                    </span>`
//             }
//             <span class="px-3 py-1 text-[10px] font-bold uppercase rounded-full ${issue.priority === "high" ? "bg-red-100 text-red-600" :
//                 issue.priority === "medium" ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-600"
//             }">${issue.priority} priority</span>
//         </div>
//         <div class="space-y-2">
//             <h2 class="font-semibold text-lg line-clamp-1">${issue.title}</h2>
//             <p class="text-gray-500 text-sm line-clamp-2">${issue.description}</p>
//             <div class="flex gap-2 flex-wrap pt-2">
//                 ${issue.labels.map(label => `<span class="px-2 py-1 text-[10px] font-medium rounded-full ${labelColors[label] || "bg-gray-100 text-gray-600"}">${label}</span>`).join("")}
//             </div>
//         </div>
//         <div class="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center text-xs font-mono text-gray-400">
//             <span>#${issue.id} by ${issue.author}</span>
//             <span>${issue.createdAt}</span>
//         </div>
//     `;
//     issuesContainer.appendChild(card);
//   });
// }



// --- Global State ---
let allIssues = [];
const issuesContainer = document.getElementById("issuesContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const totalIssueText = document.getElementById("totalIssue");
const issueModal = document.getElementById("issue_modal");
const modalContent = document.getElementById("modalContent");

const allBtn = document.getElementById('allBtn');
const openBtn = document.getElementById('openBtn');
const closedBtn = document.getElementById('closedBtn');

// --- Login Logic ---
const signInBtn = document.getElementById("submitBtn");
if (signInBtn) {
    signInBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const userNameInput = document.getElementById("userName");
        const passwordInput = document.getElementById("password");
        if (userNameInput.value === "admin" && passwordInput.value === "admin123") {
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials!");
        }
    });
}

// --- UI Utilities ---
function showLoading() {
    loadingSpinner.classList.remove("hidden");
    issuesContainer.innerHTML = "";
}
function hideLoading() {
    loadingSpinner.classList.add("hidden");
}
function updateStats(count) {
    if (totalIssueText) {
        totalIssueText.innerHTML = `${count} <span>Issues</span>`;
    }
}

// --- Toggle Button Styles ---
function toggleStyle(activeId) {
    const buttons = [allBtn, openBtn, closedBtn];
    buttons.forEach(btn => {
        if (btn) {
            btn.classList.remove('bg-blue-500', 'text-white', 'border-none');
            btn.classList.add('btn-outline');
        }
    });
    const selected = document.getElementById(activeId);
    if (selected) {
        selected.classList.remove('btn-outline');
        selected.classList.add('bg-blue-500', 'text-white', 'border-none');
    }
}

// --- Data Loading ---
async function loadIssues() {
    try {
        showLoading();
        const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
        const data = await res.json();
        allIssues = data.data || [];

        displayIssues(allIssues);
        updateStats(allIssues.length);
        toggleStyle('allBtn');
    } catch (err) {
        issuesContainer.innerHTML = `<p class="text-red-500">Failed to load issues.</p>`;
        console.error(err);
    } finally {
        hideLoading();
    }
}

// --- The MODAL Function ---
function openModal(id) {
    const issue = allIssues.find(i => i.id === id);
    if (!issue) return;

    const labelColors = {
        bug: "bg-red-50 text-red-500 border-red-100",
        enhancement: "bg-blue-50 text-blue-500 border-blue-100",
        documentation: "bg-green-50 text-green-500 border-green-100",
        "good first issue": "bg-purple-50 text-purple-500 border-purple-100",
        "help wanted": "bg-orange-50 text-orange-500 border-orange-100"
    };

    modalContent.innerHTML = `
        <h1 class="text-3xl font-bold text-slate-800 mb-2">${issue.title}</h1>
        <div class="flex items-center gap-2 text-slate-400 text-sm mb-6">
            <span class="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                ${issue.status === 'open' ? 'Opened' : 'Closed'}
            </span>
            <span>• Opened by ${issue.author} • ${issue.createdAt}</span>
        </div>
        <div class="flex gap-2 mb-8">
            ${issue.labels.map(label => `
                <span class="flex items-center gap-1 px-3 py-1 rounded-lg border text-[10px] font-bold uppercase ${labelColors[label] || "bg-gray-50 text-gray-500"}">
                    ${label === 'bug' ? '' : ''} ${label}
                </span>
            `).join("")}
        </div>
        <p class="text-slate-500 leading-relaxed text-lg mb-10">${issue.description}</p>
        <div class="bg-slate-50 rounded-xl p-6 flex justify-between items-center mb-8">
            <div>
                <p class="text-slate-400 text-sm mb-1">Assignee:</p>
                <p class="font-bold text-slate-800 text-lg">${issue.author}</p>
            </div>
            <div class="text-right">
                <p class="text-slate-400 text-sm mb-1">Priority:</p>
                <span class="bg-red-500 text-white px-4 py-1 rounded-lg text-xs font-bold uppercase">${issue.priority}</span>
            </div>
        </div>
        <div class="flex justify-end">
            <form method="dialog"><button class="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none px-8 rounded-lg">Close</button></form>
        </div>
    `;
    issueModal.showModal();
}

// --- The SINGLE Display Function ---
function displayIssues(issues) {
    issuesContainer.innerHTML = "";
    if (issues.length === 0) {
        issuesContainer.innerHTML = `<p class="text-gray-400 col-span-full text-center py-10 font-medium">No issues found.</p>`;
        return;
    }

    issues.forEach((issue) => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-lg p-6 flex flex-col justify-between cursor-pointer";
        
        // This is the trigger!
        card.onclick = () => openModal(issue.id);

        const labelColors = {
            bug: "bg-red-100 text-red-600",
            enhancement: "bg-blue-100 text-blue-600",
            documentation: "bg-green-100 text-green-600",
            "good first issue": "bg-purple-100 text-purple-600",
            "help wanted": "bg-yellow-100 text-yellow-600"
        };

        card.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                    ${issue.status === "open"
                ? `<span class="flex items-center gap-1 text-green-600 text-xs">
                    <span class="relative flex h-4 w-4">
                      <span class="absolute h-4 w-4 rounded-full border-2 border-green-500"></span>
                      <span class="m-auto h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                   </span>`
                : `<span class="flex items-center gap-1 text-purple-600 text-xs">
                    <span class="flex items-center justify-center w-4 h-4 border-2 border-purple-600 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.25 7.25a1 1 0 01-1.42 0l-3.25-3.25a1 1 0 111.42-1.42l2.54 2.54 6.54-6.54a1 1 0 011.42 0z" clip-rule="evenodd"/>
                      </svg>
                    </span>
                   </span>`
            }
                <span class="px-3 py-1 text-[10px] font-bold uppercase rounded-full ${issue.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}">${issue.priority} priority</span>
            </div>
            <div class="space-y-2">
                <h2 class="font-semibold text-lg line-clamp-1">${issue.title}</h2>
                <p class="text-gray-500 text-sm line-clamp-2">${issue.description}</p>
                <div class="flex gap-2 flex-wrap pt-2">
                    ${issue.labels.map(l => `<span class="px-2 py-1 text-[10px] font-medium rounded-full ${labelColors[l] || 'bg-gray-100'}">${l}</span>`).join("")}
                </div>
            </div>
            <div class="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400">
                <span>#${issue.id} by ${issue.author}</span>
            </div>
        `;
        issuesContainer.appendChild(card);
    });
}

// --- Event Listeners ---
if (allBtn) allBtn.addEventListener('click', () => { toggleStyle('allBtn'); displayIssues(allIssues); updateStats(allIssues.length); });
if (openBtn) openBtn.addEventListener('click', () => { toggleStyle('openBtn'); const f = allIssues.filter(i => i.status === 'open'); displayIssues(f); updateStats(f.length); });
if (closedBtn) closedBtn.addEventListener('click', () => { toggleStyle('closedBtn'); const f = allIssues.filter(i => i.status === 'closed'); displayIssues(f); updateStats(f.length); });

// --- Run ---
if (issuesContainer) loadIssues();