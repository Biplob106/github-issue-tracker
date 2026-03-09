const signInBtn = document.getElementById("submitBtn");
if (signInBtn) {
    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");

    signInBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const user = "admin";
        const pass = "admin123";

        if (userNameInput.value === user && passwordInput.value === pass) {
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials!");
        }
    });
}

const issuesContainer = document.getElementById("issuesContainer");
const loadingSpinner = document.getElementById("loadingSpinner");
const totalIssueText = document.getElementById("totalIssue");

const allBtn = document.getElementById('allBtn');
const openBtn = document.getElementById('openBtn');
const closedBtn = document.getElementById('closedBtn');

let allIssues = []; 

function showLoading() { 
    loadingSpinner.classList.remove("hidden"); 
    issuesContainer.innerHTML = ""; 
}
function hideLoading() { 
    loadingSpinner.classList.add("hidden"); 
}

function updateStats(count) {
    if(totalIssueText) {
        totalIssueText.innerHTML = `${count} <span>Issues</span>`;
    }
}

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

if (allBtn) {
    allBtn.addEventListener('click', () => {
        toggleStyle('allBtn');
        displayIssues(allIssues);
        updateStats(allIssues.length); 
    });
}

if (openBtn) {
    openBtn.addEventListener('click', () => {
        toggleStyle('openBtn');
        const filtered = allIssues.filter(issue => issue.status === 'open');
        displayIssues(filtered);
        updateStats(filtered.length); 
    });
}

if (closedBtn) {
    closedBtn.addEventListener('click', () => {
        toggleStyle('closedBtn');
        const filtered = allIssues.filter(issue => issue.status === 'closed');
        displayIssues(filtered);
        updateStats(filtered.length); 
    });
}

function displayIssues(issues) {
    issuesContainer.innerHTML = "";

    if (issues.length === 0) {
        issuesContainer.innerHTML = `<p class="text-gray-400 col-span-full text-center py-10 font-medium">No issues found matching this status.</p>`;
        return;
    }

    issues.forEach((issue) => {
        const card = document.createElement("div");
        card.className = "bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 rounded-lg p-6 flex flex-col justify-between";

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
                ? `<span class="flex items-center gap-1 text-green-600 text-xs font-bold uppercase"><span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>Open</span>`
                : `<span class="flex items-center gap-1 text-purple-600 text-xs font-bold uppercase">Closed</span>`
            }
            <span class="px-3 py-1 text-[10px] font-bold uppercase rounded-full ${
                issue.priority === "high" ? "bg-red-100 text-red-600" : 
                issue.priority === "medium" ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-600"
            }">${issue.priority} priority</span>
        </div>
        <div class="space-y-2">
            <h2 class="font-semibold text-lg line-clamp-1">${issue.title}</h2>
            <p class="text-gray-500 text-sm line-clamp-2">${issue.description}</p>
            <div class="flex gap-2 flex-wrap pt-2">
                ${issue.labels.map(label => `<span class="px-2 py-1 text-[10px] font-medium rounded-full ${labelColors[label] || "bg-gray-100 text-gray-600"}">${label}</span>`).join("")}
            </div>
        </div>
        <div class="mt-6 pt-4 border-t border-gray-50 flex flex-col gap-1">
            <div class="flex justify-between text-xs font-mono text-gray-400">
                <span>#${issue.id}</span>
                <span>by ${issue.author}</span>
            </div>
        </div>
        `;
        issuesContainer.appendChild(card);
    });
}

if (issuesContainer) loadIssues();