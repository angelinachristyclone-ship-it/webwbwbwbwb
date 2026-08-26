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

// STATE MANAGEMENT & REQUEST CANCELLATION
let oldestMsgId = 0;
let isLoadingMore = false;
let hasMoreMessages = true;
let currentMemberAllMessages = [];
let currentMediaTab = 'photo';
let currentFetchController = null;
let searchDebounceTimer = null;

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
            const userBadge = document.getElementById("userBadge");
            if (userBadge) userBadge.innerText = data.nama || "Convenant VIP";
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
    imgElem.onerror = null;
    imgElem.src = "../../logo.png";
}

// DEBOUNCED MEMBER SEARCH IN SIDEBAR
function filterMemberList() {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
        renderMemberList();
    }, 120);
}

function renderMemberList() {
    const listContainer = document.getElementById("memberList");
    if (!listContainer) return;
    const query = (document.getElementById("memberSearchInput") ? document.getElementById("memberSearchInput").value : "").toLowerCase().trim();
    let html = "";

    const filteredList = MEMBER_PM_LIST.filter(mem => {
        if (!query) return true;
        return mem.name.toLowerCase().includes(query) || mem.id.toLowerCase().includes(query);
    });

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
            <div class="member-item ${teamClass} ${activeMember && activeMember.id === mem.id ? 'active' : ''}" onclick="selectMember('${mem.id}')" role="option" aria-selected="${activeMember && activeMember.id === mem.id}">
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

function showSidebarMobile() {
    document.body.classList.remove("mobile-chat-active");
}

async function selectMember(memberId) {
    if (activeMember && activeMember.id === memberId && currentMemberAllMessages.length > 0) {
        document.body.classList.add("mobile-chat-active");
        return;
    }

    activeMember = MEMBER_PM_LIST.find(m => m.id === memberId);
    renderMemberList();

    document.body.classList.add("mobile-chat-active");

    // Abort request fetch member sebelumnya jika user berpindah cepat
    if (currentFetchController) {
        currentFetchController.abort();
    }
    currentFetchController = new AbortController();

    oldestMsgId = 0;
    isLoadingMore = false;
    hasMoreMessages = true;
    currentMemberAllMessages = [];

    const chatArea = document.querySelector(".chat-area");
    const memId = activeMember.id;

    if (TEAM_DREAM.includes(memId)) {
        chatArea.style.background = "linear-gradient(180deg, rgba(0, 140, 255, 0.55) 0%, #0f0f0f 80%)";
        currentStarColor = "#00ff66";
    } else if (TEAM_PASSION.includes(memId)) {
        chatArea.style.background = "linear-gradient(180deg, rgba(255, 0, 40, 0.55) 0%, #0f0f0f 80%)";
        currentStarColor = "#ff7700";
    } else if (TEAM_LOVE.includes(memId)) {
        chatArea.style.background = "linear-gradient(180deg, rgba(255, 0, 140, 0.55) 0%, #0f0f0f 80%)";
        currentStarColor = "#ff0055";
    } else {
        chatArea.style.background = "linear-gradient(180deg, rgba(30, 45, 70, 0.55) 0%, #0f0f0f 80%)";
        currentStarColor = "#ffffff";
    }

    const isSubbed = subscribedFolders.includes(activeMember.name.toUpperCase()) || subscribedFolders.includes(activeMember.id.toUpperCase());
    
    document.getElementById("headerName").innerText = activeMember.name;
    const baseFile = activeMember.file;
    const headerMyth = isSubbed ? `../../skin/${baseFile}_MYTH.jpg` : `../../skin/${baseFile}_MYTH_grey.jpg`;

    const headerAvatar = document.getElementById("headerAvatar");
    headerAvatar.src = headerMyth;
    headerAvatar.onerror = function() { handleAvatarError(this, baseFile, isSubbed); };
    headerAvatar.className = isSubbed ? "header-member-avatar" : "header-member-avatar grey";
    document.getElementById("headerSub").innerText = isSubbed ? "Aktif Berlangganan" : "🔒 Belum Berlangganan";

    const chatMessages = document.getElementById("chatMessages");
    chatMessages.innerHTML = renderSkeletonLoader();

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

    // Fetch pesan Telegram awal (Limit 50 pesan seperti Telegram Web)
    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session, folder_name: activeMember.name, limit: 50, offset_id: 0 }),
            signal: currentFetchController.signal
        });
        const data = await res.json();

        if (res.ok && data.ok) {
            const msgs = data.messages || [];
            currentMemberAllMessages = msgs;
            if (msgs.length > 0) {
                oldestMsgId = msgs[msgs.length - 1].id;
                if (msgs.length < 50) hasMoreMessages = false;
            } else {
                hasMoreMessages = false;
            }
            renderMessages(msgs);
            renderMediaGrid();
        } else {
            chatMessages.innerHTML = `<div class="unsubscribed-notice"><h3>⚠️ Notice</h3><p>${data.msg}</p></div>`;
        }
    } catch (e) {
        if (e.name !== "AbortError") {
            chatMessages.innerHTML = `<div style="margin:auto; color:#ff4d4d;">❌ Gagal memuat pesan dari Telegram.</div>`;
        }
    }
}

