const BACKEND_URL = "https://shinezzzz-iddiletele.hf.space";

// ============================================
// PHASE 12: ADAPTIVE EXPERIENCE ENGINE
// ============================================
const AdaptiveEngine = {
    profile: "STANDARD", // COMPACT, STANDARD, DESKTOP
    isLowEnd: false,
    saveData: false,
    
    init() {
        const cores = navigator.hardwareConcurrency || 4;
        const memory = navigator.deviceMemory || 4;
        const conn = navigator.connection || {};
        this.saveData = conn.saveData || conn.effectiveType === '2g' || conn.effectiveType === 'slow-2g';
        this.isLowEnd = cores <= 2 || memory <= 2 || this.saveData;

        if (this.isLowEnd) {
            this.profile = "COMPACT";
            document.body.classList.add("low-end-device", "save-data-mode");
            if (window.mediaPrefetcher) {
                window.mediaPrefetcher.maxWorkers = 2;
            }
        } else if (window.innerWidth >= 1441) {
            this.profile = "DESKTOP";
            document.body.classList.add("desktop-device");
        } else {
            this.profile = "STANDARD";
        }
        console.log(`[AdaptiveEngine] Profile initialized: ${this.profile} (LowEnd: ${this.isLowEnd}, SaveData: ${this.saveData})`);
    }
};

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

// UNCOMMON AVATAR MEMBERS LIST
const UNCOMMON_MEMBERS = ["Virgi", "Vera", "Jazzy", "Intan", "Jemima", "Maira", "Ekin", "Giaa", "Gia", "Heidi", "Rara", "Sona", "Rilly", "Mikaela", "Carissa", "Fahira", "Ralyne", "Bella", "Auwia", "Maxine", "Maxime"];

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

function getMediaUrl(msgId) {
    const session = getCookie("user_session_pm") || "";
    return `${BACKEND_URL}/pm/media/${msgId}?session_cookie=${encodeURIComponent(session)}`;
}

function getThumbUrl(msgId) {
    const session = getCookie("user_session_pm") || "";
    return `${BACKEND_URL}/pm/thumb/${msgId}?session_cookie=${encodeURIComponent(session)}`;
}

// ============================================
// MEDIA ENGINE v2 (4-LEVEL PRIORITY SYSTEM & STATE MACHINE)
// QUEUED -> PREFETCHING -> CACHED -> DISPLAYED
// ============================================
class MediaPrefetchManager {
    constructor() {
        const threads = navigator.hardwareConcurrency || 4;
        this.maxConcurrency = threads > 4 ? 6 : 3;
        this.activeCount = 0;
        this.queue = []; // Items: { msgId, priority: 0|1|2|3 }
        this.cache = new Map(); // msgId -> 'QUEUED' | 'PREFETCHING' | 'CACHED' | 'FAILED'
        this.manifest = [];
        this.currentMember = null;
    }

    reset(memberName) {
        this.queue = [];
        this.manifest = [];
        this.currentMember = memberName;
    }

    setManifest(manifestData) {
        this.manifest = manifestData || [];
        // Trigger Priority 3 background indexing across full manifest
        this.manifest.forEach(item => {
            if (item && item.id && !this.cache.has(item.id)) {
                this.enqueue(item.id, 3); // Priority 3: Full background manifest
            }
        });
        console.log(`[MediaEngine v2] Manifest loaded for ${this.currentMember}: ${this.manifest.length} total assets.`);
    }

    getMediaReadiness() {
        let queued = 0, prefetching = 0, cached = 0, failed = 0;
        this.cache.forEach((status) => {
            if (status === 'QUEUED') queued++;
            else if (status === 'PREFETCHING') prefetching++;
            else if (status === 'CACHED') cached++;
            else if (status === 'FAILED') failed++;
        });

        const displayed = document.querySelectorAll('.msg-media, .media-grid-item').length;
        return {
            member: this.currentMember || "Unknown",
            media_total: this.manifest.length,
            queued: queued,
            prefetching: prefetching,
            cached: cached,
            failed: failed,
            displayed: displayed
        };
    }

