// app.js - Convenant VIP Archive PM JKT48 (Winged Bubbles & Fast Engine)
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
const TEAM_DREAM = ["Delynn", "Olla", "Freya", "Ella", "Gita", "Greesel", "Uty", "Lyn", "Marsha", "Nachia", "Oline", "Nala", "Amanda", "Chelsea", "Gendis", "Eli"];
const TEAM_PASSION = ["Feni", "Muthe", "Jessi", "Christy", "Oniel", "Lulu", "Kathrina", "Raisha", "Danella", "Daisy", "Aralie", "Erine", "Levia", "Levi", "Ribka", "Kimmy"];
const TEAM_LOVE = ["Fiony", "Indah", "Lia", "Alya", "Anindya", "Cathy", "Elin", "Cynthia", "Gracie", "Michie", "Lana", "Fritzy", "Lily", "Trisha", "Nayla"];
const UNCOMMON_MEMBERS = ["Virgi", "Vera", "Jazzy", "Intan", "Jemima", "Maira", "Ekin", "Giaa", "Gia", "Heidi", "Rara", "Sona", "Rilly", "Mikaela", "Carissa", "Fahira", "Ralyne", "Bella", "Auwia", "Maxine", "Maxime"];

// STATE & CACHING
let subscribedFolders = [];
let activeMember = null;
const unreadMemberMap = {};
let allSavedMessages = [];
let currentMediaTab = 'photo';
let currentFetchController = null;

// FAST IN-MEMORY MESSAGE CACHE (0ms LATENCY ON MEMBER SWITCHING)
const MessageCache = new Map();

// HISTORY LIMIT
const HISTORY_LIMIT = 60;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return "";
}

function getMediaUrl(msgId) {
    const session = getCookie("user_session_pm") || "";
    const memberName = activeMember ? encodeURIComponent(activeMember.name) : "";
    return `${BACKEND_URL}/pm/media/${msgId}?session=${encodeURIComponent(session)}&session_cookie=${encodeURIComponent(session)}&folder=${memberName}`;
}

function getThumbUrl(msgId) {
    const session = getCookie("user_session_pm") || "";
    const memberName = activeMember ? encodeURIComponent(activeMember.name) : "";
    return `${BACKEND_URL}/pm/thumb/${msgId}?session=${encodeURIComponent(session)}&session_cookie=${encodeURIComponent(session)}&folder=${memberName}`;
}

function getMemberAvatarSrc(mem, isSubbed) {
    const baseFile = mem.file;
    const isUncommon = UNCOMMON_MEMBERS.includes(mem.id);
    if (isUncommon) {
        return isSubbed ? `../../skin/${baseFile}_UNCOMMON.jpg` : `../../skin/${baseFile}_UNCOMMON_grey.jpg`;
    }
    return isSubbed ? `../../skin/${baseFile}_MYTH.jpg` : `../../skin/${baseFile}_MYTH_grey.jpg`;
}

function handleAvatarError(imgElem, baseFile, isSubbed) {
    if (!imgElem.dataset.fallbackStep) {
        imgElem.dataset.fallbackStep = "1";
        imgElem.src = isSubbed ? `../../skin/${baseFile}_MYTH.jpg` : `../../skin/${baseFile}_MYTH_grey.jpg`;
    } else if (imgElem.dataset.fallbackStep === "1") {
        imgElem.dataset.fallbackStep = "2";
        imgElem.src = `../../skin_jpg/${baseFile}.jpg`;
    } else {
        imgElem.onerror = null;
        imgElem.src = "../../logo.png";
    }
}

function isMemberSubscribed(mem) {
    if (!mem) return false;
    if (subscribedFolders.includes("ALL")) return true;
    const cleanName = mem.name.trim().toUpperCase();
    const cleanId = mem.id.trim().toUpperCase();
    return subscribedFolders.some(sub => {
        const s = sub.trim().toUpperCase();
        return s === cleanName || s === cleanId || s === `PM ${cleanId}` || s.replace("PM ", "") === cleanId;
    });
}

