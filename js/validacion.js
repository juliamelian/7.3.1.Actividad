function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const registroBtn = document.getElementById("regBtn");
registroBtn.addEventListener("click", validarRegistro);


function validarRegistro() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;


    if (
        nombre.trim() === "" ||
        apellido.trim() === "" ||
        email.trim() === "" ||
        password1.trim() === "" ||
        password2.trim() === "" ||
        !terminos
    ) {
        showAlertError();
        return;
    }

    if (password1.length < 6 ||password1 !== password2) {
        showAlertError();
        return;
    }


    showAlertSuccess();
}