    enqueue(msgId, priorityLevel = 3) {
        if (!msgId) return;
        const currentStatus = this.cache.get(msgId);
        if (currentStatus === 'CACHED' || currentStatus === 'PREFETCHING') return;

        this.cache.set(msgId, 'QUEUED');
        
        // Remove duplicate entry if exists
        this.queue = this.queue.filter(item => item.msgId !== msgId);

        // Insert based on priority (0: Viewport, 1: Buffer 900px, 2: Near 100 msgs, 3: Background)
        const newItem = { msgId, priority: priorityLevel };
        let inserted = false;
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > priorityLevel) {
                this.queue.splice(i, 0, newItem);
                inserted = true;
                break;
            }
        }
        if (!inserted) this.queue.push(newItem);

        this.processQueue();
    }

    prefetchAround(currentMsgId) {
        if (!this.manifest.length) return;
        const idx = this.manifest.findIndex(m => m.id === currentMsgId);
        if (idx === -1) return;

        // Priority 0: Viewport item (Immediate)
        this.enqueue(currentMsgId, 0);

        // Priority 1: ±900px Buffer region (±15 items)
        const p1Start = Math.max(0, idx - 15);
        const p1End = Math.min(this.manifest.length - 1, idx + 5);
        for (let i = p1Start; i <= p1End; i++) {
            if (this.manifest[i]) this.enqueue(this.manifest[i].id, 1);
        }

        // Priority 2: ±100 Messages history region
        const p2Start = Math.max(0, idx - 100);
        const p2End = Math.min(this.manifest.length - 1, idx + 20);
        for (let i = p2Start; i <= p2End; i++) {
            if (this.manifest[i]) this.enqueue(this.manifest[i].id, 2);
        }
    }

    processQueue() {
        while (this.activeCount < this.maxConcurrency && this.queue.length > 0) {
            const item = this.queue.shift();
            this.fetchThumbnail(item.msgId);
        }
    }

    fetchThumbnail(msgId) {
        this.activeCount++;
        this.cache.set(msgId, 'PREFETCHING');

        const thumbUrl = getThumbUrl(msgId);
        const img = new Image();
        img.decoding = "async";
        
        img.onload = () => {
            this.cache.set(msgId, 'CACHED');
            this.activeCount--;
            this.processQueue();
        };

        img.onerror = () => {
            // Auto token refresh on 401/403 or network drop
            if (activeMember) {
                const session = getCookie("user_session_pm");
                fetch(BACKEND_URL + "/pm/media-access", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        session_cookie: session,
                        folder_name: activeMember.name,
                        msg_id: msgId
                    })
                }).then(r => r.json()).then(data => {
                    if (data && data.ok && data.thumb_url) {
                        const retryImg = new Image();
                        retryImg.decoding = "async";
                        retryImg.onload = () => {
                            this.cache.set(msgId, 'CACHED');
                            this.activeCount--;
                            this.processQueue();
                        };
                        retryImg.onerror = () => {
                            this.cache.set(msgId, 'FAILED');
                            this.activeCount--;
                            this.processQueue();
                        };
                        retryImg.src = BACKEND_URL + data.thumb_url;
                        return;
                    }
                    this.cache.set(msgId, 'FAILED');
                    this.activeCount--;
                    this.processQueue();
                }).catch(() => {
                    this.cache.set(msgId, 'FAILED');
                    this.activeCount--;
                    this.processQueue();
                });
            } else {
                this.cache.set(msgId, 'FAILED');
                this.activeCount--;
                this.processQueue();
            }
        };

        img.src = thumbUrl;
    }
}

const mediaPrefetcher = new MediaPrefetchManager(5);

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
    AdaptiveEngine.init();
    renderMemberList(); // Render list cards immediately (0ms) so sidebar is never blank

    requestNotificationPermission();
    setupWebSocket();
    setupStarCanvas();

    // Auto-select first member (Fiony) on load so chat is never empty
    if (!activeMember && MEMBER_PM_LIST.length > 0) {
        const defaultMember = MEMBER_PM_LIST.find(m => m.id === "Fiony") || MEMBER_PM_LIST[0];
        if (defaultMember) {
            selectMember(defaultMember.id);
        }
    }

    const session = getCookie("user_session_pm");
    if (!session) {
        console.log("[Auth] Session cookie not found. Operating in Guest Viewer Mode.");
        return;
    }

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
        }
    } catch (e) {
        console.error("Init Error:", e);
        renderMemberList();
    }
}

let currentReplyTargetMsgId = null;

function replyToMessage(msgId, textSnippet) {
    currentReplyTargetMsgId = msgId;
    const box = document.getElementById("replyPreviewBox");
    const textElem = document.getElementById("replyPreviewText");
    if (box && textElem) {
        textElem.innerText = textSnippet || `Pesan #${msgId}`;
        box.style.display = "flex";
    }
    const input = document.getElementById("commentInput");
    if (input) input.focus();
}

function cancelReply() {
    currentReplyTargetMsgId = null;
    const box = document.getElementById("replyPreviewBox");
    if (box) box.style.display = "none";
}

