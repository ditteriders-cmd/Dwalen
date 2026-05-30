'use strict';

// ── Scene definitions ─────────────────────────────────────────────────────────
// Hotspot format: [x%, y%, width%, height%, arrowDirection, targetScene]
// Directions: 'N' | 'NO' | 'O' | 'W'
// Sound:  'birds' | 'highway' | 'cars'

const SCENES = {
  Straat6: {
    img: 'illustrations/Straat6.png',
    sound: 'birds',
    hotspots: [
      [0,  0, 65, 100, 'N', 'Straat8'],   // white space middle + left
      [65, 0, 35, 100, 'O', 'Straat7'],   // building on the right
    ],
  },
  Straat8: {
    img: 'illustrations/Straat8.png',
    sound: 'birds',
    hotspots: [
      [70, 40, 30, 60, 'NO', 'Tram2'],    // stairs on the right
      [0,  0,  20, 100, 'W', 'Straat1'],  // white space next to building on the left
    ],
  },
  Tram2: {
    img: 'illustrations/Tram2.png',
    sound: 'cars',
    hotspots: [
      [25, 0,  50, 50, 'N', 'Alcazaba2'], // building in the back
      [65, 0,  35, 100, 'O', 'Highway'],  // right third
    ],
  },
  Highway: {
    img: 'illustrations/Highway.png',
    sound: 'highway',
    hotspots: [
      [70, 0,  30, 100, 'NO', 'Straat10.1'], // white space on the right
      [0,  50, 25, 50,  'W',  'Tram2'],      // bush on the left
    ],
  },
  Straat7: {
    img: 'illustrations/Straat7.png',
    sound: 'birds',
    hotspots: [
      [0, 38, 35,  62, 'W', 'Straat8'],      // building on the left (starts below bird)
      [20, 50, 35, 45, 'N', 'Straat10.1'],   // white space in the middle
    ],
  },
  Straat1: {
    img: 'illustrations/Straat1.png',
    sound: 'birds',
    hotspots: [
      [35, 0, 30, 100, 'N', 'Bomen'],        // path in the middle
    ],
  },
  Alcazaba2: {
    img: 'illustrations/Alcazaba2.png',
    sound: 'birds',
    hotspots: [
      [30, 20, 40, 40, 'N', 'Alcazaba'],     // scene in the distance in the middle
      [75, 0,  25, 100, 'O', 'Poort2'],      // white space on the right
    ],
  },
  Poort2: {
    img: 'illustrations/Poort2.png',
    sound: 'birds',
    hotspots: [
      [35, 10, 30, 70, 'N', 'Secret'],        // black gateway in the middle
      [70, 40, 30, 60, 'O', 'Poort'],        // bushes on the right
    ],
  },
  Poort: {
    img: 'illustrations/Poort.png',
    sound: 'birds',
    hotspots: [
      [30, 10, 40, 80, 'N', 'Koppel2'],      // gate in the middle
    ],
  },
  Bomen: {
    img: 'illustrations/Bomen.png',
    sound: 'birds',
    hotspots: [
      [35, 0, 30, 40, 'N', 'Straat2'],       // white space at end of road
    ],
  },
  Straat2: {
    img: 'illustrations/Straat2.png',
    sound: 'birds',
    hotspots: [
      [0,  0, 25, 100, 'W',  'Straat1'],     // left side next to tree
      [75, 0, 25, 70,  'NO', 'Plein'],       // white space on the right
    ],
  },
  Alcazaba: {
    img: 'illustrations/Alcazaba.png',
    sound: 'birds',
    hotspots: [
      [65, 30, 35, 70, 'NO', 'Poort'],       // row of trees on the right
      [0,  0,  35, 100, 'W', 'Alcazaba2'],   // building on the left
    ],
  },
  Koppel2: {
    img: 'illustrations/Koppel2.png',
    sound: 'birds',
    hotspots: [
      [0,  0,  30, 100, 'W', 'Plein'],       // tree on the left / left of the tree
      [35, 20, 30, 40,  'N', 'Koppel'],      // couple on a bench in the distance
    ],
  },
  Koppel: {
    img: 'illustrations/Koppel.png',
    sound: 'birds',
    hotspots: [
      [0, 0, 40, 100, 'W', 'Koppel2'],       // white space left of the bench
    ],
  },
  Plein: {
    img: 'illustrations/Plein.png',
    sound: 'birds',
    hotspots: [
      [30, 0, 40, 80, 'N', 'Straat3'],       // building in the middle
      [70, 0, 30, 100, 'O', 'Straat6'],      // building on the right
    ],
  },
  Straat3: {
    img: 'illustrations/Straat3.png',
    sound: 'birds',
    hotspots: [
      [0,  0, 35, 100, 'W', 'Straat3.2'],   // building on the left
      [55, 0, 25, 100, 'N', 'Straat9'],     // building right of centre building
    ],
  },
  'Straat3.2': {
    img: 'illustrations/Straat3.2.png',
    sound: 'birds',
    hotspots: [
      [70, 30, 20, 50, 'NO', 'Straat4'],    // small space between buildings on the right
      [28, 40, 32, 45, 'N',  'Straat9'],    // white space between buildings in the middle
    ],
  },
  Straat9: {
    img: 'illustrations/Straat9.png',
    sound: 'birds',
    hotspots: [
      [75, 0,  25, 100, 'O', 'Straat5'],          // white space next to buildings on the right
      [38, 20, 15, 15,  'N', 'Straat9.closeup'],  // highest window in middle of central building
    ],
  },
  'Straat9.closeup': {
    img: 'illustrations/Straat9.closeup.png',
    sound: 'birds',
    special: 'closeup',
    hotspots: [],
  },
  Straat5: {
    img: 'illustrations/Straat5.png',
    sound: 'birds',
    hotspots: [
      [0,  0, 35, 100, 'W',  'Plein'],      // buildings on the left
      [50, 0, 25, 100, 'NO', 'Plein2'],     // building between right and middle
    ],
  },
  Plein2: {
    img: 'illustrations/Plein2.png',
    sound: 'birds',
    hotspots: [
      [20, 0, 35, 60, 'N', 'Tram'],         // white space between buildings middle/left
    ],
  },
  Tram: {
    img: 'illustrations/Tram.png',
    sound: 'birds',
    hotspots: [
      [0,  0,  30, 100, 'W',  'Veld'],      // white space on the left
      [65, 20, 35, 60,  'NO', 'Picknick'],  // back of the tram on the right
    ],
  },
  Veld: {
    img: 'illustrations/Veld.png',
    sound: 'birds',
    hotspots: [
      [70, 0, 30, 100, 'O', 'Tram'],        // right of the illustration
    ],
  },
  Picknick: {
    img: 'illustrations/Picknick.png',
    sound: 'birds',
    hotspots: [
      [0, 0, 30, 100, 'W', 'KULeuven'],     // white space on the left
    ],
  },
  Straat4: {
    img: 'illustrations/Straat4.png',
    sound: 'birds',
    hotspots: [
      [0, 0, 30, 100, 'W', 'Straat5'],      // left of the illustration
    ],
  },
  KULeuven: {
    img: 'illustrations/KULeuven.png',
    sound: 'birds',
    hotspots: [
      [25, 0,  50, 80, 'N',  'Giraf'],          // building
      [70, 20, 20, 60, 'NO', 'Straat10.1'],     // space between building and tree
    ],
  },
  Giraf: {
    img: 'illustrations/Giraf.png',
    sound: 'birds',
    hotspots: [
      [70, 0, 30, 100, 'O', 'KULeuven'],    // right of the illustration
    ],
  },
  'Straat10.1': {
    img: 'illustrations/Straat10.1.png',
    sound: 'birds',
    hotspots: [
      [15, 25, 40, 50, 'N', 'Straat10.2'],  // building in the distance
    ],
  },
  'Straat10.2': {
    img: 'illustrations/Straat10.2.png',
    sound: 'birds',
    hotspots: [
      [70, 0,  30, 100, 'O', 'Gebouw1'],              // tree on the right
      [0,  0,  25, 100, 'W', 'KULeuven'],             // white space on the left
      [60, 10, 15, 20,  'N', 'Straat10.2.closeup'],   // highest window in right column
    ],
  },
  'Straat10.2.closeup': {
    img: 'illustrations/Straat10.2.closeup.png',
    sound: 'birds',
    special: 'closeup',
    hotspots: [],
  },
  Gebouw1: {
    img: 'illustrations/Gebouw1.png',
    sound: 'birds',
    hotspots: [
      [55, 0, 45, 100, 'NO', 'Gebouw2'],    // right face of building + white space
      [0,  0, 30, 100, 'W',  'Brug'],       // trees on the left
    ],
  },
  Gebouw2: {
    img: 'illustrations/Gebouw2.png',
    sound: 'birds',
    hotspots: [
      [65, 0,  35, 100, 'O', 'Straat2'],             // constructions on the right
      [44, 38, 20, 25,  'N', 'Gebouw2.closeup'],     // upper set of windows in the middle
    ],
  },
  'Gebouw2.closeup': {
    img: 'illustrations/Gebouw2.closeup.png',
    sound: 'birds',
    special: 'closeup',
    hotspots: [],
  },
  Brug: {
    img: 'illustrations/Brug.png',
    sound: 'birds',
    hotspots: [
      [20, 30, 60, 40, 'N', 'Koppel2'],     // white space above the bridge
    ],
  },

  // Secret = the full-screen poem scene (reached from Poort2)
  Secret: {
    special: 'poem',
    sound: null,
  },
};

