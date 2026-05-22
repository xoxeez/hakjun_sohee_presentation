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
            `장모님, 장인어른 안녕하세요.

곧 소희의 남편이자, 두 분의 든든한 사위가 될 학준이입니다.
이렇게 글로 인사를 드리려니 말로 할 때보다 뭔가 더 낯설고 쑥스러운 마음이 앞섭니다.
그래도 평소 전하지 못했던 제 마음을 이 자리를 빌려 글로 전해드리고 싶습니다.

가장 먼저, 소희라는 사람을 이토록 예쁘고 귀하게 길러주셔서 진심으로 감사드립니다.
소희를 보고 있으면 언제나 잘 웃고 순수해서, 그 모습을 보는 것만으로도 하루 동안 있었던 피로나 고민들이 싹 잊혀지고 마냥 행복해집니다.
요즘은 일상 속에서 맛있는 음식을 먹거나, 재밌는 것을 보거나, 예쁜 옷을 볼 때에도 온통 소희 생각부터 먼저 나곤 합니다.
제 일상을 항상 소희와 나누고 싶어지는 제 모습을 보며, 소희가 제게 얼마나 소중한 존재인지 매일 실감하고 있습니다.

함께 시간을 보내며 대화를 나눌 때면, 작은 일상의 소소한 재미부터 앞으로 우리가 어떻게 살아가고 싶은지 가치관까지 닮은 점이 많아서 놀라곤 합니다.
저와 유림이가 친구처럼 친하게 지내는 것도, 소희와 재식이가 친하게 지내는 것도 신기할 만큼 닮아 있었습니다.
그래서인지 미래에 예쁜 남매를 낳아 우리처럼 서로 의지하고 친하게 지낼 수 있도록 화목하게 키우고 싶다는 먼 미래의 생각까지 통하는 것을 보며, 소희와 함께할 미래가 더욱더 선명하고 행복하게 그려지곤 합니다.
요즘은 서로를 더 깊이 알게 되면서 더 잘 맞춰가고 있는데, 별일 아닌 일에도 서로 마주 보면 귀여워하고 웃음 짓는 모든 순간이 소중해집니다.

결혼을 준비하면서 장인어른과 장모님께 받았던 따뜻함이 제게는 큰 힘이 되었습니다.
작년 횟집에서 처음 뵀던 날, 잔뜩 긴장해 있던 저를 항상 웃음으로 맞아주시던 아버님, 그리고 친아들처럼 따뜻하게 품어주셨던 어머님 덕분에 긴장했던 마음이 사르르 녹아내렸던 기억이 납니다.
그 후에 집으로 처음 초대해 주셨을 때도 정성 가득한 맛있는 요리를 한 상 차려주시고, 저희가 채워나갈 미래나 고민들을 언제든 편하게 털어놓을 수 있도록 늘 아낌없는 조언과 배려를 해주셔서 감사했습니다.
두 분을 뵈면서 많이 배우고, 힘이 되어주신 덕분에 저희가 더 나은 방향으로 나아갈 수 있었습니다.

앞으로 소희와 함께 부모님께서 이루어 오신 따뜻하고 화목한 가정을 본받아 예쁘게 잘 살겠습니다.
그동안 소희를 귀하게 아껴주신 부모님의 마음을 이어받아, 소희의 얼굴에서 웃음이 떠나지 않도록 평생 정성을 다해 살겠습니다.
살아가다 보면 때로는 힘든 일이나 갈등이 찾아올지도 모르겠지만, 그 어떤 순간이 오더라도 지금처럼 서로를 믿고 "사랑해" 라는 말을 더 많이 건네며, 따뜻하게 감싸 안아주고 지혜롭게 헤쳐 나가겠습니다.

오늘 이렇게 귀한 시간 내주셔서 저희의 앞날을 축복하고 응원해 주신 마음에 다시 한번 고개 숙여 감사드립니다.
보내주신 사랑과 응원에 보답하며, 두 분께 늘 기쁨과 웃음을 드리는 자랑스러운 사위가 되겠습니다.

아버님, 어머님 항상 건강하시고 행복 가득하시기를 진심으로 기원합니다. 사랑합니다.

2026년 5월,
예비 사위 학준 올림`,
        contactLabel: "예비 사위 연락처",
        contactNumber: "010-4931-4535",
    },
    "hakjun": {
        title: "학준이 부모님께",
        subtitle: "존경과 감사의 마음을 담았습니다.",
        text:
            `안녕하세요, 아버님, 어머님.

긴장되고 설레는 마음으로 처음 뵙던 날이 엊그제 같은데, 어느덧 이렇게 뜻깊은 상견례 자리에서 인사를 드리니 감회가 새롭네요.
먼저 저희의 새로운 시작을 축복해 주시기 위해 귀한 시간을 내주셔서 진심으로 감사드립니다.

저에게 어떤 사람이랑 결혼하고 싶어? 라고 물어보면 평소 부모님과 동생과 화목하게 지내온 저의 모습을 떠올리면서,
미래에 제가 이룰 가정도 화목하고, 따뜻한 분위기였으면 좋겠다고 대답했습니다.
오빠는 늘 저에게 "오늘은 부모님과 이런 대화를 나누었다", "동생 유림이와 이런 이야기를 했다"며 일상의 소소한 행복들을 아낌없이 들려주곤 했습니다.
그 다정한 모습을 보며 오빠가 얼마나 사랑이 넘치는 가정에서 자랐는지 자연스럽게 느낄 수 있었고, 제가 꿈꾸던 따뜻함과 닮아있어 참 감사했습니다.
학준이를 이렇게 든든하고 바른 사람을 키워주시고, 화목한 가정을 일구어 오신 아버님, 어머님께 깊은 존경과 감사의 말씀을 올립니다.

사실 오빠를 만나기 전을 떠올려보면, 저는 그동안 스스로를 엄격하게 채찍질하며 조금은 긴장된 채로 살아왔던 것 같습니다.
그런 저에게 오빠는 따뜻한 '당근'이 되어주었고, 온전한 안정감과 삶의 소소한 행복이 무엇인지 처음으로 깨닫게 해주었습니다.
오빠의 사려 깊고 바른 성품 역시, 곁에서 늘 좋은 귀감이 되어주신 아버님과 어머님을 쏙 빼닮은 것 같아 볼 때마다 마음이 든든해집니다.

처음 오빠를 만났던 날, 함께 있던 친구들에게 "정말 내 이상형이야"라고 설레하면서 말했던 기억이나는데요,
그 소중한 인연이 이어져 이렇게 결혼이라는 결실을 맺게 되니 참 신기하고 행복합니다.
그래서인지 저는 지금도 오빠 얼굴만 보면 마냥 좋아서 서운한 마음이 생기다가도 사르르 녹아내리곤 합니다.
앞으로 살아가면서 비록 의견 차이가 생기더라도, 지금처럼 서로 양보하고 현명하게 대화하면서 예쁘게 풀어나가겠습니다.

주변에서 결혼 준비를 하다 보면 다투는 일이 많다고 걱정 섞인 조언을 해주기도 했습니다.
하지만 저희는 오히려 부딪히기보다 서로를 더 아끼며 그 어느 때보다 행복한 나날을 보내고 있는 거 같습니다.
결정해야 할 것도, 준비해야 할 것도 많아 지칠 법한 과정이지만 저희가 즐겁게 준비할 수 있었던 것은, 언제나 저희의 의견을 전적으로 존중해 주시고 든든하게 지지해 주신 부모님들 덕분입니다.
저희를 믿고 응원해 주시는 그 귀한 마음에 보답할 수 있도록, 앞으로 오빠와 서로 존중하며 행복하게 잘 사는 모습 보여드리겠습니다.

아버님, 어머님 두 분께도 언제나 기쁨을 드리는 현명하고 든든한 며느리가 되겠습니다.
아직은 부족한 점이 많지만, 한 가족으로 받아주시는 따뜻한 마음에 다시 한번 감사드리며, 사랑합니다!

2026년 5월,
아버님, 어머님의 사랑스러운 예비 며느리 소희 올림.`,
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