async function sendComment() {
    const input = document.getElementById("commentInput");
    if (!input || !activeMember) {
        showToast("Pilih member PM terlebih dahulu!");
        return;
    }
    const commentText = input.value.trim();
    if (!commentText) return;

    const session = getCookie("user_session_pm");
    const payload = {
        session_cookie: session,
        folder_name: activeMember.name,
        target_archive_message_id: currentReplyTargetMsgId || (currentMemberAllMessages[0] ? currentMemberAllMessages[0].id : 0),
        comment_text: commentText,
        client_request_id: `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
    };

    input.value = "";
    cancelReply();

    if (!navigator.onLine) {
        queueOfflineComment(payload);
        showToast("💬 Terhubung secara luring. Komentar akan dikirim otomatis.");
        return;
    }

    try {
        const res = await fetch(BACKEND_URL + "/pm/comment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (res.ok && data.ok) {
            showToast("✓ Komentar berhasil dikirim!");
        } else {
            queueOfflineComment(payload);
            showToast("⏳ Komentar tersimpan di antrean pengiriman.");
        }
    } catch(e) {
        queueOfflineComment(payload);
        showToast("⏳ Komentar tersimpan di antrean offline.");
    }
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
        const isSubbed = subscribedFolders.length === 0 || subscribedFolders.includes(mem.name.toUpperCase()) || subscribedFolders.includes(mem.id.toUpperCase());
        const imgClass = isSubbed ? "member-avatar" : "member-avatar grey";
        const baseFile = mem.file;
        const mythSrc = getMemberAvatarSrc(mem, isSubbed);

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
    const chatMessages = document.getElementById("chatMessages");
    const commentInput = document.getElementById("commentInput");
    if (activeMember) {
        try {
            if (chatMessages) localStorage.setItem("scroll_pos_" + activeMember.name, chatMessages.scrollTop);
            if (commentInput && commentInput.value.trim()) {
                localStorage.setItem("draft_" + activeMember.name, commentInput.value.trim());
            } else {
                localStorage.removeItem("draft_" + activeMember.name);
            }
        } catch(e) {}
    }

    if (activeMember && activeMember.id === memberId && currentMemberAllMessages.length > 0) {
        document.body.classList.add("mobile-chat-active");
        return;
    }

    activeMember = MEMBER_PM_LIST.find(m => m.id === memberId);
    renderMemberList();

    // Restore Draft for new active member
    if (commentInput && activeMember) {
        const savedDraft = localStorage.getItem("draft_" + activeMember.name);
        commentInput.value = savedDraft || "";
    }

    document.body.classList.add("mobile-chat-active");

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

    const isSubbed = subscribedFolders.length === 0 || subscribedFolders.includes(activeMember.name.toUpperCase()) || subscribedFolders.includes(activeMember.id.toUpperCase());
    
    document.getElementById("headerName").innerText = activeMember.name;
    const baseFile = activeMember.file;
    const headerMyth = getMemberAvatarSrc(activeMember, isSubbed);

    const headerAvatar = document.getElementById("headerAvatar");
    headerAvatar.src = headerMyth;
    headerAvatar.onerror = function() { handleAvatarError(this, baseFile, isSubbed); };
    headerAvatar.className = isSubbed ? "header-member-avatar" : "header-member-avatar grey";
    document.getElementById("headerSub").innerText = isSubbed ? "Convenant VIP Archive" : "🔒 Belum Berlangganan";

    chatMessages.innerHTML = renderSkeletonLoader();

    if (!isSubbed && subscribedFolders.length > 0) {
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

    mediaPrefetcher.reset(activeMember.name);

    // Fetch media manifest secara async di background (ringan)
    fetch(BACKEND_URL + "/pm/media-manifest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_cookie: session, folder_name: activeMember.name }),
        signal: currentFetchController.signal
    }).then(res => res.json()).then(mdata => {
        if (mdata && mdata.ok && mdata.manifest) {
            mediaPrefetcher.setManifest(mdata.manifest);
        }
    }).catch(() => {});

    // Stage 1 Initial Load: Fetch 200 pesan pertama langsung agar instan & banyak
    try {
        const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session, folder_name: activeMember.name, limit: 200, offset_id: 0 }),
            signal: currentFetchController.signal
        });
        const data = await res.json();

        if (res.ok && data.ok) {
            const msgs = data.messages || [];
            currentMemberAllMessages = msgs;
            if (msgs.length > 0) {
                oldestMsgId = msgs[msgs.length - 1].id;
                if (msgs.length < 200) hasMoreMessages = false;
                
                msgs.forEach(m => {
                    if (m.has_media) mediaPrefetcher.enqueue(m.id);
                });

                // Stage 2 Background Streamer: Narik sisa ribuan pesan secara otomatis di background!
                if (hasMoreMessages) {
                    startBackgroundHistoryStreamer(activeMember.name, currentFetchController.signal);
                }
            } else {
                hasMoreMessages = false;
            }
            renderMessages(msgs);
            renderMediaGrid();
            fetchPinnedMessagesBanner();
        } else {
            chatMessages.innerHTML = `<div class="unsubscribed-notice"><h3>⚠️ Notice</h3><p>${data.msg}</p></div>`;
        }
    } catch (e) {
        if (e.name !== "AbortError") {
            chatMessages.innerHTML = `<div style="margin:auto; color:#ff4d4d;">❌ Gagal memuat pesan dari Telegram.</div>`;
        }
    }
}

async function startBackgroundHistoryStreamer(memberName, signal) {
    const session = getCookie("user_session_pm");
    while (hasMoreMessages && activeMember && activeMember.name === memberName) {
        if (signal.aborted) break;
        await new Promise(r => setTimeout(r, 600)); // Jeda rate-limit ringan antar batch
        if (signal.aborted) break;

        try {
            const res = await fetch(BACKEND_URL + "/pm/getpmmessages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_cookie: session,
                    folder_name: memberName,
                    limit: 200,
                    offset_id: oldestMsgId
                }),
                signal: signal
            });
            const data = await res.json();
            if (res.ok && data.ok && data.messages && data.messages.length > 0) {
                const olderMsgs = data.messages;
                if (olderMsgs.length < 200) hasMoreMessages = false;
                oldestMsgId = olderMsgs[olderMsgs.length - 1].id;
                currentMemberAllMessages = currentMemberAllMessages.concat(olderMsgs);

                olderMsgs.forEach(m => {
                    if (m.has_media) mediaPrefetcher.enqueue(m.id);
                });

                renderMediaGrid();
            } else {
                hasMoreMessages = false;
            }
        } catch (e) {
            break;
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
}function handleMediaError(imgElem, thumbSrc, mediaSrc) {
    if (!imgElem.dataset.retryStep) {
        imgElem.dataset.retryStep = "1";
        imgElem.src = mediaSrc;
    } else if (imgElem.dataset.retryStep === "1") {
        imgElem.dataset.retryStep = "2";
        const msgId = imgElem.closest('.msg-row') ? imgElem.closest('.msg-row').dataset.msgId : null;
        if (msgId && activeMember) {
            fetch(BACKEND_URL + "/pm/media-access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    session_cookie: getCookie("user_session_pm"),
                    folder_name: activeMember.name,
                    msg_id: parseInt(msgId, 10)
                })
            }).then(r => r.json()).then(data => {
                if (data && data.ok && data.thumb_url) {
                    imgElem.src = BACKEND_URL + data.thumb_url;
                    delete imgElem.dataset.retryStep;
                    return;
                }
            }).catch(() => {});
        }

        const parent = imgElem.parentElement;
        if (parent && !parent.querySelector('.media-error-card')) {
            imgElem.style.display = "none";
            const card = document.createElement("div");
            card.className = "media-error-card";
            card.style.cssText = "padding: 14px; text-align: center; background: rgba(255,255,255,0.04); border-radius: 10px; border: 1px dashed rgba(255,255,255,0.2); margin: 4px 0; cursor: pointer;";
            card.onclick = function() {
                imgElem.style.display = "block";
                delete imgElem.dataset.retryStep;
                imgElem.src = thumbSrc + "&t=" + Date.now();
                card.remove();
            };
            card.innerHTML = `<div style="font-size: 18px; margin-bottom: 2px;">🖼️</div><div style="font-size: 11px; color: #a0acba;">Foto PM (Ketuk untuk muat ulang)</div>`;
            parent.appendChild(card);
        }
    }
}

function renderMediaGrid() {
    const mediaGrid = document.getElementById("mediaGrid");
    if (!mediaGrid) return;
    const filtered = currentMemberAllMessages.filter(m => m.has_media && m.media_type === currentMediaTab);

    if (filtered.length === 0) {
        let emptyHtml = `<div style="grid-column: span 3; text-align:center; color:var(--text-sub); padding:30px; font-size:13px;">Tidak ada media ${currentMediaTab} dalam riwayat ini</div>`;
        if (hasMoreMessages) {
            emptyHtml += `<div style="grid-column: span 3; text-align:center;"><button class="order-btn" style="padding:6px 14px; font-size:12px;" onclick="loadOlderMessages();">⏳ Muat Riwayat Media Lebih Lama</button></div>`;
        }
        mediaGrid.innerHTML = emptyHtml;
        return;
    }

    let html = "";
    filtered.forEach(msg => {
        const mediaSrc = getMediaUrl(msg.id);
        const thumbSrc = getThumbUrl(msg.id);
        if (currentMediaTab === 'photo') {
            html += `
                <div style="position:relative; cursor:pointer;" onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                    <img src="${thumbSrc}" loading="lazy" class="media-grid-item" alt="Media Thumbnail" onerror="handleMediaError(this, '${thumbSrc}', '${mediaSrc}')">
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

    if (hasMoreMessages) {
        html += `<div style="grid-column: span 3; text-align:center; padding-top:10px;"><button class="order-btn" style="padding:6px 14px; font-size:12px;" onclick="loadOlderMessages();">⏳ Muat Media Lebih Lama</button></div>`;
    }

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
        </div>
    `;
}

function setupMediaViewportObserver() {
    // Disabled destructive blank-gif swapping
}

function buildMessageNode(msg, isRecent = false) {
    let timeOnly = msg.timestamp;
    if (msg.timestamp && msg.timestamp.includes(" ")) {
        const parts = msg.timestamp.split(" ");
        timeOnly = parts[1] || msg.timestamp;
    }

    let mediaTag = "";
    if (msg.has_media) {
        const mediaSrc = getMediaUrl(msg.id);
        const thumbSrc = getThumbUrl(msg.id);

        if (msg.media_type === 'photo') {
            mediaTag = `
                <div style="position:relative; min-height:140px;">
                    <img src="${thumbSrc}" data-src="${mediaSrc}" loading="lazy" decoding="async" class="msg-media" alt="Foto PM" 
                         onerror="handleMediaError(this, '${thumbSrc}', '${mediaSrc}')" 
                         onclick="openLightbox('${mediaSrc}', 'photo', 'pm_photo_${msg.id}.jpg')">
                    <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_photo_${msg.id}.jpg')">💾 Simpan Foto</button>
                </div>`;
        } else if (msg.media_type === 'video') {
            mediaTag = `
                <div style="position:relative; min-height:140px;">
                    <video src="${mediaSrc}" loading="lazy" class="msg-media" controls preload="metadata" onclick="openLightbox('${mediaSrc}', 'video', 'pm_video_${msg.id}.mp4')"></video>
                    <button class="save-media-btn" onclick="directDownload(this, '${mediaSrc}', 'pm_video_${msg.id}.mp4')">💾 Simpan Video</button>
                </div>`;
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
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; pt-2; border-top:1px solid rgba(255,255,255,0.05);">
                    <div style="display:flex; gap:6px;">
                        <button style="background:none; border:none; color:var(--accent-blue); font-size:11px; cursor:pointer; padding:0;" onclick="promptReplyComment(${msg.id})">💬 Balas</button>
                        <span style="color:rgba(255,255,255,0.2);">|</span>
                        <button style="background:none; border:none; color:#ffd700; font-size:11px; cursor:pointer; padding:0;" onclick="toggleSaveMessage(${msg.id})">⭐ Simpan</button>
                        <span style="color:rgba(255,255,255,0.2);">|</span>
                        <button style="background:none; border:none; color:#00e5ff; font-size:11px; cursor:pointer; padding:0;" onclick="togglePinMessage(${msg.id})">📌 Pin</button>
                        <span style="color:rgba(255,255,255,0.2);">|</span>
                        <button style="background:none; border:none; font-size:12px; cursor:pointer; padding:0;" onclick="toggleReaction(${msg.id}, '❤️')">❤️</button>
                        <button style="background:none; border:none; font-size:12px; cursor:pointer; padding:0;" onclick="toggleReaction(${msg.id}, '😂')">😂</button>
                        <button style="background:none; border:none; font-size:12px; cursor:pointer; padding:0;" onclick="toggleReaction(${msg.id}, '😭')">😭</button>
                        <button style="background:none; border:none; font-size:12px; cursor:pointer; padding:0;" onclick="toggleReaction(${msg.id}, '🔥')">🔥</button>
                    </div>
                    <div class="msg-timestamp">${timeOnly}</div>
                </div>
            </div>
        </div>
    `;
}

async function togglePinMessage(msgId) {
    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/pin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                archive_message_id: msgId,
                folder_name: activeMember ? activeMember.name : ""
            })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
            alert(data.is_pinned ? "📌 Pesan berhasil disematkan di Pinned Header!" : "🗑️ Pesan dilepas dari Pinned Header!");
            fetchPinnedMessagesBanner();
        }
    } catch(e) {}
}