// ── Closeup text data ─────────────────────────────────────────────────────────
const CLOSEUP_TEXT = {
  'Straat9.closeup': {
    lines: [
      'ik loop door de stad en alles blijft staan',
      'mensen gaan voorbij zonder mij te raken',
      'de straat verandert niet door mijn kijken',
      'alsof ik niet meetel in wat er gebeurt',
    ],
    attribution: 'uit Een leek in de stad van K. Schippers',
    returnTo: 'Straat9',
  },
  'Straat10.2.closeup': {
    lines: [
      'soms denk ik dat de stad mij niet ziet',
      'dat ik hier beweeg als iets dat toevallig is',
      'een lichaam dat door straten wordt gedragen',
      'zonder dat iemand het opmerkt',
    ],
    attribution: 'uit Het grondgebied van Rutger Kopland',
    returnTo: 'Straat10.2',
  },
  'Gebouw2.closeup': {
    lines: [
      'omdat ik er was in een kom van asfalt',
      'omdat ik er was speelde het orgel gedempt in de verte',
      'de ogen van de stad stonden wijd open',
    ],
    attribution: 'uit De dag van Gerrit Kouwenaar',
    returnTo: 'Gebouw2',
  },
};

// ── Poem stanzas ──────────────────────────────────────────────────────────────
const STANZAS = [
  { lines: ['REISVERHAAL'], title: true },
  { lines: ['Bij elk vertrek', 'kleven kleine stukjes ik', 'halsstarrig aan mijn plek'] },
  { lines: ['Duizend draden diep verweven', 'met het landschap dat ik ben', 'Maar mijn voeten willen voorwaarts', 'naar al wat ik niet ken'] },
  { lines: ['En elke stap verscheurt me langzaam', 'tot een rafelige lijn...', 'Plots verpletterd door de angst', 'volledig onverbonden', '’s nachts alleen te zijn'] },
  { lines: ['De dag verzacht ’t getrek naar terug', 'en bij het wakker worden', 'vragen ogen om verbazing,', 'verlangt mijn huid een nieuw gevoel', 'waarom geen ander kader?', 'waar lag nu weer dat doel...'] },
  { lines: ['Ingedrukt door grote schoonheid', 'Vastgeklampt aan klein geluk', 'verdringen verse herinneringen', 'het donker voor een stuk'] },
  { lines: ['De zon wekt weer de zin', 'van enkel onderweg', 'Zoveel meer verbonden', 'dan alleen maar met mezelf', 'dans ik in een vrolijk blootje', 'terug het heden in'] },
  { lines: ['Astrid Van Driessche'] },
];

