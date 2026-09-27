document.getElementById('start-btn').addEventListener('click', startExperience);

let isPlaying = false;
let allowPause = false;
let currentSlide = 0;
const totalSlides = 18;

let synth = window.speechSynthesis;
let voiceOptions = [];
let currentUtterance = null;
let currentTween = null;
let slideTimeout = null;

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => { voiceOptions = synth.getVoices(); };
}

const slideData = [
    { text: "For generations, Bohra Bros has been part of the journey of Indian cinema.", trans: "flash" }, // 0
    { text: "In 1947, Shri Shree Ram Bohra travelled from Jodhpur to Bombay, beginning a journey that would become the foundation of Bohra Bros.", trans: "black" }, // 1
    { text: "In 1948, Shri Shree Ram Bohra and Shri Ram Kumar Bohra founded Bohra Bros.", trans: "burn" }, // 2
    { text: "The early productions included Lachak. It did not succeed at the box office, but the journey continued.", trans: "flash" }, // 3
    { text: "Al-Hilal marked an important breakthrough, with its music becoming widely popular.", trans: "black" }, // 4
    { text: "From Thief of Baghdad to Hercules, and Howrah Express to Puraskar, the classic era built a foundation across Indian cinema.", trans: "flash" }, // 5
    { text: "During the 1970s and 80s, the company took on industry leadership roles, building relationships across the cinematic world.", trans: "burn" }, // 6
    { text: "In 1960, distribution expanded across territories, connecting audiences in different parts of India with major titles.", trans: "black" }, // 7
    { text: "The exhibition journey entered a new chapter in 1977 with the launch of theatres and cinema spaces.", trans: "flash" }, // 8
    { text: "The legacy began with Generation One, led by Shri Shree Ram Bohra.", trans: "black" }, // 9
    { text: "It passed to Generation Two, with Surendra Bohra continuing the cinematic journey.", trans: "black" }, // 10
    { text: "And today, it moves forward with Generation Three, under the vision of Sunil Bohra.", trans: "burn" }, // 11
    { text: "The modern catalogue carries another chapter, with films such as Tanu Weds Manu, Gangs of Wasseypur, Shahid, and Mastram.", trans: "flash" }, // 12
    { text: "Alongside Hindi cinema, the journey reached television and media, entering the broadcast space.", trans: "black" }, // 13
    { text: "The commitment extended to regional storytelling, honoring local roots with a wider reach.", trans: "burn" }, // 14
    { text: "Beyond entertainment, the legacy includes initiatives connected with education, medical assistance and support for people in need.", trans: "flash" }, // 15
    { text: "This is not simply a collection of films. It is an evolving story of cinema, business, people, places and generations.", trans: "black" }, // 16
    { text: "Bohra Bros. A legacy born in Jodhpur. A journey built in Bombay. A future open to the world.", trans: "none" } // 17
];

function setupGalleries() {
    const classicItems = document.querySelectorAll('#classic-wall .wall-item');
    classicItems.forEach((item, i) => {
        let x = (i - 3) * 350; let z = Math.abs(i - 3) * -300;
        item.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${(i-3)*-10}deg)`;
    });

    const modernItems = document.querySelectorAll('#modern-wall .wall-item');
    modernItems.forEach((item, i) => {
        let x = (i - 3) * 400; let z = Math.abs(i - 3) * -400;
        item.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${(i-3)*-15}deg)`;
    });

    const grid = document.getElementById('massive-archive-grid');
    const imgs = ["archivalgallery.jpeg", "archivalgallery10.jpeg", "archivalgallery11.jpeg", "archivalgallery12.jpeg", "archivalgallery13.jpeg", "archivalgallery14.jpeg", "archivalgallery16.jpeg", "archivalgallery17.jpeg", "archivalgallery20.jpeg"];
    for(let i=0; i<30; i++) {
        let el = document.createElement('div'); el.className = 'frame wall-item';
        let img = document.createElement('img'); img.src = imgs[i % imgs.length]; img.className = 'poster-img';
        let glass = document.createElement('div'); glass.className = 'frame-glass';
        el.appendChild(img); el.appendChild(glass);
        let x = (Math.random() - 0.5) * 3000; let y = (Math.random() - 0.5) * 1500; let z = -(Math.random() * 2000);
        el.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        grid.appendChild(el);
    }
}

