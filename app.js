/* =========================
   0) 설정 (여기만 바꾸면 됨)
========================= */

const SLIDE_IMAGES = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png"
];

const LETTERS = {
    "sohee": {
        title: "소희 부모님께",
        subtitle: "천천히 마음을 담아 적었습니다.",
        text:
            `부모님 안녕하세요.

(여기에 편지 내용을 넣어주세요.)

감사합니다.
- 학준 올림`,
        contactLabel: "예비 사위 연락처",
        contactNumber: "010-4931-4535",
    },
    "hakjun": {
        title: "학준이 부모님께",
        subtitle: "존경과 감사의 마음을 담았습니다.",
        text:
            `부모님 안녕하세요.

(여기에 편지 내용을 넣어주세요.)

감사합니다.
- 소희 올림`,
        contactLabel: "예비 며느리 연락처",
        contactNumber: "010-9878-6178",
    },
};

const PASSWORD = {
    "sohee": "1011",
    "hakjun": "1014",
};

const TYPE_SPEED_MS = 28;

/* =========================
   1) 유틸
========================= */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function showView(id) {
    ["viewSlides", "viewGate", "viewLetter", "viewContact"].forEach(v => {
        const el = $("#" + v);
        if (!el) return;
        el.setAttribute("aria-hidden", v === id ? "false" : "true");
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setHint(el, msg, type = "muted") {
    if (!el) return;
    el.textContent = msg;
    if (type === "danger") el.style.color = "var(--danger)";
    else if (type === "success") el.style.color = "var(--success)";
    else el.style.color = "var(--muted)";
}

function shakeGate() {
    const card = $("#gateCard");
    if (!card) return;
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
}

function isFullscreen() {
    return !!document.fullscreenElement;
}

function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }

/* =========================
   2) 상태
========================= */

let currentSlide = 0;
let selectedFamily = "sohee";
let unlockedFamily = null;

let pz = null;

/* =========================
   3) 슬라이드(단일 스테이지)
========================= */

function renderThumbs() {
    const thumbs = $("#thumbs");
    if (!thumbs) return;
    thumbs.innerHTML = "";

    SLIDE_IMAGES.forEach((url, i) => {
        const th = document.createElement("div");
        th.className = "thumb";
        th.dataset.index = String(i);

        const im = document.createElement("img");
        im.src = url;
        im.alt = `thumb ${i + 1}`;
        th.appendChild(im);

        th.addEventListener("click", () => {
            currentSlide = i;
            updateSlideUI();
        });

        thumbs.appendChild(th);
    });
}

function updateSlideUI() {
    const img = $("#slideImg");
    if (!img) return;

    const total = SLIDE_IMAGES.length;
    $("#slideTotal").textContent = String(total || 0);
    $("#slideIndex").textContent = String((total ? currentSlide : 0) + 1);

    img.src = SLIDE_IMAGES[currentSlide] || "";
    img.onload = () => resetZoom();

    $$("#thumbs .thumb").forEach((t, i) => t.classList.toggle("active", i === currentSlide));
}

function prevSlide() {
    currentSlide = clamp(currentSlide - 1, 0, SLIDE_IMAGES.length - 1);
    updateSlideUI();
}
function nextSlide() {
    currentSlide = clamp(currentSlide + 1, 0, SLIDE_IMAGES.length - 1);
    updateSlideUI();
}

/* =========================
   4) Panzoom
========================= */

function initPanzoom() {
    const content = $("#pzContent");
    const viewport = $("#pzViewport");
    if (!content || !viewport || !window.panzoom) return;

    pz = window.panzoom(content, {
        maxZoom: 4,
        minZoom: 1,
        zoomSpeed: 0.08,
        smoothScroll: false,
        bounds: true,
        boundsPadding: 0.04,
    });

    viewport.addEventListener("wheel", (e) => {
        e.preventDefault();
        const delta = e.deltaY ? -e.deltaY : e.wheelDelta;
        const zoomOut = delta < 0;
        pz.zoomTo(e.clientX, e.clientY, zoomOut ? 0.92 : 1.08);
    }, { passive: false });
}

function resetZoom() {
    if (!pz) return;
    pz.moveTo(0, 0);
    pz.zoomAbs(0, 0, 1);
}

/* =========================
   5) ✅ Fullscreen 탭: 왼쪽=이전 / 오른쪽=다음
   - 드래그(팬)나 핀치 중에는 넘기지 않도록 탭만 감지
========================= */

function bindFullscreenTapNextPrev() {
    const viewport = $("#pzViewport");
    if (!viewport) return;

    let downX = 0, downY = 0, moved = false;

    viewport.addEventListener("pointerdown", (e) => {
        if (!isFullscreen()) return;
        if (!e.isPrimary) return; // 멀티터치 포인터는 무시
        downX = e.clientX;
        downY = e.clientY;
        moved = false;
    });

    viewport.addEventListener("pointermove", (e) => {
        if (!isFullscreen()) return;
        if (!e.isPrimary) return;
        const dx = Math.abs(e.clientX - downX);
        const dy = Math.abs(e.clientY - downY);
        if (dx + dy > 12) moved = true; // 드래그로 판단
    });

    viewport.addEventListener("pointerup", (e) => {
        if (!isFullscreen()) return;
        if (!e.isPrimary) return;
        if (moved) return; // 팬/드래그면 무시

        // ✅ 화면을 좌/우로 나눠서 동작
        const rect = viewport.getBoundingClientRect();
        const localX = e.clientX - rect.left;
        const half = rect.width / 2;

        if (localX < half) prevSlide();  // 왼쪽 탭 → 이전
        else nextSlide();                // 오른쪽 탭 → 다음
    });
}

/* =========================
   6) Gate 선택(2개) + 체크 UI 토글
========================= */

function updateSelectionSummary() {
    const summary = $("#selectionSummary");
    if (!summary) return;
    summary.textContent = `선택: ${selectedFamily === "sohee" ? "소희의 부모님" : "학준의 부모님"}`;
}

function setActiveChoice(groupEl, activeBtn) {
    const buttons = Array.from(groupEl.querySelectorAll(".choiceCard"));
    buttons.forEach(b => {
        const isActive = (b === activeBtn);
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

/* =========================
   7) Letter opening effect + typing
========================= */

let typingTimer = null;
let typingCancelled = false;

function playOpenEffect() {
    const view = $("#viewLetter");
    const card = $("#letterCard");
    if (!view || !card) return;

    view.classList.remove("opening");
    card.classList.remove("opening");
    void view.offsetWidth;

    view.classList.add("opening");
    card.classList.add("opening");

    setTimeout(() => {
        view.classList.remove("opening");
        card.classList.remove("opening");
    }, 1100);
}

function startTyping(text) {
    clearTimeout(typingTimer);
    typingCancelled = false;

    const out = $("#letterText");
    const caret = $("#caret");
    if (!out || !caret) return;

    out.textContent = "";
    caret.style.display = "inline-block";

    let i = 0;
    const tick = () => {
        if (typingCancelled) return;
        if (i < text.length) {
            out.textContent += text.charAt(i++);
            out.parentElement.scrollTop = out.parentElement.scrollHeight;
            typingTimer = setTimeout(tick, TYPE_SPEED_MS);
        } else {
            caret.style.display = "none";
        }
    };
    tick();
}

function finishTyping(text) {
    typingCancelled = true;
    clearTimeout(typingTimer);
    $("#letterText").textContent = text;
    $("#caret").style.display = "none";
}

/* =========================
   8) Copy
========================= */

async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
}

/* =========================
   9) Events
========================= */

function bindEvents() {
    $("#btnGoSlides")?.addEventListener("click", () => showView("viewSlides"));
    $("#btnGoLetters")?.addEventListener("click", () => showView("viewGate"));
    $("#toLetterGate")?.addEventListener("click", () => showView("viewGate"));
    $("#backToSlides")?.addEventListener("click", () => showView("viewSlides"));

    $("#prevSlide")?.addEventListener("click", prevSlide);
    $("#nextSlide")?.addEventListener("click", nextSlide);

    $("#zoomIn")?.addEventListener("click", () => pz?.zoomTo(0, 0, 1.15));
    $("#zoomOut")?.addEventListener("click", () => pz?.zoomTo(0, 0, 0.87));
    $("#zoomReset")?.addEventListener("click", resetZoom);

    // 아이폰(iOS) 감지 유틸
    // 아이폰(iOS) 감지 유틸
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    // 안전한 표준 문법으로 변경하여 아이폰 먹통 버그 해결
    const fullscreenBtn = $("#fullscreen");
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", async () => {
            const stage = $("#slideStage");
            if (!stage) return;

            // 1. 아이폰(iOS)일 경우: CSS 기반 가짜 전체화면 실행
            if (isIOS) {
                const isFull = document.body.classList.toggle("web-fullscreen");
                document.body.classList.toggle("isFullscreen", isFull);
                setTimeout(() => resetZoom(), 100);
                return;
            }

            // 2. 안드로이드 / PC일 경우: 기존 표준 전체화면 실행
            try {
                if (!document.fullscreenElement) {
                    await stage.requestFullscreen();
                } else {
                    await document.exitFullscreen();
                }
            } catch (e) {
                const isFull = document.body.classList.toggle("web-fullscreen");
                document.body.classList.toggle("isFullscreen", isFull);
            }
        });
    }

    // 1. 아이폰(iOS)일 경우: CSS 기반 가짜 전체화면 실행
    if (isIOS) {
        const isFull = document.body.classList.toggle("web-fullscreen");
        document.body.classList.toggle("isFullscreen", isFull);
        setTimeout(() => resetZoom(), 100); // 크기가 바뀐 후 줌 리셋
        return;
    }

    // 2. 안드로이드 / PC일 경우: 기존 표준 전체화면 실행
    try {
        if (!document.fullscreenElement) {
            await stage.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    } catch (e) {
        // 만약의 에러 대비 우회 작동
        const isFull = document.body.classList.toggle("web-fullscreen");
        document.body.classList.toggle("isFullscreen", isFull);
    }
});

// 안드로이드 표준 전체화면 상태 변화 감지
document.addEventListener("fullscreenchange", () => {
    const isFull = !!document.fullscreenElement;
    document.body.classList.toggle("isFullscreen", isFull);
    // 전체화면이 풀렸을 때 아이폰용 스타일 클래스도 같이 제거해 줍니다.
    if (!isFull) document.body.classList.remove("web-fullscreen");
    setTimeout(() => resetZoom(), 100);
});

// Gate 선택(2개)
const familyGroup = $("#chooseFamily");
familyGroup?.querySelectorAll(".choiceCard[data-family]").forEach(btn => {
    btn.addEventListener("click", () => {
        selectedFamily = btn.dataset.family;
        setActiveChoice(familyGroup, btn);
        updateSelectionSummary();
        setHint($("#gateHint"), "※ 비밀번호가 맞으면 편지가 열려요.", "muted");
    });
});

// Unlock
$("#unlock")?.addEventListener("click", () => {
    const pw = $("#password")?.value?.trim() || "";
    const hint = $("#gateHint");

    if (!pw) {
        setHint(hint, "비밀번호를 입력해 주세요.", "danger");
        shakeGate();
        return;
    }

    const ok = (PASSWORD[selectedFamily] && pw === PASSWORD[selectedFamily]);
    if (!ok) {
        setHint(hint, "비밀번호가 달라요. 다시 입력해 주세요.", "danger");
        $("#password").value = "";
        $("#password").focus();
        shakeGate();
        return;
    }

    unlockedFamily = selectedFamily;
    const data = LETTERS[unlockedFamily];

    $("#letterTitle").textContent = data.title;
    $("#letterSubtitle").textContent = data.subtitle;

    showView("viewLetter");
    playOpenEffect();
    startTyping(data.text);

    $("#password").value = "";
    setHint(hint, "※ 비밀번호가 맞으면 편지가 열려요.", "muted");
});

$("#password")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") $("#unlock")?.click();
});