// ── DOM references ────────────────────────────────────────────────────────────
const sceneWrapper    = document.getElementById('scene-wrapper');
const sceneImg        = document.getElementById('scene-img');
const hotspotsEl      = document.getElementById('hotspots');
const titleOverlay    = document.getElementById('title-overlay');
const poemScene       = document.getElementById('poem-scene');
const poemText        = document.getElementById('poem-text');
const closeupOverlay  = document.getElementById('closeup-overlay');
const closeupText     = document.getElementById('closeup-text');
const fadeEl          = document.getElementById('fade');
const cursorArrow     = document.getElementById('cursor-arrow');
const cursorImg       = document.getElementById('cursor-img');
const birdEl          = document.getElementById('bird');
const birdImg         = document.getElementById('bird-img');

// ── State ─────────────────────────────────────────────────────────────────────
let currentScene    = null;
let titleDismissed  = false;
let transitioning   = false;
let activeSoundType = null;
let birdTurn        = 0;          // 0 = bird1 next, 1 = bird2 next
let muted             = false;
let poemActive        = false;
let poemIndex         = 0;
let poemTimer         = null;
let closeupTimer      = null;
let afterReveal       = null;   // callback fired when fade-in completes

// ── Audio ─────────────────────────────────────────────────────────────────────
function mkAudio(src, loop) {
  const a = new Audio(src);
  a.preload = 'auto';
  if (loop) a.loop = true;
  return a;
}

