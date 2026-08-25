const BACKEND_URL = "https://shinezzzz-iddiletele.hf.space";

// DAFTAR 61 MEMBER PM LENGKAP
const MEMBER_PM_LIST = [
    { id: "Delynn", name: "PM Delynn", file: "ADELINE_WIJAYA" },
    { id: "Cynthia", name: "PM Cynthia", file: "CYNTHIA_YAPUTERA" },
    { id: "Aralie", name: "PM Aralie", file: "ABIGAIL_RACHEL" },
    { id: "Freya", name: "PM Freya", file: "FREYA_JAYAWARDANA" },
    { id: "Levi", name: "PM Levi", file: "MICHELLE_LEVIA" },
    { id: "Lyn", name: "PM Lyn", file: "JESSLYN_ELLY" },
    { id: "Oniel", name: "PM Oniel", file: "CORNELIA_VANISA" },
    { id: "Virgi", name: "PM Virgi", file: "ASTRELLA_VIRGIANANDA" },
    { id: "Feni", name: "PM Feni", file: "FENI_FITRIYANTI" },
    { id: "Fera", name: "PM Fera", file: "AFERA_THALIA" },
    { id: "Jazzy", name: "PM Jazzy", file: "JAZZLYN_TRISHA" },
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
    { id: "Fiony", name: "PM Fiony", file: "FIONY_ALVERIA" },
    { id: "Giaa", name: "PM Giaa", file: "HAGIA_SOPIA" },
    { id: "Muthe", name: "PM Muthe", file: "MUTIARA_AZZAHRA" },
    { id: "Lia", name: "PM Lia", file: "AURELLIA_LIA" },
    { id: "Michie", name: "PM Michie", file: "MICHELLE_ALEXANDRA" },
    { id: "Trisha", name: "PM Trisha", file: "JAZZLYN_TRISHA" },
    { id: "Chelsea", name: "PM Chelsea", file: "CHELSEA_DEVINA" },
    { id: "Elin", name: "PM Elin", file: "CELLINE_THEFANI" },
    { id: "Anindya", name: "PM Anindya", file: "ANINDYA_RAMADHANI" },
    { id: "Heidi", name: "PM Heidi", file: "HEIDA_SUYANGGA" },
    { id: "Christy", name: "PM Christy", file: "ANGELINA_CHRISTY" },
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
    { id: "Nayla", name: "PM Nayla", file: "NAYLA_SUJI" },
    { id: "Auwia", name: "PM Auwia", file: "AULIA_RIZA" },
    { id: "Maxine", name: "PM Maxine", file: "MAXINE_FAYE" }
];

// TEAM CATEGORIES
const TEAM_DREAM = ["Delynn", "Olla", "Freya", "Ella", "Gita", "Greesel", "Uty", "Lyn", "Marsha", "Nachia", "Oline", "Nala", "Amanda", "Chelsea", "Gendis"];
const TEAM_PASSION = ["Feni", "Muthe", "Jessi", "Christy", "Oniel", "Lulu", "Kathrina", "Raisha", "Danella", "Daisy", "Aralie", "Erine", "Levia", "Levi", "Ribka", "Kimmy"];
const TEAM_LOVE = ["Fiony", "Indah", "Lia", "Alya", "Anindya", "Cathy", "Elin", "Cynthia", "Gracie", "Michie", "Lana", "Fritzy", "Lily", "Trisha", "Nayla"];

let subscribedFolders = [];
let activeMember = null;
let currentStarColor = "#ffffff";

// INFINITE SCROLL PAGINATION STATE & MEDIA GRID STATE
let oldestMsgId = 0;
let isLoadingMore = false;
let hasMoreMessages = true;
let currentMemberAllMessages = [];
let currentMediaTab = 'photo';

function getCookie(name) {
    let nameEQ = name + "="; let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]; while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
    }
    return null;
}

function logout() {
    document.cookie = "user_session_pm=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "../";
}

async function initPage() {
    const session = getCookie("user_session_pm");
    if (!session) {
        window.location.href = "../";
        return;
    }

    requestNotificationPermission();
    setupWebSocket();
    setupStarCanvas();

    try {
        const res = await fetch(BACKEND_URL + "/pm/userpmstat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session })
        });
        const data = await res.json();

        if (res.ok && data.ok) {
            subscribedFolders = (data.subscriptions || []).map(s => s.folder_name.toUpperCase());
            document.getElementById("userBadge").innerText = data.nama || "Convenant VIP";
            renderMemberList();
        } else {
            logout();
        }
    } catch (e) {
        console.error("Init Error:", e);
        renderMemberList();
    }
}

