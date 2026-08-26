const BACKEND_URL = (window.BACKEND_URL || window.CORE_BACKEND_URL || "https://shinezzzz-iddiletele.hf.space").replace(/\/$/, "");

const DEFAULT_AVATAR_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%231f293d'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='40' fill='%237b71c6'%3E👤%3C/text%3E%3C/svg%3E";

const MEMBER_PM_LIST = [
    { id: "Fiony", name: "PM Fiony", file: "FIONY_ALVERIA" },
    { id: "Christy", name: "PM Christy", file: "ANGELINA_CHRISTY" },
    { id: "Freya", name: "PM Freya", file: "FREYA_JAYAWARDANA" },
    { id: "Delynn", name: "PM Delynn", file: "ADELINE_WIJAYA" },
    { id: "Cynthia", name: "PM Cynthia", file: "CYNTHIA_YAPUTERA" },
    { id: "Aralie", name: "PM Aralie", file: "ABIGAIL_RACHEL" },
    { id: "Levi", name: "PM Levi", file: "MICHELLE_LEVIA" },
    { id: "Lyn", name: "PM Lyn", file: "JESSLYN_ELLY" },
    { id: "Oniel", name: "PM Oniel", file: "CORNELIA_VANISA" },
    { id: "Virgi", name: "PM Virgi", file: "ASTRELLA_VIRGIANANDA" },
    { id: "Feni", name: "PM Feni", file: "FENI_FITRIYANTI" },
    { id: "Fera", name: "PM Fera", file: "AFERA_THALIA" },
    { id: "Jazzy", name: "PM Jazzy", file: "PUTRI_JAZYTA" },
    { id: "Eli", name: "PM Eli", file: "HELISMA_PUTRI" },
    { id: "Oline", name: "PM Oline", file: "OLINE_MANUEL" },
    { id: "Raisha", name: "PM Raisha", file: "RAISHA_SYIFA" },
    { id: "Gita", name: "PM Gita", file: "GITA_SEKAR" },
    { id: "Intan", name: "PM Intan", file: "NUR_INTAN" },
    { id: "Lily", name: "PM Lily", file: "MICHELLE_ALEXANDRA" },
    { id: "Danella", name: "PM Danella", file: "DENA_NATALIA" },
    { id: "Erine", name: "PM Erine", file: "CATHERINA_VALLENCIA" },
    { id: "Fritzy", name: "PM Fritzy", file: "FRITZY_ROSMERIAN" },
    { id: "Lana", name: "PM Lana", file: "AURHEL_ALANA" },
    { id: "Lulu", name: "PM Lulu", file: "LULU_SALSABILA" },
    { id: "Jemima", name: "PM Jemima", file: "JEMIMA_EVODIE" },
    { id: "Ella", name: "PM Ella", file: "GABRIELA_ABIGAIL" },
    { id: "Alya", name: "PM Alya", file: "ALYA_AMANDA" },
    { id: "Kimmy", name: "PM Kimmy", file: "VICTORIA_KIMBERLY" },
    { id: "Daisy", name: "PM Daisy", file: "DESY_NATALIA" },
    { id: "Maira", name: "PM Maira", file: "HUMAIRA_RAMADHANI" },
    { id: "Ekin", name: "PM Ekin", file: "MIKAELA_KUSJANTO" },
    { id: "Giaa", name: "PM Giaa", file: "HAGIA_SOPIA" },
    { id: "Muthe", name: "PM Muthe", file: "MUTIARA_AZZAHRA" },
    { id: "Lia", name: "PM Lia", file: "AURELLIA_LIA" },
    { id: "Michie", name: "PM Michie", file: "MICHELLE_ALEXANDRA" },
    { id: "Trisha", name: "PM Trisha", file: "JAZZLYN_TRISHA" },
    { id: "Chelsea", name: "PM Chelsea", file: "CHELSEA_DEVINA" },
    { id: "Elin", name: "PM Elin", file: "CELLINE_THEFANI" },
    { id: "Anindya", name: "PM Anindya", file: "ANINDYA_RAMADHANI" },
    { id: "Heidi", name: "PM Heidi", file: "HEIDA_SUYANGGA" },
    { id: "Gendis", name: "PM Gendis", file: "GENDIS_MAYRANNISA" },
    { id: "Kathrina", name: "PM Kathrina", file: "KATHRINA_IRENE" },
    { id: "Nala", name: "PM Nala", file: "SHABILQIS_NAILA" },
    { id: "Cathy", name: "PM Cathy", file: "CATHLEEN_NIXIE" },
    { id: "Ribka", name: "PM Ribka", file: "RIBKA_BUDIMAN" },
    { id: "Greesel", name: "PM Greesel", file: "GREESELA_ADHALIA" },
    { id: "Nachia", name: "PM Nachia", file: "NINA_TUTACHIA" },
    { id: "Olla", name: "PM Olla", file: "FEBRIOLA_SINAMBELLA" },
    { id: "Gracie", name: "PM Gracie", file: "GRACE_OCTAVIANI" },
    { id: "Indah", name: "PM Indah", file: "INDAH_CAHYA" },
    { id: "Rara", name: "PM Rara", file: "AULIA_RIZA" },
    { id: "Sona", name: "PM Sona", file: "SONA_KALYANA" },
    { id: "Rilly", name: "PM Rilly", file: "CARISSA_DINI" },
    { id: "Mikaela", name: "PM Mikaela", file: "MIKAELA_KUSJANTO" },
    { id: "Jessi", name: "PM Jessi", file: "JESSICA_CHANDRA" },
    { id: "Carissa", name: "PM Carissa", file: "CARISSA_DINI" },
    { id: "Marsha", name: "PM Marsha", file: "MARSHA_LENATHEA" },
    { id: "Fahira", name: "PM Fahira", file: "FAHIRA_PUTRI" },
    { id: "Ralyne", name: "PM Ralyne", file: "RALYNE_VAN" },
    { id: "Bella", name: "PM Bella", file: "CHRISTABELLA_BONITA" },
    { id: "Nayla", name: "PM Nayla", file: "NAYLA_SUJI" }
];