const SFX = {
  bird1:   mkAudio('sounds/bird1.mp3',   false),
  bird2:   mkAudio('sounds/bird2.mp3',   false),
  highway: mkAudio('sounds/highway.mp3', true),
  // No cars.mp3 in assets — reuse highway as fallback
  cars:    mkAudio('sounds/highway.mp3', true),
};

function allAudio() { return Object.values(SFX); }

function fadeOut(audio, ms, done) {
  if (audio.paused) { done && done(); return; }
  const steps = 20;
  const interval = ms / steps;
  const decrement = audio.volume / steps;
  const id = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - decrement);
    if (audio.volume <= 0) {
      clearInterval(id);
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 1;
      done && done();
    }
  }, interval);
}

function stopAll() {
  allAudio().forEach(a => { a.pause(); a.currentTime = 0; a.volume = 1; });
}

function playBird() {
  const key = birdTurn === 0 ? 'bird1' : 'bird2';
  birdTurn = 1 - birdTurn;
  const a = SFX[key];
  a.currentTime = 0;
  a.volume = 1;
  if (!muted) a.play().catch(() => {});
  a.onended = () => {
    if (activeSoundType === 'birds') playBird();
  };
}

function startSound(type) {
  activeSoundType = type;
  if (muted) return;
  if (type === 'birds') {
    playBird();
  } else if (type === 'highway' || type === 'cars') {
    const a = SFX[type];
    a.currentTime = 0;
    a.volume = 1;
    a.play().catch(() => {});
  }
}

function switchSound(newType) {
  if (activeSoundType === newType) return;
  const playing = allAudio().find(a => !a.paused);
  activeSoundType = null; // stop bird chain before fade finishes
  if (playing) {
    fadeOut(playing, 1000, () => { if (newType) startSound(newType); });
  } else {
    if (newType) startSound(newType);
  }
}

// ── Custom cursor ─────────────────────────────────────────────────────────────
document.addEventListener('mousemove', e => {
  cursorArrow.style.left = e.clientX + 'px';
  cursorArrow.style.top  = e.clientY + 'px';
});

function showArrow(dir) {
  cursorImg.src = 'illustrations/Arrow ' + dir + '.png';
  cursorArrow.style.display = 'block';
  document.body.style.cursor = 'none';
}

function hideArrow() {
  cursorArrow.style.display = 'none';
  document.body.style.cursor = '';
}

// ── Bird (Straat7) ────────────────────────────────────────────────────────────
let birdDismissed = false;
let birdFlying    = false;

function showBird() {
  if (birdDismissed) return;
  birdImg.src = 'Animations/Bird1.png';
  birdEl.classList.add('visible');
}

function hideBird() {
  birdEl.classList.remove('visible');
  birdImg.src = '';
  birdFlying = false;
  birdEl.style.pointerEvents = '';
}

// Hover: swap Bird1 ↔ Bird.2 (not during flyaway)
birdEl.addEventListener('mouseenter', () => {
  if (birdDismissed || birdFlying) return;
  birdImg.src = 'Animations/Bird.2.png';
});
birdEl.addEventListener('mouseleave', () => {
  if (birdDismissed || birdFlying) return;
  birdImg.src = 'Animations/Bird1.png';
});