function handleAvatarError(imgElem, baseFile, isSubbed) {
    if (baseFile === "HUMAIRA_RAMADHANI") {
        const ghUrl = isSubbed
            ? "https://raw.githubusercontent.com/angelinachristyclone-ship-it/webwbwbwbwb/main/skin/HUMAIRA_RAMADHANI_UNCOMMON.jpg"
            : "https://raw.githubusercontent.com/angelinachristyclone-ship-it/webwbwbwbwb/main/skin/HUMAIRA_RAMADHANI_UNCOMMON_grey.jpg";
        imgElem.onerror = function() {
            this.onerror = null;
            this.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='%23555'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>";
        };
        imgElem.src = ghUrl;
        return;
    }
    const suffix = isSubbed ? ".jpg" : "_grey.jpg";
    const tiers = ["UNCOMMON", "MYTH", "RARE", "COMMON"];
    let idx = 0;
    
    function tryNext() {
        if (idx < tiers.length) {
            const tier = tiers[idx++];
            imgElem.src = `../../skin/${baseFile}_${tier}${suffix}`;
        } else {
            imgElem.onerror = null;
            imgElem.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='%23555'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/></svg>";
        }
    }
    imgElem.onerror = tryNext;
    tryNext();
}

// FITUR PENCARIAN PROFIL MEMBER OSHI DI SIDEBAR KIRI
function filterMemberList() {
    renderMemberList();
}

