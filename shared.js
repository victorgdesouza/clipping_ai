// Arquivo: shared.js (Versão 3.0 - Limpa e Estável)

// 1. Define as credenciais e inicializa o Cliente Supabase
const supabaseUrl = 'https://ojejoifgyledbsesipdr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZWpvaWZneWxlZGJzZXNpcGRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MDU5NjUsImV4cCI6MjA2NTE4MTk2NX0.MrGJIa2xIAW8OUQ5PiUXAFXgT9-rHdwgw_SRZcZ6g_Q';

if (typeof supabase !== 'undefined') {
    window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
} else {
    console.error("Erro fatal: A biblioteca Supabase não foi carregada.");
    document.body.innerHTML = `<div style="text-align: center; padding: 2rem; color: red;"><h1>Erro Crítico</h1><p>A aplicação não pôde ser carregada.</p></div>`;
}

// 2. Funções de Notificação e Confirmação
function showNotification(message, type = 'success') {
    const popup = document.getElementById('notification-popup');
    const messageEl = document.getElementById('notification-message');
    if (!popup || !messageEl) return;
    messageEl.textContent = message;
    popup.className = 'notification-popup show';
    popup.style.backgroundColor = type === 'error' ? '#ef4444' : '#22c55e';
    setTimeout(() => { popup.classList.remove('show'); }, 3500);
}

function showConfirmation(message) {
    return new Promise(resolve => {
        const modal = document.getElementById('confirmation-modal');
        const messageEl = document.getElementById('confirmation-message');
        const confirmBtn = document.getElementById('confirmation-confirm-btn');
        const cancelBtn = document.getElementById('confirmation-cancel-btn');
        if (!modal || !messageEl || !confirmBtn || !cancelBtn) { resolve(false); return; }
        messageEl.textContent = message;
        modal.classList.remove('hidden');
        const confirmHandler = () => { modal.classList.add('hidden'); cleanup(); resolve(true); };
        const cancelHandler = () => { modal.classList.add('hidden'); cleanup(); resolve(false); };
        confirmBtn.addEventListener('click', confirmHandler, { once: true });
        cancelBtn.addEventListener('click', cancelHandler, { once: true });
        function cleanup() {
            confirmBtn.removeEventListener('click', confirmHandler);
            cancelBtn.removeEventListener('click', cancelHandler);
        }
    });
}

// 3. Lógica Central de Autenticação
function handleAuth() {
    if (!window.supabaseClient) return;
    const isIndexPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    window.supabaseClient.auth.onAuthStateChange(async (event, session) => {
        const user = session?.user;
        if (!user && !isIndexPage) {
            window.location.href = '/index.html';
            return;
        }
        if (user) {
            if (isIndexPage) {
                window.location.href = '/dashboard.html';
                return;
            }
            const { data: profile, error } = await window.supabaseClient.from('profiles').select('role').eq('id', user.id).single();
            if (error && error.code !== 'PGRST116') console.error('Erro ao buscar perfil:', error);
            
            const userEmailEl = document.getElementById('user-email');
            const logoutButton = document.getElementById('logout-button');
            if (userEmailEl) userEmailEl.textContent = user.email;
            if (logoutButton) {
                logoutButton.addEventListener('click', async () => {
                    await window.supabaseClient.auth.signOut();
                });
            }
            document.dispatchEvent(new CustomEvent('auth-ready', { detail: { user, profile } }));
        }
        if (loadingScreen) loadingScreen.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
    });
}

// Executa a lógica de autenticação assim que o script é carregado.
handleAuth();