function startExperience() {
    document.getElementById('start-btn').style.display = 'none';
    setupGalleries();
    
    document.getElementById('projector-sound').volume = 0.3;
    document.getElementById('projector-sound').play().catch(e=>console.log(e));
    document.getElementById('bg-music').volume = 0.5;
    document.getElementById('bg-music').play().catch(e=>console.log(e));

    isPlaying = true;
    allowPause = true;

    playSlide(0);
}

function playSlide(index) {
    if (index >= totalSlides) return;
    
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active-slide'));
    const activeSlide = document.getElementById(`slide-${index}`);
    activeSlide.classList.add('active-slide');

    const frames = activeSlide.querySelectorAll('.frame');
    const texts = activeSlide.querySelectorAll('.text-layer');
    
    gsap.fromTo(frames, 
        { z: -1000, opacity: 0, scale: 0.8 }, 
        { z: 0, opacity: 1, scale: 1, duration: 2, ease: "power2.out", stagger: 0.2 }
    );
    gsap.fromTo(texts, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power2.out" }
    );

    currentTween = gsap.to(activeSlide, {
        z: 800, duration: 15, ease: "none"
    });

    let data = slideData[index];
    currentUtterance = new SpeechSynthesisUtterance(data.text);
    currentUtterance.rate = 0.85; 
    currentUtterance.pitch = 0.8; 
    
    let voice = voiceOptions.find(v => (v.name.includes("UK English Male") || v.name.includes("Daniel")));
    if (!voice) voice = voiceOptions.find(v => v.name.includes("Male"));
    if (voice) currentUtterance.voice = voice;

    document.getElementById('bg-music').volume = 0.2;

    let startTime = Date.now();
    let minSlideDuration = 7000; // Force slide to stay for at least 7 seconds if audio fails

    currentUtterance.onend = () => {
        document.getElementById('bg-music').volume = 0.5;
        let timeElapsed = Date.now() - startTime;
        let delayBeforeNext = Math.max(1500, minSlideDuration - timeElapsed);
        
        slideTimeout = setTimeout(() => {
            if(!isPlaying) return; 
            triggerTransition(data.trans, () => {
                currentSlide++;
                playSlide(currentSlide);
            });
        }, delayBeforeNext);
    };

    synth.speak(currentUtterance);

    // Fallback if synth fails entirely
    setTimeout(() => {
        if (!synth.speaking && !synth.pending) {
            currentUtterance.onend();
        }
    }, 1000);
}

function triggerTransition(type, callback) {
    if (type === "none") return;
    
    let overlayId = `transition-${type}`;
    let overlay = document.getElementById(overlayId);
    if(!overlay) { callback(); return; }

    gsap.to(overlay, {
        opacity: 1, duration: 0.4, ease: "power2.in",
        onComplete: () => {
            callback();
            gsap.to(overlay, { opacity: 0, duration: 0.8, ease: "power2.out", delay: 0.1 });
        }
    });
}

document.addEventListener('keydown', (e) => {
    if(e.code === 'Space') { e.preventDefault(); togglePause(); }
});

function togglePause() {
    if (!allowPause) return;
    const indicator = document.getElementById('pause-indicator');
    
    if (isPlaying) {
        synth.pause();
        if(currentTween) currentTween.pause();
        document.getElementById('bg-music').pause();
        document.getElementById('projector-sound').pause();
        indicator.style.opacity = 1;
    } else {
        synth.resume();
        if(currentTween) currentTween.play();
        document.getElementById('bg-music').play();
        document.getElementById('projector-sound').play();
        indicator.style.opacity = 0;
        if (!synth.speaking && !synth.pending) {
            let data = slideData[currentSlide];
            triggerTransition(data.trans, () => {
                currentSlide++;
                playSlide(currentSlide);
            });
        }
    }
    isPlaying = !isPlaying;
}

window.addEventListener('mousemove', (e) => {
    if(!isPlaying) return;
    let mx = (e.clientX / window.innerWidth - 0.5) * 2;
    let my = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to(document.getElementById('camera'), {
        x: mx * 50, y: my * 30, rotationY: mx * 2, rotationX: -my * 1,
        duration: 2, ease: "power2.out"
    });
});