// ═════════════════════════════════════════════════════════════════
// WINGED BUBBLE HTML GENERATOR
// ═════════════════════════════════════════════════════════════════
function createWingedBubbleHTML(mem, isStagger = false) {
    const isSubbed = isMemberSubscribed(mem);
    const avatarSrc = getMemberAvatarSrc(mem, isSubbed);
    const isActive = activeMember && activeMember.id === mem.id;
    const unread = Boolean(unreadMemberMap[mem.name.toUpperCase()] || unreadMemberMap[mem.id.toUpperCase()]);

    let teamClass = "team-default";
    let wingGradientL = "url(#wingGradLeft)";
    let wingGradientR = "url(#wingGradRight)";
    if (TEAM_DREAM.includes(mem.id)) teamClass = "team-dream";
    else if (TEAM_PASSION.includes(mem.id)) teamClass = "team-passion";
    else if (TEAM_LOVE.includes(mem.id)) teamClass = "team-love";

    if (isActive) {
        wingGradientL = "url(#goldWingLeft)";
        wingGradientR = "url(#goldWingRight)";
    }

    const itemClass = isStagger ? "winged-bubble-item stagger-bubble-item" : "winged-bubble-item";

    return `
        <div class="${itemClass} ${teamClass} ${isActive ? 'active' : ''}" 
             onclick="selectMember('${mem.id}')" 
             data-id="${mem.id}" 
             data-name="${mem.name.toLowerCase()}">
            <div class="winged-bubble-core">
                <svg class="wing-svg wing-left" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <path d="M60 40 C45 25, 20 10, 5 22 C2 24, 0 30, 8 32 C18 34, 30 38, 38 48 C42 53, 48 55, 52 50 C56 46, 58 43, 60 40 Z" fill="${wingGradientL}"/>
                    <path d="M50 35 C38 20, 15 15, 2 30 C10 32, 22 33, 30 40 C36 45, 42 48, 50 35 Z" fill="rgba(255,255,255,0.7)"/>
                </svg>
                <div class="bubble-orb">
                    <img src="${avatarSrc}" class="bubble-avatar ${isSubbed ? '' : 'grey'}" alt="${mem.name}" loading="lazy" decoding="async" onerror="handleAvatarError(this, '${mem.file}', ${isSubbed})">
                    <div class="bubble-sheen"></div>
                    ${unread ? '<span class="bubble-unread-dot"></span>' : ''}
                    ${!isSubbed ? '<span class="bubble-lock-badge">🔒</span>' : ''}
                </div>
                <svg class="wing-svg wing-right" viewBox="0 0 64 64" fill="none" aria-hidden="true">
                    <path d="M4 40 C19 25, 44 10, 59 22 C62 24, 64 30, 56 32 C46 34, 34 38, 26 48 C22 53, 16 55, 12 50 C8 46, 6 43, 4 40 Z" fill="${wingGradientR}"/>
                    <path d="M14 35 C26 20, 49 15, 62 30 C54 32, 42 33, 34 40 C28 45, 22 48, 14 35 Z" fill="rgba(255,255,255,0.7)"/>
                </svg>
            </div>
            <div class="bubble-label-wrap">
                <span class="bubble-name">${mem.name}</span>
            </div>
        </div>
    `;
}

// ═════════════════════════════════════════════════════════════════
// RENDER VIEWS
// ═════════════════════════════════════════════════════════════════
function renderShowcaseBubbles(filterQuery = "") {
    const grid = document.getElementById("showcaseBubbleGrid");
    if (!grid) return;

    const query = (filterQuery || "").trim().toLowerCase();
    const filtered = MEMBER_PM_LIST.filter(m => m.name.toLowerCase().includes(query) || m.id.toLowerCase().includes(query));

    let html = "";
    filtered.forEach(mem => {
        html += createWingedBubbleHTML(mem, false);
    });

    if (filtered.length === 0) {
        html = `<div style="grid-column: 1 / -1; text-align:center; padding:40px; color:var(--text-sub); font-weight:700;">Tidak ditemukan oshi dengan kata kunci "${filterQuery}"</div>`;
    }

    grid.innerHTML = html;
}

function filterShowcaseBubbles(val) {
    renderShowcaseBubbles(val);
}