async function fetchPinnedMessagesBanner() {
    if (!activeMember) return;
    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/pinned-messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session, folder_name: activeMember.name })
        });
        const data = await res.json();
        const headerSub = document.getElementById("headerSub");
        if (headerSub && data.ok && data.pinned && data.pinned.length > 0) {
            const firstPin = data.pinned[0];
            headerSub.innerHTML = `📌 ${data.pinned.length} Pesan Disematkan | <span style="text-decoration:underline; cursor:pointer;" onclick="jumpToMessage(${firstPin.archive_message_id})">Lompat ke Pesan #${firstPin.archive_message_id}</span>`;
        }
    } catch(e) {}
}

async function jumpToDate(dateStr) {
    if (!dateStr || !activeMember) return;
    try {
        const res = await fetch(BACKEND_URL + "/pm/jump-date", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ folder_name: activeMember.name, date: dateStr })
        });
        const data = await res.json();
        if (res.ok && data.ok && data.archive_message_id) {
            jumpToMessage(data.archive_message_id);
        } else {
            alert(data.msg || "Pesan tidak ditemukan pada tanggal tersebut");
        }
    } catch(e) {
        alert("Gagal melakukan Jump to Date: " + e.message);
    }
}

async function performGlobalSearch(query) {
    if (!query || !query.trim()) return;
    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/global-search", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session, query: query.trim() })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
            renderGlobalSearchResults(data.results || []);
        }
    } catch(e) {}
}

