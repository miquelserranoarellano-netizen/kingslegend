document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
        u.email === email && u.password === password
    );

    if (!user) {
        alert("Correo o contraseña incorrectos");
        return;
    }

    // 🔐 Guardar sesión
    localStorage.setItem("userLogged", "true");
    localStorage.setItem("userEmail", user.email);
    localStorage.setItem("username", user.username); // 🔥 ESTA ES LA CLAVE

    window.location.href = "torneos.html";
});