function renderStaggerMenu(filterQuery = "") {
    const list = document.getElementById("staggerBubbleList");
    if (!list) return;

    const query = (filterQuery || "").trim().toLowerCase();
    const filtered = MEMBER_PM_LIST.filter(m => m.name.toLowerCase().includes(query) || m.id.toLowerCase().includes(query));

    let html = "";
    filtered.forEach(mem => {
        html += createWingedBubbleHTML(mem, true);
    });

    if (filtered.length === 0) {
        html = `<div style="text-align:center; padding:20px; color:var(--text-sub); font-size:12px;">Tidak ditemukan oshi</div>`;
    }

    list.innerHTML = html;

    // Scroll active member into view in stagger menu
    if (activeMember) {
        const activeItem = list.querySelector(`.stagger-bubble-item[data-id="${activeMember.id}"]`);
        if (activeItem) {
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}

function filterStaggerMenu(val) {
    renderStaggerMenu(val);
}

// ═════════════════════════════════════════════════════════════════
// NAVIGATION & STAGE SWITCHING
// ═════════════════════════════════════════════════════════════════
function backToShowcase() {
    const app = document.getElementById("appContainer");
    app.classList.remove("chat-mode-active");
    document.body.classList.remove("mobile-menu-open");
    renderShowcaseBubbles();
}

function toggleMobileMenu() {
    document.body.classList.toggle("mobile-menu-open");
}

// ═════════════════════════════════════════════════════════════════
// SELECT MEMBER & LOAD MESSAGES (FAST ENGINE)
// ═════════════════════════════════════════════════════════════════
async function selectMember(memberId) {
    const rawId = (typeof memberId === 'object' && memberId !== null) ? (memberId.id || memberId.name) : memberId;
    if (!rawId) return;

    const memberObj = MEMBER_PM_LIST.find(m => m.id === rawId || m.name === rawId) || MEMBER_PM_LIST[0];
    if (!memberObj) return;

    activeMember = memberObj;

    // Switch to Chat Mode
    const app = document.getElementById("appContainer");
    app.classList.add("chat-mode-active");
    document.body.classList.remove("mobile-menu-open");

    // Remove unread indicators
    delete unreadMemberMap[activeMember.name.toUpperCase()];
    delete unreadMemberMap[activeMember.id.toUpperCase()];

    // Re-render stagger menu to update active state & halo
    renderStaggerMenu();

    // Update Header
    const isSubbed = isMemberSubscribed(activeMember);
    document.getElementById("headerName").innerText = activeMember.name;
    document.getElementById("headerSub").innerText = isSubbed ? "Convenant VIP Archive" : "🔒 Belum Berlangganan";
    
    const headerAvatar = document.getElementById("headerAvatar");
    headerAvatar.src = getMemberAvatarSrc(activeMember, isSubbed);
    headerAvatar.className = isSubbed ? "header-member-avatar" : "header-member-avatar grey";
    headerAvatar.onerror = function() { handleAvatarError(this, activeMember.file, isSubbed); };

    const chatMessages = document.getElementById("chatMessages");

    // Check Subscription Gate
    if (!isSubbed) {
        chatMessages.innerHTML = `
            <div class="locked-paywall-card">
                <div style="font-size:52px; margin-bottom:12px;">🔒</div>
                <h2 style="font-size:18px; font-weight:800; color:var(--text-dark); margin-bottom:8px;">Akses PM Terkunci</h2>
                <p style="font-size:13px; color:var(--text-sub); line-height:1.6; margin-bottom:20px;">
                    Kamu belum berlangganan room PM <strong>${activeMember.name}</strong>.<br>
                    Pesan dan media eksklusif hanya dapat diakses oleh pelanggan aktif.
                </p>
                <a href="https://t.me/VerifPmConvenantbot" target="_blank" style="display:inline-block; background:linear-gradient(135deg, #0284c7, #0369a1); color:#fff; text-decoration:none; padding:12px 24px; border-radius:14px; font-weight:800; font-size:13px; box-shadow:0 6px 18px rgba(2,132,199,0.35);">
                    🛒 Order Langganan di Bot
                </a>
            </div>
        `;
        return;
    }

    // ── FAST ENGINE: CEK IN-MEMORY CACHE (0ms IMMEDIATE DISPLAY) ──
    if (MessageCache.has(activeMember.id)) {
        const cachedMsgs = MessageCache.get(activeMember.id);
        renderMessages(cachedMsgs);
        scrollToLatestChat();
        // Silent background sync
        silentBackgroundSync(activeMember);
        return;
    }

    // Skeleton Loader while fetching for the first time
    chatMessages.innerHTML = `
        <div style="margin:auto; text-align:center; padding:30px; color:var(--text-sub); font-weight:700;">
            <div style="font-size:32px; animation:spin 1s linear infinite; display:inline-block; margin-bottom:8px;">⏳</div>
            <div>Memuat arsip pesan ${activeMember.name}...</div>
        </div>
    `;

    if (currentFetchController) {
        currentFetchController.abort();
    }
    currentFetchController = new AbortController();

    const session = getCookie("user_session_pm") || "";

    try {
        const res = await fetch(`${BACKEND_URL}/pm/getpmmessages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: activeMember.name,
                limit: HISTORY_LIMIT,
                offset_id: 0
            }),
            signal: currentFetchController.signal
        });

        if (res.status === 401) {
            document.cookie = "user_session_pm=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            window.location.href = "../";
            return;
        }

        const data = await res.json();

        if (res.ok && data.ok) {
            const msgs = data.messages || [];
            MessageCache.set(activeMember.id, msgs);
            renderMessages(msgs);
            scrollToLatestChat();
        } else {
            chatMessages.innerHTML = `
                <div style="margin:auto; text-align:center; padding:30px; color:#dc2626; font-weight:700;">
                    ${data.msg || "Gagal memuat pesan."}
                </div>
            `;
        }
    } catch (e) {
        if (e.name !== "AbortError") {
            chatMessages.innerHTML = `
                <div style="margin:auto; text-align:center; padding:30px; color:#dc2626; font-weight:700;">
                    ❌ Gagal menghubungi server PM: ${e.message}
                </div>
            `;
        }
    }
}

async function silentBackgroundSync(memberObj) {
    const session = getCookie("user_session_pm") || "";
    try {
        const res = await fetch(`${BACKEND_URL}/pm/getpmmessages`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: memberObj.name,
                limit: 20,
                offset_id: 0
            })
        });
        if (res.ok) {
            const data = await res.json();
            if (data.ok && Array.isArray(data.messages) && data.messages.length > 0) {
                const existing = MessageCache.get(memberObj.id) || [];
                const existingIds = new Set(existing.map(m => m.id));
                const newMsgs = data.messages.filter(m => !existingIds.has(m.id));
                if (newMsgs.length > 0) {
                    const combined = [...newMsgs, ...existing];
                    MessageCache.set(memberObj.id, combined);
                    if (activeMember && activeMember.id === memberObj.id) {
                        renderMessages(combined);
                    }
                }
            }
        }
    } catch(e) {}
}

// ═════════════════════════════════════════════════════════════════
// RENDER MESSAGES WITH BATCHED DOCUMENT FRAGMENT
// ═════════════════════════════════════════════════════════════════
function renderMessages(messages) {
    const container = document.getElementById("chatMessages");
    if (!container) return;

    if (!messages || messages.length === 0) {
        container.innerHTML = `
            <div class="welcome-chat-notice">
                <div class="welcome-notice-orb">📭</div>
                <h3>Belum Ada Pesan</h3>
                <p>Arsip PM ${activeMember ? activeMember.name : ''} masih kosong atau sedang disinkronkan.</p>
            </div>
        `;
        return;
    }

    // Chronological order: oldest to newest
    const sorted = [...messages].reverse();
    const fragment = document.createDocumentFragment();

    sorted.forEach(msg => {
        const bubble = document.createElement("div");
        bubble.className = "msg-bubble-card";
        bubble.setAttribute("data-msg-id", msg.id);

        let mediaHTML = "";
        if (msg.has_media) {
            const mediaUrl = getMediaUrl(msg.id);
            const thumbUrl = getThumbUrl(msg.id);
            const mediaType = msg.media_type || 'photo';

            if (mediaType === 'video') {
                mediaHTML = `
                    <div class="msg-media-wrap" onclick="openLightbox('${mediaUrl}', 'video', 'video_${msg.id}.mp4')">
                        <video src="${mediaUrl}" class="msg-media-img" preload="metadata"></video>
                        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.3);">
                            <span style="font-size:36px; color:#fff;">▶</span>
                        </div>
                    </div>
                `;
            } else if (mediaType === 'audio') {
                mediaHTML = `
                    <div class="custom-audio-player">
                        <button class="audio-play-btn" onclick="toggleAudio(this, '${mediaUrl}')">▶</button>
                        <div class="audio-progress-bar" onclick="seekAudio(event, this)">
                            <div class="audio-progress-fill"></div>
                        </div>
                        <span class="audio-time-label">Voice PM</span>
                    </div>
                `;
            } else {
                mediaHTML = `
                    <div class="msg-media-wrap" onclick="openLightbox('${mediaUrl}', 'photo', 'photo_${msg.id}.jpg')">
                        <img src="${thumbUrl}" class="msg-media-img" loading="lazy" decoding="async" alt="Media PM" onerror="this.src='${mediaUrl}'">
                    </div>
                `;
            }
        }

        const textHTML = msg.text ? `<div class="msg-text-content">${escapeHTML(msg.text)}</div>` : "";
        const timeStr = msg.timestamp ? formatTimestamp(msg.timestamp) : "";

        bubble.innerHTML = `
            ${mediaHTML}
            ${textHTML}
            <div class="msg-footer-meta">
                <span class="msg-timestamp">${timeStr}</span>
                <button class="msg-bookmark-btn" onclick="saveMessage('${msg.id}')" title="Simpan ke Bookmark">⭐</button>
            </div>
        `;

        fragment.appendChild(bubble);
    });

    container.innerHTML = "";
    container.appendChild(fragment);
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag] || tag));
}

function formatTimestamp(raw) {
    if (!raw) return "";
    try {
        const parts = raw.split(" ");
        if (parts.length > 1) {
            return parts[1].substring(0, 5); // HH:MM
        }
    } catch(e) {}
    return raw;
}

function scrollToLatestChat() {
    const container = document.getElementById("chatMessages");
    if (container) {
        container.scrollTop = container.scrollHeight;
    }
}

// ═════════════════════════════════════════════════════════════════
// AUDIO VOICE NOTE PLAYER
// ═════════════════════════════════════════════════════════════════
let activeAudioBtn = null;

function toggleAudio(btn, audioSrc) {
    const player = document.getElementById("globalAudioPlayer");
    if (!player) return;

    if (activeAudioBtn === btn && !player.paused) {
        player.pause();
        btn.innerText = "▶";
        return;
    }

    if (activeAudioBtn && activeAudioBtn !== btn) {
        activeAudioBtn.innerText = "▶";
    }

    activeAudioBtn = btn;
    player.src = audioSrc;
    player.play();
    btn.innerText = "⏸";

    const progressBar = btn.parentElement.querySelector(".audio-progress-fill");

    player.ontimeupdate = () => {
        if (player.duration && progressBar) {
            const pct = (player.currentTime / player.duration) * 100;
            progressBar.style.width = `${pct}%`;
        }
    };

    player.onended = () => {
        btn.innerText = "▶";
        if (progressBar) progressBar.style.width = "0%";
    };
}

function seekAudio(e, barElem) {
    const player = document.getElementById("globalAudioPlayer");
    if (!player || !player.duration) return;
    const rect = barElem.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    player.currentTime = pos * player.duration;
}

// ═════════════════════════════════════════════════════════════════
// LIGHTBOX FULLSCREEN PREVIEW & DOWNLOAD
// ═════════════════════════════════════════════════════════════════
function openLightbox(src, type, filename) {
    const modal = document.getElementById("lightboxModal");
    const container = document.getElementById("lightboxMediaContainer");
    const saveBtn = document.getElementById("lightboxSaveBtn");
    if (!modal || !container) return;

    if (type === 'video') {
        container.innerHTML = `<video src="${src}" controls autoplay style="max-width:88vw; max-height:78vh; border-radius:14px; box-shadow:0 12px 40px rgba(0,0,0,0.6);"></video>`;
    } else {
        container.innerHTML = `<img src="${src}" style="max-width:88vw; max-height:78vh; border-radius:14px; object-fit:contain; box-shadow:0 12px 40px rgba(0,0,0,0.6);">`;
    }

    saveBtn.onclick = () => {
        downloadFile(src, filename || 'pm_media');
    };

    modal.classList.add("active");
}

function closeLightbox(e) {
    const modal = document.getElementById("lightboxModal");
    const container = document.getElementById("lightboxMediaContainer");
    if (container) container.innerHTML = "";
    if (modal) modal.classList.remove("active");
}

async function downloadFile(url, filename) {
    try {
        const res = await fetch(url);
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = filename || "pm_media_file";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch(e) {
        window.open(url, '_blank');
    }
}

// ═════════════════════════════════════════════════════════════════
// SHARED MEDIA OVERLAY PANEL
// ═════════════════════════════════════════════════════════════════
function toggleMediaPanel() {
    const panel = document.getElementById("mediaPanel");
    if (panel) {
        panel.classList.toggle("active");
        if (panel.classList.contains("active")) {
            renderMediaGrid();
        }
    }
}

function switchMediaTab(tabType) {
    currentMediaTab = tabType;
    document.querySelectorAll(".media-tab-pill").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`mediaTab${tabType.charAt(0).toUpperCase() + tabType.slice(1)}`);
    if (activeBtn) activeBtn.classList.add("active");
    renderMediaGrid();
}

function renderMediaGrid() {
    const grid = document.getElementById("mediaGrid");
    if (!grid || !activeMember) return;

    const msgs = MessageCache.get(activeMember.id) || [];
    const filtered = msgs.filter(m => m.has_media && (m.media_type || 'photo') === currentMediaTab);

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding:30px; color:var(--text-sub); font-size:12px;">Belum ada media ${currentMediaTab}</div>`;
        return;
    }

    let html = "";
    filtered.forEach(m => {
        const thumbUrl = getThumbUrl(m.id);
        const mediaUrl = getMediaUrl(m.id);
        html += `
            <div class="media-grid-item" onclick="openLightbox('${mediaUrl}', '${currentMediaTab}', 'media_${m.id}')">
                <img src="${thumbUrl}" loading="lazy" decoding="async" alt="Thumbnail" onerror="this.src='${mediaUrl}'">
            </div>
        `;
    });
    grid.innerHTML = html;
}

// ═════════════════════════════════════════════════════════════════
// SAVED MESSAGES / BOOKMARKS MODAL
// ═════════════════════════════════════════════════════════════════
function saveMessage(msgId) {
    if (!activeMember) return;
    const msgs = MessageCache.get(activeMember.id) || [];
    const target = msgs.find(m => String(m.id) === String(msgId));
    if (!target) return;

    if (!allSavedMessages.some(m => String(m.id) === String(msgId))) {
        allSavedMessages.unshift({
            ...target,
            memberName: activeMember.name,
            memberId: activeMember.id
        });
        localStorage.setItem("saved_pm_messages", JSON.stringify(allSavedMessages));
        showToast("⭐ Pesan disimpan ke bookmark!");
    } else {
        showToast("ℹ️ Pesan ini sudah ada di bookmark.");
    }
}

function openSavedMessagesModal() {
    const modal = document.getElementById("savedMessagesModal");
    if (modal) {
        modal.classList.add("active");
        renderSavedMessagesList();
    }
}

function closeSavedMessagesModal() {
    const modal = document.getElementById("savedMessagesModal");
    if (modal) modal.classList.remove("active");
}

function renderSavedMessagesList(query = "") {
    const list = document.getElementById("savedMessagesList");
    if (!list) return;

    const q = (query || "").toLowerCase();
    const filtered = allSavedMessages.filter(m => (m.text || "").toLowerCase().includes(q) || (m.memberName || "").toLowerCase().includes(q));

    if (filtered.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-sub); font-size:12px;">Belum ada pesan tersimpan.</div>`;
        return;
    }

    let html = "";
    filtered.forEach(m => {
        html += `
            <div style="background:rgba(255,255,255,0.6); padding:10px 14px; border-radius:14px; border:1px solid rgba(0,0,0,0.06); margin-bottom:8px;">
                <div style="font-size:12px; font-weight:800; color:var(--accent-blue); margin-bottom:3px;">${m.memberName}</div>
                <div style="font-size:13px; color:var(--text-dark); line-height:1.4;">${escapeHTML(m.text || "[Media]")}</div>
                <div style="font-size:10px; color:#64748b; margin-top:4px;">${m.timestamp || ''}</div>
            </div>
        `;
    });
    list.innerHTML = html;
}

function filterSavedMessages() {
    const input = document.getElementById("savedSearchInput");
    renderSavedMessagesList(input ? input.value : "");
}

// ═════════════════════════════════════════════════════════════════
// CUSTOM WALLPAPER CHAT ROOM
// ═════════════════════════════════════════════════════════════════
function openWallpaperModal() {
    const modal = document.getElementById("wallpaperModal");
    if (modal) modal.classList.add("active");
}

function closeWallpaperModal() {
    const modal = document.getElementById("wallpaperModal");
    if (modal) modal.classList.remove("active");
}

function handleWallpaperUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ev => {
        const bgUrl = ev.target.result;
        localStorage.setItem("custom_pm_wallpaper", bgUrl);
        applyWallpaper(bgUrl);
    };
    reader.readAsDataURL(file);
}