// Click: show Birb.png once, then permanently remove bird
birdEl.addEventListener('click', () => {
  if (birdDismissed || birdFlying) return;
  birdFlying = true;
  birdEl.style.pointerEvents = 'none';
  birdImg.src = 'Animations/Birb.png';
  // Hide after animation plays — adjust ms if Birb.png duration differs
  setTimeout(() => {
    birdDismissed = true;
    hideBird();
  }, 2000);
});

// ── Hotspots ──────────────────────────────────────────────────────────────────
function buildHotspots(hotspots) {
  hotspotsEl.innerHTML = '';
  hotspots.forEach(([x, y, w, h, dir, target]) => {
    const div = document.createElement('div');
    div.className = 'hotspot';
    div.style.left   = x + '%';
    div.style.top    = y + '%';
    div.style.width  = w + '%';
    div.style.height = h + '%';
    div.addEventListener('mouseenter', () => showArrow(dir));
    div.addEventListener('mouseleave', hideArrow);
    div.addEventListener('click',      () => navigateTo(target));
    hotspotsEl.appendChild(div);
  });
}

// ── Scene application ─────────────────────────────────────────────────────────
function applyScene(name) {
  currentScene = name;
  const scene  = SCENES[name];

  // Reset bird
  hideBird();

  // Reset closeup
  closeupOverlay.classList.remove('active');
  closeupText.style.opacity = '0';
  clearTimeout(closeupTimer);
  afterReveal = null;

  // Hide poem scene
  poemScene.classList.remove('active');
  poemActive = false;
  clearTimeout(poemTimer);
  sceneWrapper.style.visibility = 'visible';

  if (scene.special === 'closeup') {
    sceneImg.src = scene.img;
    hotspotsEl.innerHTML = '';
    titleOverlay.classList.add('hidden');
    // Schedule text overlay after the fade-in completes
    afterReveal = () => startCloseup(name);
    return;
  }

  if (scene.special === 'poem') {
    sceneWrapper.style.visibility = 'hidden';
    hotspotsEl.innerHTML = '';
    switchSound(null);
    startPoem();
    return;
  }

  sceneImg.src = scene.img;
  buildHotspots(scene.hotspots);

  // Show title only on very first visit to Straat6
  if (name === 'Straat6' && !titleDismissed) {
    titleOverlay.classList.remove('hidden');
  } else {
    titleOverlay.classList.add('hidden');
  }

  switchSound(scene.sound || 'birds');

  // Bird landing animation on Straat7
  if (name === 'Straat7') {
    afterReveal = showBird;
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────
function navigateTo(name) {
  if (transitioning) return;
  transitioning = true;
  hideArrow();

  fadeEl.classList.add('visible');

  setTimeout(() => {
    applyScene(name);

    const scene = SCENES[name];
    if (scene && scene.img) {
      // Wait for the image to actually load before revealing
      const reveal = () => {
        sceneImg.onload  = null;
        sceneImg.onerror = null;
        removeFade();
      };
      if (sceneImg.complete && sceneImg.naturalWidth > 0) {
        removeFade();
      } else {
        sceneImg.onload  = reveal;
        sceneImg.onerror = reveal;
      }
    } else {
      // Poem/special scene: reveal after two animation frames
      requestAnimationFrame(() => requestAnimationFrame(removeFade));
    }
  }, 500);
}

function removeFade() {
  fadeEl.classList.remove('visible');
  transitioning = false;
  if (afterReveal) {
    const cb = afterReveal;
    afterReveal = null;
    cb();
  }
}

// ── Poem scene ────────────────────────────────────────────────────────────────
function startPoem() {
  poemActive = true;
  poemIndex  = 0;
  poemScene.classList.add('active');
  poemScene.addEventListener('click', onPoemClick);
  showStanza(0, false);
}

function renderStanza(idx) {
  const s = STANZAS[idx];
  poemText.innerHTML = s.title
    ? '<span class="poem-title">' + s.lines[0] + '</span>'
    : s.lines.join('<br>');
}

function showStanza(idx, fast) {
  if (!poemActive) return;
  if (idx >= STANZAS.length) { endPoem(); return; }

  clearTimeout(poemTimer);
  poemIndex = idx;

  const fadeMs = fast ? 150 : 1000;

  if (idx === 0) {
    // First stanza: appear without waiting for a fade-out
    renderStanza(0);
    poemText.style.transition = 'none';
    poemText.style.opacity    = '0';
    requestAnimationFrame(() => {
      poemText.style.transition = 'opacity 0.6s ease';
      poemText.style.opacity    = '1';
    });
  } else {
    // Fade out current stanza, then show next
    poemText.style.transition = `opacity ${fadeMs / 1000}s ease`;
    poemText.style.opacity    = '0';
    setTimeout(() => {
      if (!poemActive || poemIndex !== idx) return;
      renderStanza(idx);
      requestAnimationFrame(() => {
        poemText.style.transition = 'opacity 0.6s ease';
        poemText.style.opacity    = '1';
      });
    }, fadeMs);
  }

  // Auto-advance after 10 s (plus the fade-out time)
  poemTimer = setTimeout(() => {
    if (poemActive && poemIndex === idx) showStanza(idx + 1, false);
  }, 10000 + fadeMs);
}

function onPoemClick() {
  if (!poemActive) return;
  clearTimeout(poemTimer);
  showStanza(poemIndex + 1, true); // fast transition on click
}

function endPoem() {
  poemActive = false;
  poemScene.removeEventListener('click', onPoemClick);
  clearTimeout(poemTimer);
  navigateTo('Poort2');
}

// ── Closeup scene ─────────────────────────────────────────────────────────────
function startCloseup(sceneName) {
  const data = CLOSEUP_TEXT[sceneName];
  if (!data) return;

  closeupText.innerHTML =
    data.lines.join('<br>') +
    '<br><br><em>' + data.attribution + '</em>';

  closeupOverlay.classList.add('active');

  // Fade in after 1 second
  closeupTimer = setTimeout(() => {
    closeupText.style.opacity = '1';

    // Return to parent scene after 15 seconds
    closeupTimer = setTimeout(() => {
      closeupText.style.opacity = '0';
      closeupOverlay.classList.remove('active');
      setTimeout(() => navigateTo(data.returnTo), 600);
    }, 15000);
  }, 1000);
}

// ── Title overlay ─────────────────────────────────────────────────────────────
titleOverlay.addEventListener('click', () => {
  titleDismissed = true;
  titleOverlay.classList.add('hidden');
});

// ── UI buttons ────────────────────────────────────────────────────────────────
document.getElementById('home-btn').addEventListener('click', () => {
  titleDismissed = false;
  navigateTo('Straat6');
});

document.getElementById('mute-btn').addEventListener('click', () => {
  muted = !muted;
  if (muted) {
    // Stop all audio immediately
    allAudio().forEach(a => { a.pause(); a.currentTime = 0; a.volume = 1; });
  } else {
    // Restart sound for the current scene
    const savedType = activeSoundType;
    activeSoundType = null;
    const type = savedType || (SCENES[currentScene] && !SCENES[currentScene].special
      ? (SCENES[currentScene].sound || 'birds')
      : null);
    if (type) startSound(type);
  }
  // Swap icons
  document.getElementById('icon-sound-on').style.display  = muted ? 'none'  : '';
  document.getElementById('icon-sound-off').style.display = muted ? ''      : 'none';
});

// ── Audio unlock (browser autoplay policy) ────────────────────────────────────
let audioUnlocked = false;
function ensureAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  // If sound hasn't started yet (blocked by autoplay), restart it now
  const anyPlaying = allAudio().some(a => !a.paused);
  if (!anyPlaying && currentScene) {
    const scene = SCENES[currentScene];
    if (scene && !scene.special) {
      activeSoundType = null;
      startSound(scene.sound || 'birds');
    }
  }
}
['click', 'keydown', 'touchstart'].forEach(evt =>
  document.addEventListener(evt, ensureAudio, { once: true, passive: true })
);

// ── Boot ──────────────────────────────────────────────────────────────────────
(function init() {
  // Start with white screen, load Straat6, fade in only after image is ready
  fadeEl.style.transition = 'none';
  fadeEl.classList.add('visible');
  applyScene('Straat6');

  requestAnimationFrame(() => {
    fadeEl.style.transition = ''; // restore CSS transition

    const reveal = () => {
      sceneImg.onload  = null;
      sceneImg.onerror = null;
      removeFade();
    };

    if (sceneImg.complete && sceneImg.naturalWidth > 0) {
      requestAnimationFrame(reveal);
    } else {
      sceneImg.onload  = reveal;
      sceneImg.onerror = reveal;
    }
  });
})();
