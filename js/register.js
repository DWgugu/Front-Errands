const link = "http://localhost:8080";

function registerAccount(getUser, getPassword, getAlert, viewModal) {   
    axios.post(link + "/users", {
        user: getUser,
        password: getPassword
    }).then((response) => {
        goLogin(getAlert, viewModal);         
    }).catch((error) => {
        console.log(error);
    });
}

function verifyRecord(event) {
    event.preventDefault();
    const userRegister = document.getElementById("inputUserRegister").value;
    const passwordRegister = document.getElementById("inputPasswordRegister").value;
    const repeatPasswordRegister = document.getElementById("inputRepeatPasswordRegister").value;
    const checkboxRegister = document.getElementById("checkbox");
    const getAlert = document.getElementById("alert");
    const viewModal = getAlert.setAttribute("style", "display: block");
    let validCheckbox = true;

    axios.get(link + "/users").then((response) => {
        const data = response.data;
        for(let searchUser of data) {
            if (searchUser.user === userRegister) {
                viewModal;
                getAlert.innerHTML = "<strong>ERRO!</strong> Usuário ja existe.";
            }
        }
        if (userRegister < 3) {
            viewModal;
            getAlert.innerHTML = "<strong>ERRO!</strong> Usuário deve conter no mínimo 3 caracteres."; 
            closeAlert(viewModal, getAlert);                          
        } else if (passwordRegister < 8) {
            viewModal;
            getAlert.innerHTML = "<strong>ERRO!</strong> Senha deve conter no mínimo 8 caracteres."; 
            closeAlert(viewModal, getAlert);              
        } else if (passwordRegister !== repeatPasswordRegister) {
            viewModal;
            getAlert.innerHTML = "<strong>ERRO!</strong> As senhas devem ser iguais.";
            closeAlert(viewModal, getAlert);                     
        } else if (!checkboxRegister.checked) {
                validCheckbox = false;
                viewModal;
                getAlert.innerHTML = "<strong>ERRO!</strong> Você precisa aceitar os termos.";
                closeAlert(viewModal, getAlert);              
        } else {
            registerAccount(userRegister, passwordRegister, getAlert, viewModal);
        }
    })
}

function goLogin(getAlert, viewModal) {
    getAlert.classList.remove("alert-danger");
    getAlert.classList.add("alert-success");
    viewModal;
    getAlert.innerHTML = "<strong>EBAA</strong> Cadastrado com sucesso.";
    setTimeout(() => {window.location.href = "login.html"}, 2000);
};

function closeAlert(viewModal, getAlert) {
    setTimeout(() => {viewModal = getAlert.setAttribute("style", "display: none");}, 2000);
};

function eyeClickRegister() {
    const passwordInputRegister = document.getElementById("inputPasswordRegister");
    const passwordRepeatInputRegister = document.getElementById("inputRepeatPasswordRegister");
    const eyeRegister = document.getElementById("eyeRegister");

    if (passwordInputRegister.type == "password") {       
        passwordInputRegister.setAttribute("type", "text");
        passwordRepeatInputRegister.setAttribute("type", "text");
        eyeRegister.classList.remove("fa-eye");
        eyeRegister.classList.add("fa-eye-slash");
    } else {
        passwordInputRegister.setAttribute("type", "password");
        passwordRepeatInputRegister.setAttribute("type", "password");
        eyeRegister.classList.remove("fa-eye-slash");
        eyeRegister.classList.add("fa-eye");
    }
}