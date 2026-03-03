const SUPABASE_URL = "https://ixeofagtfolrlxhpwdvd.supabase.co";
const SUPABASE_KEY = "sb_publishable_EtPuA2W5ATHgyOZD18RgLQ__ZyVjtWT";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("logoutBtn").addEventListener("click", async () => {

await supabase.auth.signOut();
localStorage.removeItem("rememberSession");

window.location.href = "login.html";

});