function applyPresetWallpaper(theme) {
    let bg = "";
    if (theme === 'dark') bg = "linear-gradient(135deg, #090d16 0%, #000000 100%)";
    else if (theme === 'dream') bg = "linear-gradient(135deg, rgba(2, 132, 199, 0.45) 0%, #090d16 80%)";
    else if (theme === 'passion') bg = "linear-gradient(135deg, rgba(239, 68, 68, 0.45) 0%, #090d16 80%)";
    else if (theme === 'love') bg = "linear-gradient(135deg, rgba(236, 72, 153, 0.45) 0%, #090d16 80%)";
    else bg = ""; // default

    localStorage.setItem("custom_pm_wallpaper", bg);
    applyWallpaper(bg);
}

function resetWallpaper() {
    localStorage.removeItem("custom_pm_wallpaper");
    localStorage.removeItem("pm_wallpaper_brightness");
    localStorage.removeItem("pm_wallpaper_blur");
    applyWallpaper("");
    showToast("🗑️ Wallpaper di-reset ke bawaan");
}

function updateWallpaperAdjustments() {
    const bVal = document.getElementById("wallpaperBrightnessInput").value;
    const blVal = document.getElementById("wallpaperBlurInput").value;
    document.getElementById("brightnessVal").innerText = `${bVal}%`;
    document.getElementById("blurVal").innerText = `${blVal}px`;

    localStorage.setItem("pm_wallpaper_brightness", bVal);
    localStorage.setItem("pm_wallpaper_blur", blVal);

    applyWallpaperAdjustments(bVal, blVal);
}