function renderGlobalSearchResults(results) {
    let overlay = document.getElementById("globalSearchOverlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "globalSearchOverlay";
        overlay.style.cssText = "position:fixed; inset:0; background:rgba(0,0,0,0.85); backdrop-filter:blur(12px); z-index:99999; padding:20px; display:flex; flex-direction:column; overflow-y:auto;";
        document.body.appendChild(overlay);
    }
    
    let html = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h2 style="margin:0; font-size:18px; color:var(--text-main);">🔍 Hasil Pencarian Global (${results.length})</h2>
        <button style="background:none; border:none; color:#fff; font-size:22px; cursor:pointer;" onclick="document.getElementById('globalSearchOverlay').remove()">✕</button>
    </div>`;

    if (results.length === 0) {
        html += `<div style="text-align:center; color:var(--text-sub); margin:auto; font-size:14px;">Tidak ditemukan pesan dengan kata kunci tersebut.</div>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:10px;">`;
        results.forEach(item => {
            html += `
                <div style="background:rgba(255,255,255,0.06); padding:12px 16px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); cursor:pointer;" onclick="selectMemberAndJump('${item.member_name}', ${item.id})">
                    <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--accent-blue); font-weight:600; margin-bottom:4px;">
                        <span>👤 ${item.member_name}</span>
                        <span style="color:var(--text-sub);">${item.created_at || ''}</span>
                    </div>
                    <div style="font-size:13px; color:var(--text-main); line-height:1.4;">${(item.text_content || '').substring(0, 150)}...</div>
                </div>
            `;
        });
        html += `</div>`;
    }

    overlay.innerHTML = html;
}

