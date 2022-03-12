/*window.addEventListener("load", () => {
    axios.get(link + "/users").then((response) => {
        console.log(response.data);
    })
})

const link = "http://localhost:8080";

function goRegister(event) {
   event.preventDefault();
    window.location.href("./pages/register.html")
}

const users = JSON.parse(localStorage.getItem("Users")) || [];

function register(event) {
    event.preventDefault();
    const getUserRegister = document.getElementById('inp-user').value;
    const getPasswordRegister = document.getElementById('inp-password').value;
    const getRepeatPassword = document.getElementById('inp-repeat-password').value;
    const getCheckbox = document.getElementById('checkbox');
    const getAlert = document.getElementById('alert');
    let createAlert = ``;
    var validCheckbox = true;
    var userExist = false;

    for(let i of users) {
        if (i.user === getUserRegister) {
            userExist = true;
        }
    }
    if (getUserRegister < 3) {
        createAlert =
            `
                <div class="alert alert-danger" role="alert">
                    <strong>ERRO!</strong> Usuário deve conter no mínimo 3 caracteres.
                </div>
            `
        getAlert.innerHTML = createAlert;
        reloadTime();
    } else if (userExist) {
        createAlert =
            `
                <div class="alert alert-danger" role="alert">
                    <strong>ERRO!</strong> Usuário ja existe.
                </div>
            `
        getAlert.innerHTML = createAlert;
        reloadTime();    
    } else if (getPasswordRegister < 6) {
        createAlert =
            `
                <div class="alert alert-danger" role="alert">
                    <strong>ERRO!</strong> Senha deve conter no mínimo 6 caracteres.
                </div>
            `
        getAlert.innerHTML = createAlert;
        reloadTime();      
    } else if (getPasswordRegister !== getRepeatPassword) {
        createAlert =
            `
                <div class="alert alert-danger" role="alert">
                    <strong>ERRO!</strong> As senhas devem ser iguais.
                </div>
            `
        getAlert.innerHTML = createAlert;
        reloadTime();        
    } else if (!getCheckbox.checked) {
            validCheckbox = false;
            createAlert =
            `
                <div class="alert alert-danger" role="alert">
                    <strong>ERRO!</strong> Você precisa aceitar os termos.
                </div>
            `
        getAlert.innerHTML = createAlert;
        reloadTime();        
    } else {
            users.push({
                user: getUserRegister,
                password: getPasswordRegister
            });
            localStorage.setItem("Users", JSON.stringify(users));
            window.location.href = "./login.html"
        }        
} 

function login(event) {
    event.preventDefault();
    const getUserLogin = document.getElementById('inputUserLogin').value;
    const getPasswordLogin = document.getElementById('inputPasswordLogin').value;
    const getAlert = document.getElementById('alert');
    let createAlert = ``;
    let loggedIn = false;

    for (let i of users) {
        if (i.user === getUserLogin && i.password === getPasswordLogin) {
            loggedIn = true;
            localStorage.setItem('username', i.user);
            window.location.href = "./errands.html";
        }
    }
    if (!loggedIn) {
         createAlert =
            `
                <div class="alert alert-danger" role="alert">
                    <strong>ERRO!</strong> Usuário ou senha incorrétos.
                </div>
            `
        getAlert.innerHTML = createAlert;
        reloadTime();
    }
}

function reloadTime() {
    setTimeout(() => {location.reload()}, 2000);
}

function eyeClickLogin() {
    const passwordInputLogin = document.getElementById('inputPasswordLogin');
    let eyeLogin = document.getElementById('eyeLogin');
    let typeIsPasswordLogin = passwordInputLogin.type == 'password';

    if (typeIsPasswordLogin) {
        passwordInputLogin.setAttribute('type', 'text');
        eyeLogin.classList.remove('fa-eye');
        eyeLogin.classList.add('fa-eye-slash');
    } else {
        passwordInputLogin.setAttribute('type', 'password');
        eyeLogin.classList.remove('fa-eye-slash');
        eyeLogin.classList.add('fa-eye');
    }
}

function eyeClickRegister() {
    const passwordInputRegister = document.getElementById('inp-password');
    let eyeRegister = document.getElementById('eyeRegister');
    let typeIsPasswordRegister = passwordInputRegister.type == 'password';

    if (typeIsPasswordRegister) {
        passwordInputRegister.setAttribute('type', 'text');
        eyeRegister.classList.remove('fa-eye');
        eyeRegister.classList.add('fa-eye-slash');
    } else {
        passwordInputRegister.setAttribute('type', 'password');
        eyeRegister.classList.remove('fa-eye-slash');
        eyeRegister.classList.add('fa-eye');
    }
}

function eyeClickRegisterRepeat() {
    const passwordRepeatInputRegister = document.getElementById('inp-repeat-password');
    let eyeRepeatRegister = document.getElementById('eyeRepeatRegister');
    let typeIsPasswordRepeatRegister = passwordRepeatInputRegister.type == 'password';

    if (typeIsPasswordRepeatRegister) {
        passwordRepeatInputRegister.setAttribute('type', 'text');
        eyeRepeatRegister.classList.remove('fa-eye');
        eyeRepeatRegister.classList.add('fa-eye-slash');
    } else {
        passwordRepeatInputRegister.setAttribute('type', 'password');
        eyeRepeatRegister.classList.remove('fa-eye-slash');
        eyeRepeatRegister.classList.add('fa-eye');
    }
}*/