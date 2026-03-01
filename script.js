function login() {
    const rib = document.getElementById("rib").value;
    const password = document.getElementById("password").value;

    if (rib && password) {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        alert("Veuillez remplir les champs.");
    }
}

function logout() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("login-page").classList.remove("hidden");
}
