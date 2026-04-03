let transactions = JSON.parse(localStorage.getItem("data")) || [];

let lineChart, pieChart;

const tableBody = document.getElementById("tableBody");

/* Update Dashboard */
function updateDashboard() {
    let income = 0, expense = 0;

    transactions.forEach(t => {
        if (t.type === "income") income += t.amount;
        else expense += t.amount;
    });

    document.getElementById("income").innerText = income;
    document.getElementById("expense").innerText = expense;
    document.getElementById("balance").innerText = income - expense;

    renderTable();
    drawCharts();
}

/* Render Table */
function renderTable() {
    tableBody.innerHTML = "";

    let search = document.getElementById("search").value.toLowerCase();

    transactions
        .filter(t => t.category.toLowerCase().includes(search))
        .forEach(t => {
            let row = `<tr>
                <td>${t.date}</td>
                <td>${t.amount}</td>
                <td>${t.category}</td>
                <td>${t.type}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
}

/* Add Transaction */
function addTransaction() {
    let role = document.getElementById("role").value;

    if (role !== "admin") {
        alert("Only admin can add transactions");
        return;
    }

    let date = document.getElementById("date").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;
    let type = document.getElementById("type").value;

    if (!date || !amount || !category) {
        alert("Fill all fields");
        return;
    }

    let t = { date, amount, category, type };

    transactions.push(t);
    localStorage.setItem("data", JSON.stringify(transactions));

    updateDashboard();
}

document.getElementById("search").addEventListener("input", renderTable);


document.getElementById("role").addEventListener("change", () => {
    let role = document.getElementById("role").value;
    document.getElementById("adminPanel").style.display =
        role === "admin" ? "block" : "none";
});


function drawCharts() {
    let ctx1 = document.getElementById("lineChart").getContext("2d");
    let ctx2 = document.getElementById("pieChart").getContext("2d");

    if (lineChart) lineChart.destroy();
    if (pieChart) pieChart.destroy();

    let labels = transactions.map(t => t.date);
    let amounts = transactions.map(t => t.amount);

    lineChart = new Chart(ctx1, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Transactions",
                data: amounts
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    let income = transactions.filter(t => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    let expense = transactions.filter(t => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    pieChart = new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                data: [income, expense]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


function toggleDarkMode() {
    document.body.classList.toggle("dark");
}


updateDashboard();