function selectMemberAndJump(memberName, msgId) {
    const overlay = document.getElementById("globalSearchOverlay");
    if (overlay) overlay.remove();
    const memObj = MEMBER_PM_LIST.find(m => m.name.toUpperCase() === memberName.toUpperCase() || m.id.toUpperCase() === memberName.toUpperCase());
    if (memObj) {
        selectMember(memObj.id);
        setTimeout(() => jumpToMessage(msgId), 1200);
    }
}

function jumpToMessage(msgId) {
    if (!msgId) return;
    const targetRow = document.querySelector(`.msg-row[data-msg-id="${msgId}"]`);
    if (targetRow) {
        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetRow.style.transition = "background 0.3s ease";
        targetRow.style.background = "rgba(255, 215, 0, 0.25)";
        targetRow.style.borderRadius = "12px";
        setTimeout(() => {
            targetRow.style.background = "none";
        }, 2500);
    }
}

function showToast(message) {
    let toast = document.getElementById("appToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "appToast";
        toast.style.cssText = "position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:rgba(18,24,38,0.92); color:#fff; padding:10px 20px; border-radius:20px; font-size:13px; font-weight:600; border:1px solid rgba(255,255,255,0.12); backdrop-filter:blur(8px); box-shadow:0 6px 20px rgba(0,0,0,0.4); z-index:99999; transition:opacity 0.3s ease;";
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 2500);
}

function copyMessageLink(msgId) {
    if (!activeMember) return;
    const link = `${window.location.origin}${window.location.pathname}?member=${encodeURIComponent(activeMember.name)}&message=${msgId}`;
    navigator.clipboard.writeText(link).then(() => {
        showToast("Tautan pesan telah disalin");
    }).catch(() => {
        prompt("Salin tautan pesan:", link);
    });
}

function copyMessageText(text) {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        showToast("Teks pesan telah disalin");
    });
}

async function requestDeltaSync() {
    if (!activeMember || currentMemberAllMessages.length === 0) return;
    const session = getCookie("user_session_pm");
    const newestId = currentMemberAllMessages[0].id;
    try {
        const res = await fetch(BACKEND_URL + "/pm/sync-delta", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: activeMember.name,
                after_id: newestId
            })
        });
        const data = await res.json();
        if (res.ok && data.ok && data.delta && data.delta.length > 0) {
            data.delta.forEach(msg => appendSingleMessage(msg));
            console.log(`[SmartSync] Successfully synced ${data.delta.length} missing delta messages!`);
        }
    } catch(e) {}
}

async function toggleSaveMessage(msgId) {
    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/save", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                archive_message_id: msgId,
                folder_name: activeMember ? activeMember.name : ""
            })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
            showToast(data.is_saved ? "✓ Pesan disimpan ke Bookmark" : "Dihapus dari Bookmark");
        }
    } catch(e) {}
}

async function toggleReaction(msgId, emoji) {
    const session = getCookie("user_session_pm");
    try {
        await fetch(BACKEND_URL + "/pm/react", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                archive_message_id: msgId,
                reaction: emoji,
                folder_name: activeMember ? activeMember.name : ""
            })
        });
    } catch(e) {}
}

