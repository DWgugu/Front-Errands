window.addEventListener("load", () => {
    axios.get(link + "/users").then((response) => {
        console.log(response.data);
    })
})

const link = "https://api-errands.herokuapp.com";

function login(event) {
    event.preventDefault();
    const userLogin = document.getElementById("inputUserLogin");
    const passwordLogin = document.getElementById("inputPasswordLogin");
    const getAlert = document.getElementById("alert");
    const viewModal = getAlert.setAttribute("style", "display: block");

    axios.get(link + "/users").then((response) => {
        const data = response.data; console.log(data);  
         if(data.length === 0) {
                viewModal;
                getAlert.innerHTML = "<strong>ERRO!</strong> Usuário ou senha incorrétos.";
                userLogin.focus();
                closeAlert(viewModal, getAlert);
            }
        for (let searchAccount of data) {
            if(searchAccount.user !== userLogin.value || searchAccount.password !== passwordLogin.value) {
                viewModal;
                getAlert.innerHTML = "<strong>ERRO!</strong> Usuário ou senha incorrétos.";
                userLogin.focus();
                closeAlert(viewModal, getAlert);
             }
             if(searchAccount.user === userLogin.value && searchAccount.password === passwordLogin.value) {
                localStorage.setItem("userLogged", searchAccount.user);
                localStorage.setItem("userId", searchAccount.id);
                createToken();
                window.location.href = "./errands.html";
            }             
        }                       
    })
}

function createToken() {
    const token = Math.random().toString(16).substring(2);
    localStorage.setItem("token", token);
}

function closeAlert(viewModal, getAlert) {
    setTimeout(() => {viewModal = getAlert.setAttribute("style", "display: none");}, 2000);
};

function eyeClickLogin() {
    const passwordInputLogin = document.getElementById("inputPasswordLogin");
    const eyeLogin = document.getElementById("eyeLogin");

    if (passwordInputLogin.type == "password") {
        passwordInputLogin.setAttribute("type", "text");
        eyeLogin.classList.remove("fa-eye");
        eyeLogin.classList.add("fa-eye-slash");
    } else {
        passwordInputLogin.setAttribute("type", "password");
        eyeLogin.classList.remove("fa-eye-slash");
        eyeLogin.classList.add("fa-eye");
    }
}