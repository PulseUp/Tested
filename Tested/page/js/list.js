//Для сортировки списка по клику на заголовки
document.addEventListener('DOMContentLoaded', () => {

    const getSort = ({ target }) => {
        const order = (target.dataset.order = -(target.dataset.order || -1));
        const index = [...target.parentNode.cells].indexOf(target);
        const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        const comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );

        for(const tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));

        for(const cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };

    document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));

});

//Поиск
function search() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


//Вывод списка из массива
let action = [
    {
        username: "admin",
        action: "logged_in",
        action_createad_at: "2022-05-08T07:01:09.171245Z"
    }, {
        username: "admin",
        action: "button_sign_in_tapped",
        action_createad_at: "2022-05-08T07:02:09.171245Z"
    },
    {
        username: "admin",
        action: "button_log_out_tapped",
        action_createad_at: "2022-05-08T07:03:09.171245Z"
    },
    {
        username: "user",
        action: "logged_in",
        action_createad_at: "2022-05-08T07:01:09.171245Z"
    }, {
        username: "user",
        action: "button_sign_in_tapped",
        action_createad_at: "2022-05-08T07:02:09.171245Z"
    },
    {
        username: "user",
        action: "button_log_out_tapped",
        action_createad_at: "2022-05-08T07:03:09.171245Z"
    },
    {
        username: "art",
        action: "logged_in",
        action_createad_at: "2022-05-08T07:01:09.171245Z"
    }, {
        username: "art",
        action: "button_sign_in_tapped",
        action_createad_at: "2022-05-08T07:02:09.171245Z"
    },
    {
        username: "art",
        action: "button_log_out_tapped",
        action_createad_at: "2022-05-08T07:03:09.171245Z"
    },
    {
        username: "artur",
        action: "logged_in",
        action_createad_at: "2022-05-08T07:01:09.171245Z"
    }, {
        username: "artur",
        action: "button_sign_in_tapped",
        action_createad_at: "2022-05-08T07:02:09.171245Z"
    },
    {
        username: "artur",
        action: "button_log_out_tapped",
        action_createad_at: "2022-05-08T07:03:09.171245Z"
    },
]

const table = document.getElementById('tbody');

for (let i = 0; i < action.length; i++) {
    let row = document.createElement('tr');
    row.innerHTML = `<td>${action[i].username}</td><td>${action[i].action}</td><td>${action[i].action_createad_at}</td>`;
    table.appendChild(row);
}