async function promptReplyComment(msgId) {
    const text = prompt("Ketik balasan/komentar kamu untuk pesan PM ini (akan dikirim ke Telegram Archive Group):");
    if (!text || !text.trim()) return;

    const session = getCookie("user_session_pm");
    try {
        const res = await fetch(BACKEND_URL + "/pm/comment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: activeMember ? activeMember.name : "",
                target_archive_message_id: msgId,
                comment_text: text.trim(),
                client_request_id: "req_" + Date.now()
            })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
            alert("✅ Balasan berhasil dikirim ke Telegram Archive Topic!");
        } else {
            alert("⚠️ " + (data.msg || "Gagal mengirim balasan"));
        }
    } catch(e) {
        alert("❌ Error mengirim balasan: " + e.message);
    }
}

function forceScrollToBottom() {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;
    chatMessages.scrollTop = chatMessages.scrollHeight + 100000;
    
    requestAnimationFrame(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight + 100000;
    });
}

function attachChatScrollListener() {
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages) return;

    chatMessages.onscroll = function() {
        // Pre-fetch 50 pesan lama berikutnya sebelum user benar-benar menyentuh mentok atas (scrollTop < 400px)
        if (chatMessages.scrollTop < 400 && hasMoreMessages && !isLoadingMore) {
            loadOlderMessages();
        }

        // Trigger Directional Thumbnail Prefetching untuk pesan terdekat di sekitar viewport
        const visibleRows = chatMessages.querySelectorAll('.msg-row[data-msg-id]');
        if (visibleRows.length > 0) {
            const topRow = visibleRows[0];
            const topId = parseInt(topRow.dataset.msgId, 10);
            if (topId) mediaPrefetcher.prefetchAround(topId, 35);
        }

        const isNearBottom = (chatMessages.scrollHeight - chatMessages.scrollTop - chatMessages.clientHeight) < 250;
        const btn = document.getElementById("scrollToBottomBtn");
        if (btn) {
            if (isNearBottom) btn.classList.remove("visible");
            else btn.classList.add("visible");
        }
    };
}

let readStateObserver = null;
let readStateDebounce = null;

function debouncedUpdateReadState(msgId) {
    clearTimeout(readStateDebounce);
    readStateDebounce = setTimeout(() => {
        if (!activeMember) return;
        const session = getCookie("user_session_pm");
        fetch(BACKEND_URL + "/pm/read", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                session_cookie: session,
                folder_name: activeMember.name,
                last_read_message_id: msgId
            })
        }).catch(() => {});
    }, 1500);
}

function setupReadStateObserver() {
    if (readStateObserver) readStateObserver.disconnect();
    const chatMessages = document.getElementById("chatMessages");
    if (!chatMessages || !activeMember) return;

    let maxReadId = 0;
    readStateObserver = new IntersectionObserver((entries) => {
        if (document.visibilityState !== 'visible') return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const msgId = parseInt(entry.target.dataset.msgId, 10);
                if (msgId && msgId > maxReadId) {
                    maxReadId = msgId;
                }
            }
        });
        if (maxReadId > 0) {
            debouncedUpdateReadState(maxReadId);
        }
    }, { root: chatMessages, threshold: 0.5 });

    const rows = chatMessages.querySelectorAll('.msg-row[data-msg-id]');
    rows.forEach(r => readStateObserver.observe(r));
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

        const isRecent = (idx >= totalCount - 5);
        msgHtml += buildMessageNode(msg, isRecent);
    });

    chatMessages.innerHTML = msgHtml;
    try {
        const savedPos = localStorage.getItem("scroll_pos_" + activeMember.name);
        if (savedPos !== null && parseInt(savedPos, 10) > 0) {
            chatMessages.scrollTop = parseInt(savedPos, 10);
        } else {
            forceScrollToBottom();
        }
    } catch(e) {
        forceScrollToBottom();
    }
    attachChatScrollListener();
    setupReadStateObserver();
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

            olderMsgs.forEach(m => {
                if (m.has_media) mediaPrefetcher.enqueue(m.id);
            });

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
            requestDeltaSync();
        };

        ws.onmessage = function(event) {
            try {
                const data = JSON.parse(event.data);
                if (data.type === 'comment_created') {
                    console.log('[WS] New comment created:', data.comment);
                } else if (data.type === 'reaction_updated') {
                    console.log('[WS] Reaction updated for msg:', data.archive_message_id, data.reactions);
                } else if (data && data.folder_name) {
                    triggerWebNotification(data.folder_name, data.text);
                    if (activeMember && activeMember.name.toUpperCase() === data.folder_name.toUpperCase()) {
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

// ============================================
// DURABLE INDEXEDDB OFFLINE OUTBOX & NETWORK LISTENERS
// ============================================
let outboxDb = null;

function initOfflineOutboxDB() {
    if (!('indexedDB' in window)) return;
    const req = indexedDB.open("ConvenantOutboxDB", 1);
    req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("pm_outbox")) {
            db.createObjectStore("pm_outbox", { keyPath: "id", autoIncrement: true });
        }
    };
    req.onsuccess = (e) => {
        outboxDb = e.target.result;
        processOfflineOutboxQueue();
    };
}

function queueOfflineComment(commentPayload) {
    if (!outboxDb) return;
    const tx = outboxDb.transaction("pm_outbox", "readwrite");
    const store = tx.objectStore("pm_outbox");
    store.add({ ...commentPayload, created_at: Date.now() });
}

let isOutboxProcessing = false;

function processOfflineOutboxQueue() {
    if (!outboxDb || !navigator.onLine || isOutboxProcessing) return;
    isOutboxProcessing = true;

    const tx = outboxDb.transaction("pm_outbox", "readwrite");
    const store = tx.objectStore("pm_outbox");
    const req = store.getAll();
    req.onsuccess = () => {
        const items = (req.result || []).filter(i => !i.is_locked);
        if (items.length === 0) {
            isOutboxProcessing = false;
            return;
        }
        items.forEach((item) => {
            item.is_locked = true;
            fetch(BACKEND_URL + "/pm/comment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            }).then(r => r.json()).then(data => {
                if (data && data.ok && (data.client_request_id === item.client_request_id || (data.comment && data.comment.client_request_id === item.client_request_id))) {
                    const deleteTx = outboxDb.transaction("pm_outbox", "readwrite");
                    deleteTx.objectStore("pm_outbox").delete(item.id);
                } else {
                    item.is_locked = false;
                }
            }).catch(() => {
                item.is_locked = false;
            });
        });
        setTimeout(() => { isOutboxProcessing = false; }, 3000);
    };
}

async function fetchNotifications() {
    const session = getCookie("user_session_pm");
    if (!session) return;
    try {
        const res = await fetch(BACKEND_URL + "/pm/notifications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ session_cookie: session })
        });
        const data = await res.json();
        if (res.ok && data.ok) {
            renderNotificationPanel(data.notifications || []);
        }
    } catch(e) {}
}