let subscribedFolders = [];
let activeMember = null;
let isUserStatFetched = false;

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
}

function checkIsSubscribed(mem) {
    if (!mem || !mem.id) return false;
    if (!Array.isArray(subscribedFolders) || subscribedFolders.length === 0) return false;
    const memIdUpper = String(mem.id).toUpperCase().trim();
    const memNameUpper = String(mem.name).toUpperCase().trim();
    const memPmUpper = ("PM " + memIdUpper).toUpperCase();

    return subscribedFolders.some(s => {
        const su = String(s).toUpperCase().trim();
        return su === memIdUpper || su === memNameUpper || su === memPmUpper || su.replace("PM ", "") === memIdUpper;
    });
}

function renderMemberList() {
    const listContainer = document.getElementById("memberList");
    if (!listContainer) return;
    const queryInput = document.getElementById("memberSearchInput");
    const query = (queryInput ? queryInput.value : "").toLowerCase().trim();
    let html = "";

    const filteredList = MEMBER_PM_LIST.filter(mem => {
        if (!query) return true;
        return mem.name.toLowerCase().includes(query) || mem.id.toLowerCase().includes(query);
    });

    const sortedList = filteredList.sort((a, b) => {
        const isSubA = checkIsSubscribed(a);
        const isSubB = checkIsSubscribed(b);
        if (isSubA && !isSubB) return -1;
        if (!isSubA && isSubB) return 1;
        return 0;
    });

    sortedList.forEach(mem => {
        const isSubbed = checkIsSubscribed(mem);
        const isActive = activeMember && activeMember.id === mem.id;

        html += `
            <div class="member-item ${isActive ? 'active' : ''}" onclick="selectMember('${mem.id}')">
                <div class="member-avatar-wrap">
                    <img src="${DEFAULT_AVATAR_SVG}" class="member-avatar ${isSubbed ? '' : 'grey'}" alt="${mem.name}">
                    ${!isSubbed ? '<div class="lock-icon-badge">🔒</div>' : ''}
                </div>
                <div class="member-info">
                    <div class="member-name">${mem.name}</div>
                    <div class="member-status ${isSubbed ? 'active-sub' : ''}">
                        ${isSubbed ? '✓ Berlangganan' : '🔒 Belum Berlangganan'}
                    </div>
                </div>
            </div>
        `;
    });

    listContainer.innerHTML = html || `<div style="text-align:center; color:var(--text-sub); padding:20px; font-size:13px;">Member "${query}" tidak ditemukan</div>`;
}

