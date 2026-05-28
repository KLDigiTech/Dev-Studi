const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    //ici appel API

    if (mailInput.value === "test@mail.com" && passwordInput.value === "123") {
        alert("Connexion réussie !");

        const token = "sdngfpodngpsdjfjeqfsbiubgiuqbfiubsv";
        setToken(token);

        setCookie(roleCookieName, "admin", 7);

        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}