function applyWallpaperAdjustments(brightness, blur) {
    const wp = document.getElementById("chatWallpaperBg");
    const preview = document.getElementById("wallpaperLivePreview");
    const filterStyle = `brightness(${brightness / 100}) blur(${blur}px)`;
    if (wp) wp.style.filter = filterStyle;
    if (preview) preview.style.filter = filterStyle;
}

function applyWallpaper(bgUrl) {
    const wp = document.getElementById("chatWallpaperBg");
    const preview = document.getElementById("wallpaperLivePreview");

    if (!bgUrl) {
        if (wp) wp.style.backgroundImage = "";
        if (preview) preview.style.backgroundImage = "";
        return;
    }

    const isGradient = bgUrl.startsWith("linear-gradient");
    const styleValue = isGradient ? bgUrl : `url('${bgUrl}')`;

    if (wp) {
        if (isGradient) { wp.style.background = bgUrl; }
        else { wp.style.backgroundImage = `url('${bgUrl}')`; }
    }
    if (preview) {
        if (isGradient) { preview.style.background = bgUrl; }
        else { preview.style.backgroundImage = `url('${bgUrl}')`; }
    }
}

// ═════════════════════════════════════════════════════════════════
// TOAST NOTIFICATIONS
// ═════════════════════════════════════════════════════════════════
function showToast(msg) {
    let toast = document.getElementById("appToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "appToast";
        toast.style.cssText = "position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:rgba(15,23,42,0.92); color:#fff; padding:10px 20px; border-radius:24px; font-size:12.5px; font-weight:800; border:1px solid rgba(255,255,255,0.2); backdrop-filter:blur(12px); box-shadow:0 8px 24px rgba(0,0,0,0.25); z-index:999999; transition:opacity 0.3s ease; opacity:0; pointer-events:none;";
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2500);
}

