const SUPABASE_URL = "https://ixeofagtfolrlxhpwdvd.supabase.co";
const SUPABASE_KEY = "sb_publishable_EtPuA2W5ATHgyOZD18RgLQ__ZyVjtWT";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", async () => {

    const { data: { session } } = await supabase.auth.getSession();

    const authButtons = document.querySelector('.auth-buttons');
    const userInfo = document.querySelector('.user-info');
    const userName = document.querySelector('.user-name');
    const logoutBtn = document.querySelector('.logout-btn');

    if (session) {
        const user = session.user;

        if (authButtons) authButtons.style.display = "none";
        if (userInfo) userInfo.style.display = "block";
        if (userName) userName.textContent = user.user_metadata?.name || user.email;
    }

    // 🔐 Logout
    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            await supabase.auth.signOut();
            location.reload();
        });
    }

    // 🔄 Escuchar cambios de sesión
    supabase.auth.onAuthStateChange((event, session) => {
        if (!session) {
            location.reload();
        }
    });

});