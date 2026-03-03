window.onload = function () {

    // ✅ comprobar que Supabase está cargado
    if (!window.supabase) {
        alert("Supabase NO está cargado");
        return;
    }

    const SUPABASE_URL = "https://ixeofagtfolrlxhpwdvd.supabase.co";
    const SUPABASE_KEY = "sb_publishable_EtPuA2W5ATHgyOZD18RgLQ__ZyVjtWT";

    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

    const form = document.querySelector("form");

    form.addEventListener("submit", async function(e) {

        e.preventDefault();

        const nombre = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // ✅ VALIDACIÓN CONTRASEÑAS
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name: nombre   // 👈 AQUÍ GUARDAMOS EL NOMBRE
                }
            }
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Registro correcto, revisa tu email");
        }

    });

};