function renderNotificationPanel(notifs) {
    let badge = document.getElementById("notifBadgeCount");
    const unreadCount = notifs.filter(n => !n.is_read).length;
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount;
            badge.style.display = "inline-block";
        } else {
            badge.style.display = "none";
        }
    }
}

function updateNetworkBanner(statusText, isError = false) {
    let banner = document.getElementById("networkStatusBar");
    if (!banner) {
        banner = document.createElement("div");
        banner.id = "networkStatusBar";
        banner.style.cssText = "position:fixed; top:0; left:0; width:100%; padding:6px 12px; font-size:12px; font-weight:600; text-align:center; z-index:99999; transition:transform 0.3s ease;";
        document.body.appendChild(banner);
    }
    banner.style.background = isError ? "rgba(220, 38, 38, 0.95)" : "rgba(16, 185, 129, 0.95)";
    banner.style.color = "#ffffff";
    banner.innerText = statusText;
    banner.style.transform = "translateY(0)";
    if (!isError) {
        setTimeout(() => { banner.style.transform = "translateY(-100%)"; }, 3000);
    }
}

window.addEventListener('online', () => {
    updateNetworkBanner("⚡ Koneksi pulih — Mengirim antrean outbox & menyinkronkan data...");
    processOfflineOutboxQueue();
    requestDeltaSync();
});

window.addEventListener('offline', () => {
    updateNetworkBanner("🌐 Internet terputus — Komentar akan tersimpan persisten di IndexedDB Outbox", true);
});

document.addEventListener("DOMContentLoaded", () => {
    initPage();
    initOfflineOutboxDB();

    // DESKTOP KEYBOARD SHORTCUTS (Ctrl+K = Search, Esc = Close Modal)
    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            const q = prompt("🔍 Cari seluruh pesan PM (contoh: from:Fiony has:photo semangat):");
            if (q) performGlobalSearch(q);
        } else if (e.key === "Escape") {
            const overlay = document.getElementById("globalSearchOverlay");
            if (overlay) overlay.remove();
            const lightbox = document.getElementById("lightboxModal");
            if (lightbox) lightbox.style.display = "none";
        }
    });

    // DYNAMIC VISUAL VIEWPORT KEYBOARD HANDLING (MOBILE iOS & ANDROID)
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', () => {
            const appShell = document.querySelector('.app-shell');
            if (appShell) {
                appShell.style.height = `${window.visualViewport.height}px`;
            }
        });
    }

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

    // DEEP LINK AUTO-JUMP (/pm/beranda/?message=68575)
    const urlParams = new URLSearchParams(window.location.search);
    const targetMessageId = urlParams.get('message');
    if (targetMessageId) {
        setTimeout(() => jumpToMessage(targetMessageId), 1200);
    }
});
