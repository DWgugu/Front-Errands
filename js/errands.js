window.addEventListener("load", () => {
    axios.get(link + `/user/${userId}/errands`).then((response) => {
        verifyToken()
        viewName();
        viewTable(userId);
        console.log(response.data);
    })
})
verifyToken()

const userId = localStorage.getItem("userId");
const link = "https://api-errands.herokuapp.com";

function viewName() {
    const getUsername = localStorage.getItem("userLogged");
    const getDrop = document.getElementById("drop");

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

function logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("userLogged");
    localStorage.removeItem("token");
    window.location.href = './login.html';
}

function verifyToken() {
    const tokenExist = localStorage.getItem("token");
    if(!tokenExist) {
        alert("Você precisa estar logado para acessar essa tela.");
        window.location.href = './login.html';
    }
}

function viewTable(userId) {
    const getTable = document.getElementById('tableBody');
    axios.get(link + `/user/${userId}/errands`).then((response) => {
        const data = response.data;
        let contentTable = "<table>"
        let indice = 0;

        for (let searchErrand of data) {
            contentTable += 
            `
                <tr>
                    <td class="col-1""><input onclick="scratchedText(${indice})" id="checkboxErrand" class="" type="checkbox"></td>
                    <td class="col-3" id="titleText">${searchErrand.title}</td>
                    <td class="col-6" id="descriptionText">${searchErrand.description}</td>
                    <td class="col-2">
                        <i class="fas fa-pen" onclick="getIdErrand(${parseInt(searchErrand.id)})" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                        <i class="fas fa-trash" onclick="deleteErrand(${parseInt(searchErrand.id)})"></i>
                    </td>
                </tr>
            `;
            indice ++;
        }
        contentTable += "</table>"
        getTable.innerHTML = contentTable;
    })
}

function addErrand() {
    const getTitle = document.getElementById('inputTitle').value;
    const getDescription = document.getElementById('inputDescription').value;

    axios.post(link + `/user/${userId}/errand`, {
        title: getTitle,
        description: getDescription
    }).then((response) => {
        location.reload();
    }).catch((error) => {
        console.log(error);
    }) 
}

function deleteErrand(errandId) {
    axios.delete(link + `/user/${userId}/errand/${errandId}`).then((response) => {
        location.reload();
    }).catch((error) => {
        console.log(error);
    })
}

function editErrand() {
    const getTitle = document.getElementById('inputTitleEdit').value;
    const getDescription = document.getElementById('inputDescriptionEdit').value;
    const errandId = parseInt(localStorage.getItem("idErrand"));

    axios.put(link + `/user/${userId}/errand/${errandId}`, {
        title: getTitle,
        description: getDescription
    }).then((response) => {
        location.reload();
    }).catch((error) => {
        console.log(error);
    }) 
}

function getIdErrand(idErrand) {
    const userId = localStorage.getItem("userId")
    axios.get(link + `/user/${userId}/errand/${idErrand}`).then((response) => {
        document.getElementById('inputTitleEdit').value = response.data.title;
        document.getElementById('inputDescriptionEdit').value = response.data.description;
    })
    
    console.log(idErrand);
   localStorage.setItem("idErrand",  JSON.stringify(idErrand));
}

function scratchedText(indice) {
    const getTitle = document.getElementById("titleText");
    const getDescription = document.getElementById("descriptionText");
    const checkboxErrand = document.getElementById("checkboxErrand");

    const sub = getTitle[indice];
    console.log(sub);


       // for (let searchErrand of indice) {
            if(checkboxErrand.checked) {
                //getTitle.classList.add("scratch");
                //getDescription.classList.add("scratch");
                getTitle.setAttribute("style", "text-decoration: line-through");
               // console.log(indice);
            } else {
                getTitle.classList.remove("scratch");
                getDescription.classList.remove("scratch");
            }
       // }     
    
}