// LIGHTBOX MODAL & SAFE BLOB DOWNLOAD
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

// SHARED MEDIA TABS & BATCHED GRID RENDER (BATCH 20 ITEMS)
function switchMediaTab(tabType) {
    currentMediaTab = tabType;
    document.querySelectorAll('.media-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
    });
    if (tabType === 'photo') {
        const btn = document.getElementById('mediaTabPhoto');
        if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
    }
    if (tabType === 'video') {
        const btn = document.getElementById('mediaTabVideo');
        if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
    }
    if (tabType === 'audio') {
        const btn = document.getElementById('mediaTabAudio');
        if (btn) { btn.classList.add('active'); btn.setAttribute('aria-selected', 'true'); }
    }
    renderMediaGrid();
}

function renderMediaGrid() {
    const mediaGrid = document.getElementById("mediaGrid");
    if (!mediaGrid) return;
    const filtered = currentMemberAllMessages.filter(m => m.has_media && m.media_type === currentMediaTab);

    if (filtered.length === 0) {
        mediaGrid.innerHTML = `<div style="grid-column: span 3; text-align:center; color:var(--text-sub); padding:30px; font-size:13px;">Tidak ada media ${currentMediaTab}</div>`;
        return;
    }

    // Batch limit max 20 items per render agar tidak memberatkan browser
    const batched = filtered.slice(0, 20);

    let html = "";
    batched.forEach(msg => {
        const mediaSrc = BACKEND_URL + "/pm/media/" + msg.id;
        const thumbSrc = BACKEND_URL + "/pm/thumb/" + msg.id;
        if (currentMediaTab === 'photo') {
            html += `
                <div style="position:relative; cursor:pointer;" onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                    <img src="${thumbSrc}" loading="lazy" class="media-grid-item" alt="Media Thumbnail" onerror="this.onerror=null; this.src='${mediaSrc}';">
                </div>`;
        } else if (currentMediaTab === 'video') {
            html += `
                <div style="position:relative; cursor:pointer;" onclick="openLightbox('${mediaSrc}', 'video', 'pm_video_${msg.id}.mp4')">
                    <img src="${thumbSrc}" loading="lazy" class="media-grid-item" style="object-fit:cover;" onerror="this.onerror=null; this.src='../../logo.png';">
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

// RENDER CHAT DENGAN PEMISAH TANGGAL
function formatDateHeader(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr.replace(/-/g, '/'));
    if (isNaN(d.getTime())) return dateStr;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
}

function renderSkeletonLoader() {
    return `
        <div class="skeleton-wrapper">
            <div class="skeleton-bubble short"></div>
            <div class="skeleton-bubble medium"></div>
            <div class="skeleton-bubble long"></div>
            <div class="skeleton-bubble short"></div>
            <div class="skeleton-bubble medium"></div>
        </div>
    `;
}

let mediaObserver = null;

function getAdaptiveRootMargin() {
    const deviceMemory = navigator.deviceMemory || 4;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const effectiveType = connection ? connection.effectiveType : '4g';
    const saveData = connection ? connection.saveData : false;

    if (deviceMemory <= 3 || saveData || effectiveType === '2g' || effectiveType === '3g') {
        return "400px 0px 400px 0px"; // Low RAM / Save Data mode (Prevent OOM)
    } else if (deviceMemory >= 8 && effectiveType === '4g') {
        return "800px 0px 800px 0px"; // Desktop / High RAM & Fast Connection
    }
    return "600px 0px 600px 0px"; // Default Balanced Profile
}

function setupMediaViewportObserver() {
    if (mediaObserver) mediaObserver.disconnect();
    
    const container = document.getElementById("chatMessages");
    if (!container) return;

    const adaptiveMargin = getAdaptiveRootMargin();

    mediaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const mediaElem = entry.target;
            const realSrc = mediaElem.dataset.src;
            
            if (entry.isIntersecting) {
                if (realSrc && mediaElem.src !== realSrc) {
                    mediaElem.src = realSrc;
                }
            } else {
                if (realSrc && mediaElem.src === realSrc) {
                    mediaElem.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                }
            }
        });
    }, {
        root: container,
        rootMargin: adaptiveMargin
    });

    document.querySelectorAll('.msg-media[data-src]').forEach(elem => {
        mediaObserver.observe(elem);
    });
}

function buildMessageNode(msg, isRecent = false) {
    let timeOnly = msg.timestamp;
    if (msg.timestamp && msg.timestamp.includes(" ")) {
        const parts = msg.timestamp.split(" ");
        timeOnly = parts[1] || msg.timestamp;
    }

    let mediaTag = "";
    if (msg.has_media) {
        const mediaSrc = BACKEND_URL + "/pm/media/" + msg.id;

        if (msg.media_type === 'photo') {
            if (isRecent) {
                mediaTag = `
                    <div style="position:relative; min-height:140px;">
                        <img src="${mediaSrc}" loading="eager" fetchpriority="high" decoding="async" class="msg-media" alt="Foto PM" onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                        <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_photo_${msg.id}.jpg')">💾 Simpan Foto</button>
                    </div>`;
            } else {
                mediaTag = `
                    <div style="position:relative; min-height:140px;">
                        <img data-src="${mediaSrc}" loading="lazy" decoding="async" class="msg-media" alt="Foto PM" onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                        <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_photo_${msg.id}.jpg')">💾 Simpan Foto</button>
                    </div>`;
            }
        } else if (msg.media_type === 'video') {
            if (isRecent) {
                mediaTag = `
                    <div style="position:relative; min-height:140px;">
                        <video src="${mediaSrc}" loading="eager" fetchpriority="high" class="msg-media" controls preload="metadata" onclick="openLightbox('${mediaSrc}', 'video', 'pm_video_${msg.id}.mp4')"></video>
                        <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_video_${msg.id}.mp4')">💾 Simpan Video</button>
                    </div>`;
            } else {
                mediaTag = `
                    <div style="position:relative; min-height:140px;">
                        <video data-src="${mediaSrc}" loading="lazy" class="msg-media" controls preload="metadata" onclick="openLightbox('${mediaSrc}', 'video', 'pm_video_${msg.id}.mp4')"></video>
                        <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_video_${msg.id}.mp4')">💾 Simpan Video</button>
                    </div>`;
            }
        } else if (msg.media_type === 'audio') {
            mediaTag = `
                <div style="background:rgba(0,0,0,0.2); padding:8px; border-radius:8px; margin-bottom:6px;">
                    <audio src="${mediaSrc}" controls preload="none" style="width:100%; margin-bottom:4px;"></audio>
                    <button class="save-media-btn" style="font-size:11px;" onclick="directDownload(this, '${mediaSrc}', 'pm_audio_${msg.id}.m4a')">💾 Simpan Voice/Audio</button>
                </div>`;
        }
    }

    return `
        <div class="msg-row" data-msg-id="${msg.id}">
            <div class="msg-bubble">
                ${mediaTag}
                <div>${(msg.text || "").replace(/\n/g, '<br>')}</div>
                <div class="msg-timestamp">${timeOnly}</div>
            </div>
        </div>
    `;
}

function forceScrollToBottom() {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;
    chatMessages.scrollTop = chatMessages.scrollHeight + 100000;
    
    requestAnimationFrame(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight + 100000;
    });
}

function renderMessages(messages) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;
    
    if (messages.length === 0) {
        chatMessages.innerHTML = `<div style="margin:auto; color:var(--text-sub);">Belum ada riwayat pesan PM.</div>`;
        return;
    }

    let msgHtml = "";
    let lastDate = "";
    const totalCount = messages.length;

    const reversed = messages.slice().reverse();
    reversed.forEach((msg, idx) => {
        let currentDate = "";
        if (msg.timestamp && msg.timestamp.includes(" ")) {
            currentDate = msg.timestamp.split(" ")[0];
        }

        if (currentDate && currentDate !== lastDate) {
            const formattedDateStr = formatDateHeader(currentDate);
            msgHtml += `<div class="date-divider"><span class="date-badge">${formattedDateStr}</span></div>`;
            lastDate = currentDate;
        }

        // Limit eager loading to bottom 5 items only
        const isRecent = (idx >= totalCount - 5);
        msgHtml += buildMessageNode(msg, isRecent);
    });

    chatMessages.innerHTML = msgHtml;
    forceScrollToBottom();
    setupMediaViewportObserver();
}

// INCREMENTAL APPEND SINGLE MESSAGE (TELEGRAM WEB BEHAVIOR)
function appendSingleMessage(newMsg) {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    // Tambahkan ke memori pesan member aktif
    currentMemberAllMessages.unshift(newMsg);

    const isNearBottom = (chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight) < 250;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = buildMessageNode(newMsg, true);
    while (tempDiv.firstChild) {
        chatMessages.appendChild(tempDiv.firstChild);
    }

    if (isNearBottom) {
        forceScrollToBottom();
    } else {
        const btn = document.getElementById("scrollToBottomBtn");
        if (btn) btn.classList.add("visible");
    }

    setupMediaViewportObserver();
}

// INFINITE SCROLL PAGINATION (LOAD 50 PESAN LAMA BERIKUTNYA)
async function loadOlderMessages() {
    if (isLoadingMore || !hasMoreMessages || !activeMember || oldestMsgId === 0) return;

    isLoadingMore = true;
    const chatMessages = document.getElementById("chatMessages");
    const previousScrollHeight = chatMessages.scrollHeight;
    const previousScrollTop = chatMessages.scrollTop;

    const loader = document.createElement("div");
    loader.id = "scrollLoader";
    loader.style.textAlign = "center";
    loader.style.padding = "10px";
    loader.style.color = "var(--text-sub)";
    loader.style.fontSize = "12px";
    loader.innerText = "⏳ Memuat pesan lama...";
    chatMessages.insertBefore(loader, chatMessages.firstChild);

    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: activeMember.name,
                limit: 50,
                offset_id: oldestMsgId
            })
        });
        const data = await res.json();
        if (loader) loader.remove();

        if (res.ok && data.ok && data.messages && data.messages.length > 0) {
            const olderMsgs = data.messages;
            if (olderMsgs.length < 50) hasMoreMessages = false;
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
                prependHtml += buildMessageNode(msg, false);
            });

            tempDiv.innerHTML = prependHtml;
            while (tempDiv.firstChild) {
                chatMessages.insertBefore(tempDiv.firstChild, chatMessages.firstChild);
            }

            // PERTAHANKAN POSISI SCROLL TELEGRAM-LIKE PREPEND
            chatMessages.scrollTop = chatMessages.scrollHeight - previousScrollHeight + previousScrollTop;
            renderMediaGrid();
        } else {
            hasMoreMessages = false;
        }
    } catch (e) {
        if (loader) loader.remove();
    } finally {
        isLoadingMore = false;
    }
}

function toggleMediaPanel() {
    const mediaPanel = document.getElementById("mediaPanel");
    if (mediaPanel) mediaPanel.classList.toggle("open");
}

// CANVAS BINTANG OPTIMIZED (30 FPS, POWER SAVER & PAUSE SAAT SCROLL)
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

    const stars = Array.from({ length: 35 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.01 + 0.003
    }));

    let isScrolling = false;
    let scrollTimeout;
    
    const chatMessages = document.getElementById("chatMessages");
    if (chatMessages) {
        chatMessages.addEventListener('scroll', () => {
            isScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => { isScrolling = false; }, 150);
        });
    }

    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    function animate(currentTime) {
        requestAnimationFrame(animate);
        if (document.hidden || isScrolling) return;

        const delta = currentTime - lastTime;
        if (delta < interval) return;
        
        lastTime = currentTime - (delta % interval);
        ctx.clearRect(0, 0, width, height);
        
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
            ctx.fillStyle = currentStarColor;
            ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    requestAnimationFrame(animate);
}

// WEBSOCKET REAL-TIME BROADCAST LISTENER
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
                        // INCREMENTAL APPEND SINGLE MESSAGE (Telegram Web Behavior!)
                        const newMsg = data.message || {
                            id: data.id || Date.now(),
                            text: data.text || "",
                            timestamp: data.timestamp || new Date().toISOString(),
                            has_media: data.has_media || false,
                            media_type: data.media_type || null,
                            sender_id: data.sender_id || 0
                        };
                        appendSingleMessage(newMsg);
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
    forceScrollToBottom();
}

document.addEventListener("DOMContentLoaded", () => {
    initPage();
    const chatMessages = document.getElementById("chatMessages");
    if (chatMessages) {
        chatMessages.addEventListener("scroll", function() {
            if (this.scrollTop < 60) {
                loadOlderMessages();
            }
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
