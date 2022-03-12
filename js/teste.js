const errandList = JSON.parse(localStorage.getItem("errands")) || [];
let indiceUpdate = false;

function viewName() {
    const getUsername = localStorage.getItem('username');
    const getDrop = document.getElementById('drop');

    getDrop.innerHTML =
     `
        <div class="btn-group">
            <button type="button" class="btn btn-secondary">${getUsername}</button>
            <button type="button" class="btn btn-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"></button> 
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                <li><a onclick="logout()" class="dropdown-item" href="#"><i class="fas fa-sign-out-alt"></i>Sair</a></li>
            </ul>
        </div>
    `;

}

viewName();
viewErrandsTable();

function logout() {
    window.location.href = './login.html';
}

function saveErrands() {
    const getTitle = document.getElementById('inputTitle').value;
    const getDescription = document.getElementById('inputDescription').value;
    const getAlert = document.getElementById('alert');
    let createAlert = ``;

    if (indiceUpdate || indiceUpdate === 0) {
        const object = errandList[indiceUpdate];
        object.title = getTitle;
        object.description = getDescription;
    } else {
        errandList.push({
            title: getTitle, 
            description: getDescription
        })           
    }
    saveErrandsLocalStorage();
    viewErrandsTable();
    location.reload();
    
    indiceUpdate = undefined;
    document.getElementById('inputTitle');
    document.getElementById('inputDescription');
}

function saveErrandsLocalStorage() {
    const saveErrands = JSON.stringify(errandList);
    localStorage.setItem('errands', saveErrands);
}

function viewErrandsTable() {
    const getTable = document.getElementById('tableBody');
    let contentTable = '<table>';
    let indice = 0;

    for (let i of errandList) {
        contentTable += 
        `
            <tr>
                <td class="col-1">${indice}</td>
                <td class="col-3">${i.title}</td>
                <td class="col-6">${i.description}</td>
                <td class="col-2">
                    <i class="fas fa-pen" onclick="editErrands(${indice})" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    <i class="fas fa-trash" onclick="deleteErrands(${indice})"></i>
                </td>
            </tr>
        `;
        indice ++;
    }
    contentTable += "</table>"
    getTable.innerHTML = contentTable;
}

function deleteErrands(indice) {
    errandList.splice(indice, 1);
    saveErrandsLocalStorage();
    viewErrandsTable();
}

function editErrands(indice) {
    const getErrand = errandList[indice];
    document.getElementById('inputTitle').value = getErrand.title;
    document.getElementById('inputDescription').value = getErrand.description;
    indiceUpdate = indice;
}

function closeAndReload() {
    location.reload();
}

function reloadTime() {
    setTimeout(() => {location.reload()}, 2000);
}