function logout() {
    document.cookie = "user_session_pm=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "user_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "../";
}

// ═════════════════════════════════════════════════════════════════
// AMBIENT STAR CANVAS
// ═════════════════════════════════════════════════════════════════
function initStarCanvas() {
    const canvas = document.getElementById('star-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });

    const particles = [];
    for (let i = 0; i < 35; i++) {
        particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 2 + 1,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.6 + 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.x += p.dx;
            p.y += p.dy;
            if (p.x < 0) p.x = w;
            if (p.x > w) p.x = 0;
            if (p.y < 0) p.y = h;
            if (p.y > h) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147, 197, 253, ${p.alpha})`;
            ctx.shadowBlur = 8;
            ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ═════════════════════════════════════════════════════════════════
// INIT APPLICATION ON DOM LOAD
// ═════════════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Fade out intro curtain
    setTimeout(() => {
        const curtain = document.getElementById("introCurtain");
        if (curtain) curtain.classList.add("hidden");
    }, 400);

    // 2. Init ambient stars
    initStarCanvas();

    // 3. Load saved bookmarks
    try {
        const rawSaved = localStorage.getItem("saved_pm_messages");
        if (rawSaved) allSavedMessages = JSON.parse(rawSaved);
    } catch(e) {}

    // 4. Load custom wallpaper
    const savedWallpaper = localStorage.getItem("custom_pm_wallpaper");
    if (savedWallpaper) applyWallpaper(savedWallpaper);
    const bVal = localStorage.getItem("pm_wallpaper_brightness") || 45;
    const blVal = localStorage.getItem("pm_wallpaper_blur") || 0;
    applyWallpaperAdjustments(bVal, blVal);

    // 5. Initial Render Showcase Bubbles
    renderShowcaseBubbles();

    // 6. Check Auth & Load Subscriptions
    const session = getCookie("user_session_pm") || getCookie("user_session") || "";
    if (session) {
        try {
            const res = await fetch(`${BACKEND_URL}/pm/userpmstat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ session_cookie: session })
            });
            if (res.ok) {
                const data = await res.json();
                if (data.ok) {
                    subscribedFolders = (data.subscriptions || []).map(s => s.folder_name);
                    const badge = document.getElementById("userBadgeShowcase");
                    if (badge) {
                        badge.innerText = `Convenant VIP • ${subscribedFolders.length > 0 ? (subscribedFolders.includes("ALL") ? "All PM Unlocked" : `${subscribedFolders.length} PM Terbuka`) : "61 Member"}`;
                    }
                    // Re-render bubbles with unlocked states
                    renderShowcaseBubbles();
                }
            }
        } catch(e) {}
    }

    // Scroll to bottom button observer
    const chatContainer = document.getElementById("chatMessages");
    const scrollBtn = document.getElementById("scrollToBottomBtn");
    if (chatContainer && scrollBtn) {
        chatContainer.addEventListener("scroll", () => {
            const isNearBottom = chatContainer.scrollHeight - chatContainer.scrollTop - chatContainer.clientHeight < 180;
            if (isNearBottom) {
                scrollBtn.classList.remove("visible");
            } else {
                scrollBtn.classList.add("visible");
            }
        });
    }
});
