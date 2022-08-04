const container = document.querySelector(".container");
const inputRow = document.querySelector("#rows")
const inputCol = document.querySelector("#cols")
const dynamicTable = (rows, cols, cellNumber = 1) => {

    const table = document.createElement("table");
    for (let i = 1; i <= rows; i++) {
        const row = document.createElement("tr");
        table.appendChild(row);
        for (let j = 1; j <= cols; j++) {
            const col = document.createElement("td");
            col.innerHTML = cellNumber++;
            row.appendChild(col);
        }
    }

    if (cols <= 16) {
        container.appendChild(table);
        inputCol.value = "";
        inputRow.value = "";
    }
    else {
        alert("The number of columns should be below 16 columns");
        inputCol.value = "";
        inputRow.value = "";
    }

}

const buildBtn = document.querySelector("#build");
buildBtn.addEventListener("click", clickHandler);

function clickHandler() {
    container.innerHTML = "";
    dynamicTable(inputRow.value, inputCol.value);
}