function renderMemberList() {
    const listContainer = document.getElementById("memberList");
    const query = (document.getElementById("memberSearchInput") ? document.getElementById("memberSearchInput").value : "").toLowerCase().trim();
    let html = "";

    // 1. Filter Berdasarkan Pencarian Oshi
    const filteredList = MEMBER_PM_LIST.filter(mem => {
        if (!query) return true;
        return mem.name.toLowerCase().includes(query) || mem.id.toLowerCase().includes(query);
    });

    // 2. Prioritas: Member BERLANGGANAN Tampil Paling ATAS
    const sortedList = filteredList.sort((a, b) => {
        const isSubA = subscribedFolders.includes(a.name.toUpperCase()) || subscribedFolders.includes(a.id.toUpperCase());
        const isSubB = subscribedFolders.includes(b.name.toUpperCase()) || subscribedFolders.includes(b.id.toUpperCase());
        if (isSubA && !isSubB) return -1;
        if (!isSubA && isSubB) return 1;
        return 0;
    });

    sortedList.forEach(mem => {
        const isSubbed = subscribedFolders.includes(mem.name.toUpperCase()) || subscribedFolders.includes(mem.id.toUpperCase());
        const imgClass = isSubbed ? "member-avatar" : "member-avatar grey";
        const baseFile = mem.file;
        const mythSrc = isSubbed ? `../../skin/${baseFile}_MYTH.jpg` : `../../skin/${baseFile}_MYTH_grey.jpg`;

        let teamClass = "team-default";
        if (TEAM_DREAM.includes(mem.id)) teamClass = "team-dream";
        else if (TEAM_PASSION.includes(mem.id)) teamClass = "team-passion";
        else if (TEAM_LOVE.includes(mem.id)) teamClass = "team-love";

        html += `
            <div class="member-item ${teamClass} ${activeMember && activeMember.id === mem.id ? 'active' : ''}" onclick="selectMember('${mem.id}')">
                <div class="member-avatar-wrap">
                    <img src="${mythSrc}" class="${imgClass}" alt="${mem.name}" 
                         onerror="handleAvatarError(this, '${baseFile}', ${isSubbed});">
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

    listContainer.innerHTML = html || `<div style="text-align:center; color:var(--text-sub); padding:20px; font-size:13px;">Oshi "${query}" tidak ditemukan</div>`;
}

async function selectMember(memberId) {
    activeMember = MEMBER_PM_LIST.find(m => m.id === memberId);
    renderMemberList();

    // Reset status pagination & data media
    oldestMsgId = 0;
    isLoadingMore = false;
    hasMoreMessages = true;
    currentMemberAllMessages = [];

    // Ubah Tema Background Berdasarkan Team / Generasi Member (Tajam ke Hitam Polos #05070d)
    const chatArea = document.querySelector(".chat-area");
    const memId = activeMember.id;

    if (TEAM_DREAM.includes(memId)) {
        chatArea.style.background = "linear-gradient(180deg, rgba(0, 180, 255, 0.35) 0%, #05070d 80%)";
        currentStarColor = "#00ff66";
    } else if (TEAM_PASSION.includes(memId)) {
        chatArea.style.background = "linear-gradient(180deg, rgba(255, 30, 60, 0.35) 0%, #05070d 80%)";
        currentStarColor = "#ff7700";
    } else if (TEAM_LOVE.includes(memId)) {
        chatArea.style.background = "linear-gradient(180deg, rgba(255, 0, 128, 0.35) 0%, #05070d 80%)";
        currentStarColor = "#ff0055";
    } else {
        chatArea.style.background = "linear-gradient(180deg, rgba(25, 35, 55, 0.35) 0%, #05070d 80%)";
        currentStarColor = "#ffffff";
    }

    const isSubbed = subscribedFolders.includes(activeMember.name.toUpperCase()) || subscribedFolders.includes(activeMember.id.toUpperCase());
    
    document.getElementById("headerName").innerText = activeMember.name;
    const baseFile = activeMember.file;
    const headerMyth = isSubbed ? `../../skin/${baseFile}_MYTH.jpg` : `../../skin/${baseFile}_MYTH_grey.jpg`;

    const headerAvatar = document.getElementById("headerAvatar");
    headerAvatar.src = headerMyth;
    headerAvatar.onerror = function() {
        handleAvatarError(this, baseFile, isSubbed);
    };
    headerAvatar.className = isSubbed ? "header-member-avatar" : "header-member-avatar grey";
    document.getElementById("headerSub").innerText = isSubbed ? "Aktif Berlangganan" : "🔒 Belum Berlangganan";

    const chatMessages = document.getElementById("chatMessages");
    chatMessages.innerHTML = `<div style="margin:auto; color:var(--text-sub);">⏳ Memuat 600 riwayat pesan PM ${activeMember.name}...</div>`;

    if (!isSubbed) {
        chatMessages.innerHTML = `
            <div class="unsubscribed-notice">
                <h3>🔒 Belum Berlangganan ${activeMember.name}</h3>
                <p>Anda belum berlangganan ${activeMember.name}. Silakan order paket langganan di <b>convenant.my.id</b> sekarang untuk melihat arsip pesan!</p>
                <a href="https://convenant.my.id" target="_blank" class="order-btn">ORDER SEKARANG</a>
            </div>
        `;
        document.getElementById("mediaGrid").innerHTML = `<div style="grid-column: span 3; text-align:center; color:var(--text-sub); padding:20px;">Shared media terkunci</div>`;
        return;
    }

    // Fetch pesan real-time Telegram dari backend /pm/getpmmessages (LANGSUNG LOAD 600 CHAT SEKALIGUS)
    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session, folder_name: activeMember.name, limit: 600, offset_id: 0 })
        });
        const data = await res.json();

        if (res.ok && data.ok) {
            const msgs = data.messages || [];
            currentMemberAllMessages = msgs;
            if (msgs.length > 0) {
                oldestMsgId = msgs[msgs.length - 1].id;
                if (msgs.length < 600) hasMoreMessages = false;
            } else {
                hasMoreMessages = false;
            }
            renderMessages(msgs);
            renderMediaGrid();
        } else {
            chatMessages.innerHTML = `<div class="unsubscribed-notice"><h3>⚠️ Notice</h3><p>${data.msg}</p></div>`;
        }
    } catch (e) {
        chatMessages.innerHTML = `<div style="margin:auto; color:#ff4d4d;">❌ Gagal memuat pesan dari Telegram.</div>`;
    }
}

// --- LIGHTBOX MODAL FULLSCREEN PREVIEW & SAFE BLOB DOWNLOAD ---
function openLightbox(mediaSrc, mediaType, filename) {
    const modal = document.getElementById("lightboxModal");
    const container = document.getElementById("lightboxMediaContainer");
    const saveBtn = document.getElementById("lightboxSaveBtn");

    if (mediaType === 'video') {
        container.innerHTML = `<video src="${mediaSrc}" controls autoplay style="max-width:88vw; max-height:78vh; border-radius:12px; box-shadow: 0 10px 30px rgba(0,0,0,0.8);"></video>`;
    } else if (mediaType === 'audio') {
        container.innerHTML = `
            <div style="background:rgba(20,25,35,0.95); padding:30px; border-radius:16px; width:320px; text-align:center; border:1px solid var(--border-color);">
                <div style="font-size:40px; margin-bottom:12px;">🎵</div>
                <div style="font-size:14px; font-weight:600; margin-bottom:16px; color:#fff;">Voice / Audio PM</div>
                <audio src="${mediaSrc}" controls autoplay style="width:100%;"></audio>
            </div>`;
    } else {
        container.innerHTML = `<img src="${mediaSrc}" style="max-width:88vw; max-height:78vh; border-radius:12px; object-fit:contain; box-shadow: 0 10px 30px rgba(0,0,0,0.8);">`;
    }

    saveBtn.onclick = function() {
        downloadBlobMedia(mediaSrc, filename || 'pm_media_file');
    };

    modal.style.display = "flex";
}

function closeLightbox(e) {
    const modal = document.getElementById("lightboxModal");
    const container = document.getElementById("lightboxMediaContainer");
    container.innerHTML = "";
    modal.style.display = "none";
}

async function directDownload(btnElem, mediaUrl, filename) {
    let originalText = "";
    if (btnElem) {
        btnElem.disabled = true;
        originalText = btnElem.innerText;
        btnElem.innerText = "⏳ Mengunduh...";
    }

    requestAnimationFrame(async () => {
        try {
            const res = await fetch(mediaUrl);
            const blob = await res.blob();
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = blobUrl;
            a.download = filename || "pm_media";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);

            if (btnElem) {
                btnElem.innerText = "✅ Tersimpan!";
                setTimeout(() => {
                    btnElem.innerText = originalText;
                    btnElem.disabled = false;
                }, 2000);
            }
        } catch(e) {
            const a = document.createElement("a");
            a.href = mediaUrl;
            a.download = filename || "pm_media";
            a.click();
            if (btnElem) {
                btnElem.innerText = originalText;
                btnElem.disabled = false;
            }
        }
    });
}

async function downloadBlobMedia(mediaUrl, filename) {
    directDownload(null, mediaUrl, filename);
}

// --- SHARED MEDIA TABS & GRID RENDER ---
function switchMediaTab(tabType) {
    currentMediaTab = tabType;
    document.querySelectorAll('.media-tab-btn').forEach(btn => btn.classList.remove('active'));
    if (tabType === 'photo') document.getElementById('mediaTabPhoto').classList.add('active');
    if (tabType === 'video') document.getElementById('mediaTabVideo').classList.add('active');
    if (tabType === 'audio') document.getElementById('mediaTabAudio').classList.add('active');
    renderMediaGrid();
}

function renderMediaGrid() {
    const mediaGrid = document.getElementById("mediaGrid");
    const filtered = currentMemberAllMessages.filter(m => m.has_media && m.media_type === currentMediaTab);

    if (filtered.length === 0) {
        mediaGrid.innerHTML = `<div style="grid-column: span 3; text-align:center; color:var(--text-sub); padding:30px; font-size:13px;">Tidak ada media ${currentMediaTab}</div>`;
        return;
    }

    let html = "";
    filtered.forEach(msg => {
        const mediaSrc = BACKEND_URL + "/pm/media/" + msg.id;
        if (currentMediaTab === 'photo') {
            html += `
                <div style="position:relative; cursor:pointer;" onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                    <img src="${mediaSrc}" class="media-grid-item" alt="Media">
                </div>`;
        } else if (currentMediaTab === 'video') {
            html += `
                <div style="position:relative; cursor:pointer;" onclick="openLightbox('${mediaSrc}', 'video', 'pm_video_${msg.id}.mp4')">
                    <video src="${mediaSrc}" class="media-grid-item" style="object-fit:cover;"></video>
                    <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.4); border-radius:8px; color:#fff; font-size:16px;">▶</div>
                </div>`;
        } else if (currentMediaTab === 'audio') {
            html += `
                <div style="grid-column: span 3; background:rgba(255,255,255,0.06); padding:10px 14px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; cursor:pointer; border:1px solid var(--border-color);" onclick="openLightbox('${mediaSrc}', 'audio', 'pm_audio_${msg.id}.m4a')">
                    <span style="font-size:12px; color:#fff;">🎵 Voice Note [${msg.timestamp || 'Audio'}]</span>
                    <span style="font-size:11px; color:var(--accent-blue); font-weight:600;">▶ Putar</span>
                </div>`;
        }
    });
    mediaGrid.innerHTML = html;
}

// --- RENDER CHAT DENGAN PEMISAH TANGGAL & HARI ---
function formatDateHeader(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr.replace(/-/g, '/'));
    if (isNaN(d.getTime())) return dateStr;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
}

function buildMessageNode(msg) {
    let timeOnly = msg.timestamp;
    if (msg.timestamp && msg.timestamp.includes(" ")) {
        const parts = msg.timestamp.split(" ");
        timeOnly = parts[1] || msg.timestamp;
    }

    let mediaTag = "";
    if (msg.has_media) {
        const mediaSrc = BACKEND_URL + "/pm/media/" + msg.id;
        if (msg.media_type === 'photo') {
            mediaTag = `
                <div style="position:relative;">
                    <img src="${mediaSrc}" class="msg-media" alt="Foto PM" onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                    <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_photo_${msg.id}.jpg')">💾 Simpan Foto</button>
                </div>`;
        } else if (msg.media_type === 'video') {
            mediaTag = `
                <div style="position:relative;">
                    <video src="${mediaSrc}" class="msg-media" controls preload="metadata" onclick="openLightbox('${mediaSrc}', 'video', 'pm_video_${msg.id}.mp4')"></video>
                    <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_video_${msg.id}.mp4')">💾 Simpan Video</button>
                </div>`;
        } else if (msg.media_type === 'audio') {
            mediaTag = `
                <div style="background:rgba(0,0,0,0.2); padding:8px; border-radius:8px; margin-bottom:6px;">
                    <audio src="${mediaSrc}" controls style="width:100%; margin-bottom:4px;"></audio>
                    <button class="save-media-btn" style="font-size:11px;" onclick="directDownload(this, '${mediaSrc}', 'pm_audio_${msg.id}.m4a')">💾 Simpan Voice/Audio</button>
                </div>`;
        }
    }

    return `
        <div class="msg-row">
            <div class="msg-bubble">
                ${mediaTag}
                <div>${(msg.text || "").replace(/\n/g, '<br>')}</div>
            </div>
            <div class="msg-timestamp">[${timeOnly}]</div>
        </div>
    `;
}

function renderMessages(messages) {
    const chatMessages = document.getElementById("chatMessages");
    
    if (messages.length === 0) {
        chatMessages.innerHTML = `<div style="margin:auto; color:var(--text-sub);">Belum ada riwayat pesan PM.</div>`;
        return;
    }

    let msgHtml = "";
    let lastDate = "";

    // Render pesan (terlama di atas, terbaru di bawah)
    messages.slice().reverse().forEach(msg => {
        let currentDate = "";
        if (msg.timestamp && msg.timestamp.includes(" ")) {
            currentDate = msg.timestamp.split(" ")[0];
        }

        if (currentDate && currentDate !== lastDate) {
            const formattedDateStr = formatDateHeader(currentDate);
            msgHtml += `<div class="date-divider"><span class="date-badge">${formattedDateStr}</span></div>`;
            lastDate = currentDate;
        }

        msgHtml += buildMessageNode(msg);
    });

    chatMessages.innerHTML = msgHtml;
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- INFINITE SCROLL PAGINATION (LOAD 500 PESAN LAMA BERIKUTNYA) ---
async function loadOlderMessages() {
    if (isLoadingMore || !hasMoreMessages || !activeMember || oldestMsgId === 0) return;
    
    isLoadingMore = true;
    const chatMessages = document.getElementById("chatMessages");
    const previousScrollHeight = chatMessages.scrollHeight;

    const loaderDiv = document.createElement("div");
    loaderDiv.id = "scrollLoader";
    loaderDiv.style.textAlign = "center";
    loaderDiv.style.color = "var(--text-sub)";
    loaderDiv.style.padding = "10px";
    loaderDiv.style.fontSize = "12px";
    loaderDiv.innerText = "⏳ Memuat 600 pesan lama berikutnya...";
    chatMessages.insertBefore(loaderDiv, chatMessages.firstChild);

    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: activeMember.name,
                limit: 600,
                offset_id: oldestMsgId
            })
        });
        const data = await res.json();
        const loader = document.getElementById("scrollLoader");
        if (loader) loader.remove();

        if (res.ok && data.ok && data.messages && data.messages.length > 0) {
            const olderMsgs = data.messages;
            if (olderMsgs.length < 600) hasMoreMessages = false;
            oldestMsgId = olderMsgs[olderMsgs.length - 1].id;
            currentMemberAllMessages = currentMemberAllMessages.concat(olderMsgs);

            const tempDiv = document.createElement("div");
            let prependHtml = "";
            let lastDate = "";

            olderMsgs.slice().reverse().forEach(msg => {
                let currentDate = "";
                if (msg.timestamp && msg.timestamp.includes(" ")) {
                    currentDate = msg.timestamp.split(" ")[0];
                }
                if (currentDate && currentDate !== lastDate) {
                    const formattedDateStr = formatDateHeader(currentDate);
                    prependHtml += `<div class="date-divider"><span class="date-badge">${formattedDateStr}</span></div>`;
                    lastDate = currentDate;
                }
                prependHtml += buildMessageNode(msg);
            });

            tempDiv.innerHTML = prependHtml;
            while (tempDiv.firstChild) {
                chatMessages.insertBefore(tempDiv.firstChild, chatMessages.firstChild);
            }

            // Jaga posisi scroll
            const newScrollHeight = chatMessages.scrollHeight;
            chatMessages.scrollTop = newScrollHeight - previousScrollHeight;
            renderMediaGrid();
        } else {
            hasMoreMessages = false;
        }
    } catch (e) {
        const loader = document.getElementById("scrollLoader");
        if (loader) loader.remove();
    } finally {
        isLoadingMore = false;
    }
}

function toggleMediaPanel() {
    document.getElementById("mediaPanel").classList.toggle("open");
}

// --- CANVAS BINTANG OPTIMIZED 60FPS ---
function setupStarCanvas() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const stars = [];
    const numStars = 60;

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.01 + 0.003
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) {
                star.speed = -star.speed;
            }
            ctx.fillStyle = currentStarColor;
            ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// --- WEBSOCKET REAL-TIME BROADCAST LISTENER ---
function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
        Notification.requestPermission();
    }
}

function triggerWebNotification(memberName, textContent) {
    if ("Notification" in window && Notification.permission === "granted") {
        const title = `📩 Pesan PM Baru dari ${memberName}`;
        const options = {
            body: textContent || "Member baru saja mengirimkan pesan/media baru di Convenant PM!"
        };
        new Notification(title, options);
    }
}

let wsRetryCount = 0;
const MAX_WS_RETRIES = 5;

function setupWebSocket() {
    const session = getCookie("user_session_pm");
    if (!session) return;
    if (wsRetryCount >= MAX_WS_RETRIES) return;

    const wsUrl = BACKEND_URL.replace(/^http/, 'ws') + "/pm/ws/" + session;

    try {
        const ws = new WebSocket(wsUrl);

        ws.onopen = function() {
            wsRetryCount = 0;
        };

        ws.onmessage = function(event) {
            try {
                const data = JSON.parse(event.data);
                if (data && data.folder_name) {
                    triggerWebNotification(data.folder_name, data.text);
                    if (activeMember && activeMember.name.toUpperCase() === data.folder_name.toUpperCase()) {
                        selectMember(activeMember.id);
                    }
                }
            } catch (e) {}
        };

        ws.onclose = function() {
            wsRetryCount++;
            setTimeout(setupWebSocket, 5000);
        };
    } catch (e) {}
}

function scrollToLatestChat() {
    const chatMessages = document.getElementById("chatMessages");
    if (chatMessages) {
        chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initPage();
    const chatMessages = document.getElementById("chatMessages");
    if (chatMessages) {
        chatMessages.addEventListener("scroll", function() {
            // Infinite scroll ke atas untuk load pesan lama
            if (this.scrollTop < 60) {
                loadOlderMessages();
            }
            // Tampilkan / sembunyikan tombol panah bawah
            const btn = document.getElementById("scrollToBottomBtn");
            if (btn) {
                const isUp = (this.scrollHeight - this.scrollTop - this.clientHeight) > 250;
                if (isUp) {
                    btn.classList.add("visible");
                } else {
                    btn.classList.remove("visible");
                }
            }
        });
    }
});