$("#skipTyping")?.addEventListener("click", () => {
    if (!unlockedFamily) return;
    finishTyping(LETTERS[unlockedFamily].text);
});

$("#toContact")?.addEventListener("click", () => {
    if (!unlockedFamily) { showView("viewGate"); return; }
    const data = LETTERS[unlockedFamily];

    $("#contactWho").textContent = data.contactLabel;
    $("#contactNumber").textContent = data.contactNumber;
    $("#copyHint").textContent = "";

    showView("viewContact");
});

$("#copyBtn")?.addEventListener("click", async () => {
    const num = $("#contactNumber")?.textContent || "";
    try {
        const ok = await copyToClipboard(num);
        $("#copyHint").textContent = ok
            ? "복사 완료! 연락처 저장 화면에서 붙여넣기 하시면 돼요."
            : "복사가 잘 안되면 번호를 길게 눌러 복사해 주세요.";
        $("#copyHint").style.color = ok ? "var(--success)" : "var(--muted)";
    } catch (e) {
        $("#copyHint").textContent = "복사가 차단되었어요. 번호를 길게 눌러 복사해 주세요.";
        $("#copyHint").style.color = "var(--muted)";
    }
});

$("#restart")?.addEventListener("click", () => {
    unlockedFamily = null;
    showView("viewSlides");
});

// ✅ Fullscreen 탭: 왼쪽/오른쪽 분기
bindFullscreenTapNextPrev();
}

/* =========================
   10) Init
========================= */

function init() {
    if (!SLIDE_IMAGES.length) console.warn("SLIDE_IMAGES가 비어 있습니다.");

    renderThumbs();
    initPanzoom();

    currentSlide = 0;
    updateSlideUI();

    updateSelectionSummary();
    bindEvents();

    showView("viewSlides");
}

window.addEventListener("DOMContentLoaded", init);
