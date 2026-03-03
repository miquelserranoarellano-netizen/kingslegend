document.addEventListener("DOMContentLoaded", function () {

    const logo = document.querySelector('.logo');

    if (!logo) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 80) {
            logo.classList.add('small');
        } else {
            logo.classList.remove('small');
        }
    });

});

const SUPABASE_URL = 'https://ixeofagtfolrlxhpwdvd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_EtPuA2W5ATHgyOZD18RgLQ__ZyVjtWT';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

async function mostrarRegistro() {
    const email = prompt('Introduce tu email:');
    const password = prompt('Introduce tu contraseña:');

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        alert('Error al registrarse: ' + error.message);
    } else {
        alert('Registro exitoso. Por favor, verifica tu email.');
    }
}

async function mostrarLogin() {
    const email = prompt('Email:');
    const password = prompt('Contraseña:');  
    
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert('Error al iniciar sesión: ' + error.message);
    } else {
        alert('Bienvenido, ' + data.user.email);
    }
}  

const langBtn = document.querySelector('.lang-btn');
const langDropdown = document.querySelector('.lang-dropdown');

langBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
});

document.addEventListener('click', function () {
    langDropdown.classList.remove('active');
});