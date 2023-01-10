let table = document.body.firstElementChild;
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;
    cells[i].style.backgroundColor = 'red';
    cells[rows.length - 1 - i].style.backgroundColor = 'red';
}