function filterMemberList() {
    renderMemberList();
}

function showSidebarMobile() {
    document.body.classList.remove("mobile-chat-active");
}

async function selectMember(memberId) {
    console.log("[selectMember Called]:", memberId);
    if (!memberId) return;

    activeMember = MEMBER_PM_LIST.find(m => m.id.toLowerCase() === String(memberId).toLowerCase() || m.name.toLowerCase() === String(memberId).toLowerCase()) || MEMBER_PM_LIST[0];
    
    document.body.classList.add("mobile-chat-active");
    renderMemberList();

    const isSubbed = checkIsSubscribed(activeMember);
    
    const headerName = document.getElementById("headerName");
    const headerSub = document.getElementById("headerSub");
    if (headerName) headerName.innerText = activeMember.name;
    if (headerSub) headerSub.innerText = isSubbed ? "Convenant VIP Archive" : "🔒 Belum Berlangganan";

    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    if (!isSubbed) {
        chatMessages.innerHTML = `
            <div class="unsubscribed-notice">
                <h3>🔒 Belum Berlangganan ${activeMember.name}</h3>
                <p>Anda belum berlangganan ${activeMember.name}. Silakan order paket langganan di Telegram Bot <b>@alcsta48bot</b> atau website <b>convenant.my.id</b> sekarang untuk melihat arsip pesan real-time!</p>
                <a href="https://t.me/alcsta48bot" target="_blank" class="order-btn">ORDER SEKARANG VIA BOT TELEGRAM</a>
            </div>
        `;
        return;
    }

    chatMessages.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-sub);">⏳ Memuat pesan PM...</div>`;

    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session, folder_name: activeMember.name, limit: 200, offset_id: 0 })
        });
        const data = await res.json();

        if (res.ok && data.ok) {
            renderMessages(data.messages || []);
        } else {
            chatMessages.innerHTML = `<div class="unsubscribed-notice"><h3>⚠️ Notice</h3><p>${data.msg || "Gagal memuat pesan"}</p></div>`;
        }
    } catch(e) {
        chatMessages.innerHTML = `<div class="unsubscribed-notice"><h3>⚠️ Notice</h3><p>Gagal terhubung ke backend server.</p></div>`;
    }
}

function renderMessages(messages) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    if (!messages || messages.length === 0) {
        chatMessages.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-sub);">Belum ada pesan arsip untuk ${activeMember.name}.</div>`;
        return;
    }

    let html = "";
    messages.forEach(msg => {
        html += `
            <div class="msg-bubble">
                <div class="msg-text">${escapeHtml(msg.text || "")}</div>
                <div class="msg-time">${msg.timestamp || ""}</div>
            </div>
        `;
    });
    chatMessages.innerHTML = html;
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function initPage() {
    activeMember = MEMBER_PM_LIST[0]; // Default PM Fiony
    renderMemberList();
    selectMember("Fiony");

    const session = getCookie("user_session_pm");
    if (!session) return;

    try {
        const res = await fetch(BACKEND_URL + "/pm/userpmstat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session })
        });
        const data = await res.json();
        isUserStatFetched = true;

        if (res.ok && data.ok) {
            subscribedFolders = (data.subscriptions || []).map(s => String(s.folder_name || s).toUpperCase().trim());
            const userBadge = document.getElementById("userBadge");
            if (userBadge) userBadge.innerText = data.nama || "Convenant VIP";
            renderMemberList();
            selectMember(activeMember.id);
        }
    } catch(e) {
        console.error("Userpmstat error:", e);
    }
}

// BIND EXPLICITLY TO WINDOW
window.selectMember = selectMember;
window.filterMemberList = filterMemberList;
window.showSidebarMobile = showSidebarMobile;

// GLOBAL EVENT DELEGATION FOR CLICKING MEMBER CARDS
document.addEventListener("click", (e) => {
    const item = e.target.closest(".member-item");
    if (item) {
        const onclick = item.getAttribute("onclick");
        if (onclick) {
            const match = onclick.match(/selectMember\(['"]([^'"]+)['"]\)/);
            if (match && match[1]) {
                window.selectMember(match[1]);
            }
        }
    }
});

// BOOT APP ON DOM LOAD
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
} else {
    initPage();
}
