<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>Bohra Bros — A Cinematic Odyssey (1948 — Today)</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --gold-primary: #f0c05a;
      --gold-secondary: #c9933b;
      --gold-bright: #fff2ad;
      --gold-dark: #78521a;
      --deep-red: #3d060a;
      --crimson-curtain: #5c0b11;
      --dark-obsidian: #050608;
      --panel-bg: rgba(14, 16, 22, 0.92);
      --font-display: 'Cinzel', serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
    }

    html, body {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: var(--dark-obsidian);
      color: #e5e5e5;
      font-family: var(--font-body);
      user-select: none;
      -webkit-font-smoothing: antialiased;
    }

    .cinema-viewport {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: url('theatre_bg.jpg') center center / cover no-repeat, radial-gradient(circle at 50% 30%, #150a0c 0%, #080608 60%, #020203 100%);
      background-blend-mode: multiply;
      perspective: 1200px;
    }

    .grand-curtain-container {
      position: absolute;
      inset: 0;
      z-index: 999;
      pointer-events: none;
      display: flex;
      overflow: hidden;
      transition: visibility 0.1s linear 2.8s;
    }

    .grand-curtain-container.opened {
      visibility: hidden;
    }

    .curtain-panel {
      position: relative;
      width: 50%;
      height: 100%;
      background: radial-gradient(circle at 50% 40%, #7e0e16 0%, #4a060b 55%, #1f0204 100%);
      box-shadow: inset 0 0 100px rgba(0,0,0,0.85), 0 0 50px rgba(0,0,0,0.9);
      transition: transform 2.4s cubic-bezier(0.77, 0, 0.175, 1);
      overflow: hidden;
    }

    .curtain-panel::before {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(90deg, 
        rgba(0,0,0,0.45) 0px, 
        rgba(255,255,255,0.08) 30px, 
        rgba(0,0,0,0.6) 60px, 
        rgba(255,215,0,0.04) 90px, 
        rgba(0,0,0,0.5) 120px
      );
      mix-blend-mode: overlay;
    }

    .curtain-panel.curtain-panel-left {
      transform-origin: left top;
      border-right: 4px solid #b8860b;
    }

    .curtain-panel.curtain-panel-right {
      transform-origin: right top;
      border-left: 4px solid #b8860b;
    }

    .grand-curtain-container.open .curtain-panel-left {
      transform: translateX(-105%) skewY(1.5deg);
    }

    .grand-curtain-container.open .curtain-panel-right {
      transform: translateX(105%) skewY(-1.5deg);
    }

    .curtain-gold-trim {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 48px;
      background: repeating-linear-gradient(90deg, #d4af37 0px, #ffd700 12px, #8b6508 12px, #5c4305 24px);
      box-shadow: 0 -4px 15px rgba(0,0,0,0.7);
    }

    .curtain-start-badge {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      background: linear-gradient(135deg, rgba(30, 20, 10, 0.95), rgba(15, 10, 5, 0.98));
      border: 2px solid var(--gold-primary);
      padding: 18px 36px;
      border-radius: 40px;
      color: #fff;
      font-family: var(--font-display);
      text-align: center;
      cursor: pointer;
      box-shadow: 0 0 40px rgba(212, 175, 55, 0.6), 0 20px 60px rgba(0,0,0,0.9);
      transition: all 0.3s ease;
      pointer-events: auto;
    }

    .curtain-start-badge:hover {
      transform: translate(-50%, -50%) scale(1.06);
      box-shadow: 0 0 60px rgba(255, 215, 0, 0.85);
      border-color: var(--gold-bright);
    }

    .curtain-start-badge h2 {
      font-size: clamp(1.1rem, 2vw, 1.5rem);
      letter-spacing: 0.25em;
      color: var(--gold-bright);
    }

    .curtain-start-badge p {
      font-family: var(--font-body);
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      color: rgba(255,255,255,0.75);
      margin-top: 6px;
      text-transform: uppercase;
    }

    .overhead-spotlights {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(1000px, 95vw);
      height: 75%;
      display: flex;
      justify-content: space-around;
      pointer-events: none;
      z-index: 22;
      opacity: 0.55;
      mix-blend-mode: screen;
    }

    .spotlight-cone {
      width: 140px;
      height: 100%;
      background: linear-gradient(180deg, rgba(255, 240, 200, 0.35) 0%, rgba(255, 215, 120, 0.12) 40%, rgba(212, 175, 55, 0) 100%);
      clip-path: polygon(42% 0%, 58% 0%, 100% 100%, 0% 100%);
      filter: blur(8px);
      animation: coneSway 8s ease-in-out infinite alternate;
    }

    .spotlight-cone:nth-child(2) { animation-delay: -2s; }
    .spotlight-cone:nth-child(3) { animation-delay: -4s; }
    .spotlight-cone:nth-child(4) { animation-delay: -6s; }

    @keyframes coneSway {
      0% { opacity: 0.4; transform: scaleX(0.9); }
      100% { opacity: 0.75; transform: scaleX(1.15); }
    }

    .cinema-auditorium-seats {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: clamp(65px, 12vh, 110px);
      z-index: 68;
      pointer-events: none;
      background: linear-gradient(180deg, transparent 0%, rgba(8, 2, 4, 0.6) 25%, #050102 100%);
      display: flex;
      justify-content: center;
      align-items: flex-end;
      overflow: hidden;
    }

    .seats-row {
      display: flex;
      gap: clamp(4px, 1vw, 12px);
      width: 105%;
      justify-content: center;
      transform: translateY(12px);
    }

    .cinema-seat {
      flex: 1;
      max-width: 65px;
      height: 70px;
      background: linear-gradient(180deg, #6b0c13 0%, #3e0509 60%, #170103 100%);
      border-radius: 12px 12px 4px 4px;
      box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.7), inset 0 2px 4px rgba(255, 150, 150, 0.25);
      border-top: 2px solid #8e151e;
      position: relative;
    }

    .cinema-seat::after {
      content: '';
      position: absolute;
      top: 6px;
      left: 10%;
      right: 10%;
      height: 22px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 6px;
    }

    .curtain-valance {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      background: radial-gradient(ellipse at 50% 0%, #7d1017 0%, #4a070c 70%, #1c0204 100%);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.9);
      border-bottom: 3px solid #8e6827;
      z-index: 60;
    }

    .curtain-valance::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 8px;
      background: repeating-linear-gradient(90deg, #d4af37 0px, #d4af37 8px, #7a5814 8px, #7a5814 16px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.6);
    }

    .curtain-side {
      position: absolute;
      top: 0;
      bottom: 0;
      width: clamp(50px, 8vw, 130px);
      background: linear-gradient(90deg, #380509 0%, #630c13 45%, #2a0306 90%, #100102 100%);
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.95);
      z-index: 55;
    }

    .curtain-left { left: 0; }
    .curtain-right { right: 0; transform: scaleX(-1); }

    .stage-floor {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 36%;
      background: linear-gradient(180deg, rgba(8, 9, 12, 0) 0%, rgba(12, 10, 14, 0.85) 25%, #050507 100%);
      border-top: 1px solid rgba(212, 175, 55, 0.15);
      z-index: 10;
      pointer-events: none;
    }

    .floor-reflection-text {
      position: absolute;
      bottom: 130px;
      left: 50%;
      transform: translateX(-50%);
      font-family: var(--font-display);
      font-size: clamp(0.7rem, 1.3vw, 0.95rem);
      letter-spacing: 0.35em;
      color: rgba(212, 175, 55, 0.45);
      text-transform: uppercase;
      text-align: center;
      white-space: nowrap;
      text-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
    }

    .floor-reflection-text span {
      display: block;
      font-family: var(--font-body);
      font-size: 0.65em;
      letter-spacing: 0.25em;
      color: rgba(255, 255, 255, 0.35);
      margin-top: 5px;
    }

    .projector-beam {
      position: absolute;
      top: -10%;
      right: 5%;
      width: 750px;
      height: 120%;
      background: radial-gradient(ellipse at 85% 0%, rgba(255, 240, 200, 0.18) 0%, rgba(255, 215, 120, 0.06) 35%, rgba(0, 0, 0, 0) 70%);
      transform: rotate(-28deg);
      transform-origin: top right;
      pointer-events: none;
      z-index: 25;
      filter: blur(2px);
      animation: projectorFlicker 6s infinite alternate;
    }

    @keyframes projectorFlicker {
      0% { opacity: 0.85; }
      40% { opacity: 0.95; }
      45% { opacity: 0.72; }
      70% { opacity: 0.9; }
      100% { opacity: 1; }
    }

    #shutter-flash {
      position: absolute;
      inset: 0;
      background: #ffffff;
      opacity: 0;
      pointer-events: none;
      z-index: 100;
      transition: opacity 0.15s ease-out;
    }

    .projector-silhouette {
      position: absolute;
      bottom: 25px;
      left: clamp(15px, 3.5vw, 55px);
      width: clamp(80px, 11vw, 135px);
      z-index: 70;
      opacity: 0.85;
      pointer-events: none;
      filter: drop-shadow(0 0 20px rgba(0,0,0,0.9));
    }

    .reel-rotate-cw {
      animation: spinReel 12s linear infinite;
      transform-origin: center;
    }

    .reel-rotate-ccw {
      animation: spinReel 14s linear infinite reverse;
      transform-origin: center;
    }

    @keyframes spinReel {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .cinema-topbar {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      padding: 0 clamp(16px, 3.5vw, 50px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 85;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .studio-crest-mini {
      width: 40px;
      height: 40px;
      border: 1.5px solid var(--gold-primary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle, #2a1a08 0%, #0c0804 100%);
      box-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
    }

    .studio-crest-mini span {
      font-family: var(--font-display);
      font-weight: 800;
      font-size: 1rem;
      color: var(--gold-bright);
      text-shadow: 0 0 8px rgba(240, 192, 90, 0.6);
    }

    .brand-meta h1 {
      font-family: var(--font-display);
      font-size: clamp(0.95rem, 1.5vw, 1.25rem);
      letter-spacing: 0.16em;
      color: #fff;
      font-weight: 700;
      line-height: 1.1;
    }

    .brand-meta p {
      font-size: 0.65rem;
      letter-spacing: 0.2em;
      color: var(--gold-primary);
      text-transform: uppercase;
      margin-top: 2px;
    }

    .topbar-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .pill-btn {
      background: rgba(18, 20, 28, 0.85);
      border: 1px solid rgba(212, 175, 55, 0.4);
      color: #e5e5e5;
      font-family: var(--font-body);
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      padding: 6px 13px;
      border-radius: 30px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.25s ease;
      backdrop-filter: blur(10px);
    }

    .pill-btn:hover {
      border-color: var(--gold-bright);
      background: rgba(30, 26, 20, 0.95);
      color: var(--gold-bright);
      box-shadow: 0 0 14px rgba(212, 175, 55, 0.35);
    }

    .pill-btn.active {
      border-color: var(--gold-primary);
      background: linear-gradient(135deg, rgba(80, 50, 15, 0.85), rgba(30, 20, 10, 0.9));
      color: var(--gold-bright);
    }

    .counter-pill {
      font-family: var(--font-display);
      font-size: 0.75rem;
      color: var(--gold-primary);
      letter-spacing: 0.15em;
      padding: 6px 12px;
      background: rgba(10, 10, 14, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 20px;
    }

    .carousel-stage {
      position: absolute;
      top: 48%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100vw;
      height: clamp(320px, 52vh, 460px);
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
      z-index: 40;
    }

    .carousel-track {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transform-style: preserve-3d;
    }

    .exhibit-card {
      position: absolute;
      width: clamp(240px, 65vw, 340px);
      aspect-ratio: 2 / 2.9; 
      background: #0d0f14;
      border: 2.5px solid #6e4b1f;
      border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 25px rgba(180, 130, 45, 0.25);
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.8s cubic-bezier(0.2, 0.85, 0.3, 1),
                  opacity 0.8s ease,
                  filter 0.8s ease,
                  border-color 0.4s ease;
      transform-style: preserve-3d;
      display: flex;
      flex-direction: column;
    }

    .brass-picture-light {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 7px;
      background: linear-gradient(90deg, #7a5814 0%, #ffd978 50%, #7a5814 100%);
      border-radius: 4px;
      box-shadow: 0 0 14px rgba(255, 217, 120, 0.6);
      z-index: 10;
    }

    .brass-picture-light::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
      width: 140px;
      height: 80px;
      background: radial-gradient(ellipse at 50% 0%, rgba(255, 230, 160, 0.35) 0%, rgba(255, 215, 120, 0) 80%);
      pointer-events: none;
    }

    .exhibit-inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background: #090b0e;
    }

    .poster-art-box {
      position: relative;
      width: 100%;
      flex: 1;
      overflow: hidden;
      background: radial-gradient(circle at center, #1b202a 0%, #08090d 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .poster-art-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      transition: transform 1.2s ease;
    }

    .exhibit-card.active .poster-art-img {
      transform: scale(1.05);
    }

    .poster-glass-glare {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 55%);
      pointer-events: none;
    }

    .poster-multi-grid {
      position: absolute;
      inset: 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 4px;
      padding: 5px;
      background: #08090d;
    }

    .poster-multi-cell {
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 4px;
    }

    .poster-multi-cell img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .exhibit-caption {
      padding: 10px 14px;
      background: linear-gradient(180deg, rgba(14, 16, 22, 0.95) 0%, #06070a 100%);
      border-top: 1px solid rgba(212, 175, 55, 0.25);
    }

    .exhibit-category {
      font-size: 0.6rem;
      letter-spacing: 0.18em;
      color: var(--gold-primary);
      text-transform: uppercase;
      font-weight: 700;
    }

    .exhibit-title {
      font-family: var(--font-display);
      font-size: 1.05rem;
      color: #ffffff;
      font-weight: 700;
      letter-spacing: 0.05em;
      margin: 2px 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .exhibit-role {
      font-size: 0.68rem;
      color: rgba(255, 255, 255, 0.6);
      display: flex;
      justify-content: space-between;
    }

    .teleprompter-tray {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: min(840px, 92vw);
      background: rgba(12, 14, 20, 0.9);
      border: 1px solid rgba(212, 175, 55, 0.35);
      border-radius: 12px;
      padding: 14px 20px;
      z-index: 80;
      backdrop-filter: blur(16px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(212, 175, 55, 0.15);
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .tray-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(212, 175, 55, 0.15);
      padding-bottom: 5px;
    }

    .tray-badge {
      font-size: 0.62rem;
      letter-spacing: 0.2em;
      font-weight: 800;
      color: var(--gold-bright);
      text-transform: uppercase;
    }

    .tray-nav-arrows {
      display: flex;
      gap: 6px;
    }

    .arrow-btn {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(212, 175, 55, 0.3);
      color: var(--gold-bright);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.72rem;
      transition: all 0.2s ease;
    }

    .arrow-btn:hover {
      background: var(--gold-primary);
      color: #000;
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
    }

    .tray-headline {
      font-family: var(--font-display);
      font-size: clamp(0.95rem, 1.8vw, 1.15rem);
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.05em;
    }

    .tray-narration {
      font-size: clamp(0.75rem, 1.3vw, 0.88rem);
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.45;
      font-weight: 400;
    }

    .timeline-bar-wrap {
      width: 100%;
      height: 3px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
      margin-top: 4px;
    }

    .timeline-progress {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--gold-dark) 0%, var(--gold-primary) 50%, var(--gold-bright) 100%);
      transition: width 0.35s ease;
    }

    @media (max-width: 768px) {
      .cinema-topbar { height: 60px; }
      .brand-meta p { display: none; }
      .curtain-side { width: 40px; }
      .teleprompter-tray { padding: 10px 14px; bottom: 12px; }
      .floor-reflection-text { bottom: 95px; }
    }
  </style>
</head>
<body>

  <div class="cinema-viewport" id="viewport">
    <div class="grain-overlay"></div>

    <div class="curtain-valance"></div>
    <div class="curtain-side curtain-left"></div>
    <div class="curtain-side curtain-right"></div>

    <div class="projector-beam"></div>
    <div id="shutter-flash"></div>

    <div class="stage-floor">
      <div class="floor-reflection-text">
        MODERN CINEMA
        <span>NEW STORIES · NEW AUDIENCES · THE JOURNEY CONTINUES</span>
      </div>
    </div>

    <div class="projector-silhouette">
      <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 145 H120 L105 95 H55 Z" fill="#080709" stroke="#7a5814" stroke-width="1.5"/>
        <rect x="45" y="65" width="70" height="35" rx="3" fill="#0c0a0e" stroke="#c9933b" stroke-width="1.5"/>
        <circle cx="120" cy="78" r="8" fill="#ffd978" opacity="0.8" filter="drop-shadow(0 0 8px #ffd978)"/>
        <g class="reel-rotate-cw" style="transform-origin: 52px 42px;">
          <circle cx="52" cy="42" r="22" stroke="#d4af37" stroke-width="2" fill="#080608"/>
          <line x1="52" y1="20" x2="52" y2="64" stroke="#d4af37" stroke-width="1.5"/>
          <line x1="30" y1="42" x2="74" y2="42" stroke="#d4af37" stroke-width="1.5"/>
          <circle cx="52" cy="42" r="5" fill="#f0c05a"/>
        </g>
        <g class="reel-rotate-ccw" style="transform-origin: 105px 42px;">
          <circle cx="105" cy="42" r="22" stroke="#d4af37" stroke-width="2" fill="#080608"/>
          <line x1="105" y1="20" x2="105" y2="64" stroke="#d4af37" stroke-width="1.5"/>
          <line x1="83" y1="42" x2="127" y2="42" stroke="#d4af37" stroke-width="1.5"/>
          <circle cx="105" cy="42" r="5" fill="#f0c05a"/>
        </g>
      </svg>
    </div>

    <header class="cinema-topbar">
      <div class="brand-group">
        <div class="studio-crest-mini">
          <span>BB</span>
        </div>
        <div class="brand-meta">
          <h1>BOHRA BROS</h1>
          <p>A Cinematic Odyssey · 1948 — Today</p>
        </div>
      </div>

      <div class="topbar-controls">
        <div class="counter-pill" id="scene-counter">00 / 22</div>

        <button class="pill-btn" id="play-btn" onclick="togglePlaybackEngine()">
          <span id="play-icon">⏸</span>
          <span id="play-label">PAUSE</span>
        </button>
      </div>
    </header>

    <div class="grand-curtain-container" id="grand-curtains">
      <div class="curtain-panel curtain-panel-left">
        <div class="curtain-gold-trim"></div>
      </div>
      <div class="curtain-panel curtain-panel-right">
        <div class="curtain-gold-trim"></div>
      </div>
      <div class="curtain-start-badge" id="curtain-trigger" onclick="openGrandCurtains()">
        <h2>BOHRA BROS</h2>
        <p>▶ CLICK TO OPEN CURTAINS & BEGIN THE ODYSSEY</p>
      </div>
    </div>

    <div class="overhead-spotlights">
      <div class="spotlight-cone"></div>
      <div class="spotlight-cone"></div>
      <div class="spotlight-cone"></div>
      <div class="spotlight-cone"></div>
    </div>

    <div class="cinema-auditorium-seats">
      <div class="seats-row">
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
        <div class="cinema-seat"></div>
      </div>
    </div>

    <main class="carousel-stage">
      <div class="carousel-track" id="carousel-track"></div>
    </main>

    <footer class="teleprompter-tray">
      <div class="tray-header">
        <span class="tray-badge" id="tray-badge">SCENE 01 // ORIGIN</span>
        <div class="tray-nav-arrows">
          <button class="arrow-btn" onclick="previousScene()" title="Previous Scene">❮</button>
          <button class="arrow-btn" onclick="nextScene()" title="Next Scene">❯</button>
        </div>
      </div>
      <div class="tray-headline" id="tray-headline">From Jodhpur to Bombay (1947)</div>
      <p class="tray-narration" id="tray-narration">
        Every legacy begins with a dream. From Jodhpur to Bombay, that dream became Bohra Bros. In 1947, Shri Shree Ram Bohra arrived in Bombay with a vision that would shape generations of Indian cinema.
      </p>
      <div class="timeline-bar-wrap">
        <div class="timeline-progress" id="timeline-progress"></div>
      </div>
    </footer>
  </div>

  <script>
    const documentaryScenes = [
      {
        id: "scene-01",
        badge: "01. THE BEGINNING // 1947",
        headline: "From Jodhpur to Bombay",
        category: "ORIGIN STORY",
        title: "Shri Shree Ram Bohra",
        role: "Founder · Producer · Visionary",
        image: "shreshreerambohra.jpeg",
        fallback: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Every legacy begins with a dream.",
          "From Jodhpur to Bombay, that dream became Bohra Bros.",
          "In 1947, Shri Shree Ram Bohra arrived in Bombay with a vision that would shape generations of Indian cinema."
        ],
        type: "single"
      },
      {
        id: "scene-02",
        badge: "02. THE FOUNDATION // 1948",
        headline: "Bohra Bros is Born",
        category: "THE BROTHERS",
        title: "Two Brothers, One Vision",
        role: "Shri Shree Ram & Shri Ram Kumar Bohra",
        image: "ShreeRamKumarBohra.jfif",
        fallback: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
        narration: [
          "In 1948, together with his brother Shri Ram Kumar Bohra, Bohra Bros was born."
        ],
        type: "single"
      },
      {
        id: "scene-03",
        badge: "03. THE FIRST FILM // 1948",
        headline: "The Debut: Lachak",
        category: "FIRST PRODUCTION",
        title: "Lachak (1948)",
        role: "The Courage to Begin",
        image: "Movies/lachak.jpeg",
        fallback: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
        narration: [
          "The cinematic journey began with Lachak."
        ],
        type: "single"
      },
      {
        id: "scene-04",
        badge: "04. THE BREAKTHROUGH // 1958",
        headline: "The Musical Triumph: Al-Hilal",
        category: "BREAKTHROUGH HIT",
        title: "Al-Hilal (1958)",
        role: "Box Office & Musical Sensation",
        image: "Movies/alhilal.jpg",
        fallback: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Then came Al-Hilal... a breakthrough that changed the journey."
        ],
        type: "single"
      },
      {
        id: "scene-05",
        badge: "05. THE GOLDEN ERA // 1950s—1970s",
        headline: "Adventure, Fantasy & Drama",
        category: "CLASSIC CINEMA",
        title: "The Golden Era Classics",
        role: "Thief of Baghdad · Hercules · Howrah Express",
        images: [
          "Movies/thiefofbagdad.jpeg",
          "Movies/hercules.jpeg",
          "Movies/howrahexpress.jpeg",
          "Movies/tikdambaaz.jpeg"
        ],
        fallback: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Adventure. Fantasy. Action. Drama.",
          "From The Thief of Baghdad to Hercules, Howrah Express and Tikdambaaz."
        ],
        type: "multi"
      },
      {
        id: "scene-06",
        badge: "06. INDUSTRY LEADERSHIP // 1972—1984",
        headline: "President of IMPPA",
        category: "NATIONAL LEADERSHIP",
        title: "Guiding the Film Fraternity",
        role: "Shri Shree Ram Bohra · 12-Year Presidency",
        image: "withraajkapoor.jpeg",
        fallback: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Beyond cinema, Shri Shree Ram Bohra became a leader of the film fraternity, serving as IMPPA President from 1972 to 1984."
        ],
        type: "single"
      },
      {
        id: "scene-07",
        badge: "07. AN EVOLVING BUSINESS",
        headline: "From Filmmakers to Industry Builders",
        category: "THE ECOSYSTEM",
        title: "Five Connected Pillars",
        role: "Production · Distribution · Exhibition · Media",
        image: "Movies/jadumahal.jpeg",
        fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Production became distribution.",
          "Distribution became exhibition.",
          "And cinema expanded into media."
        ],
        type: "single"
      },
      {
        id: "scene-08",
        badge: "08. DISTRIBUTION // SINCE 1960",
        headline: "Ganpati Films Distribution",
        category: "TERRITORIAL POWER",
        title: "Connecting Films to Millions",
        role: "Mumbai · Delhi · Jaipur · Ahmedabad · Indore",
        images: [
          "Movies/tejaa.jpeg",
          "Movies/takkar.jpeg",
          "Movies/gangakikasam.jpeg",
          "Movies/mard.jpeg"
        ],
        fallback: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Through Ganpati Films, Bohra Bros connected films with audiences across India."
        ],
        type: "multi"
      },
      {
        id: "scene-09",
        badge: "09. THEATRES & EXHIBITION // 1977",
        headline: "Bringing Cinema to the People",
        category: "THEATRICAL NETWORK",
        title: "City Pulse & Single Screens",
        role: "Palanpur · Harij · Satamba · Gandhinagar",
        image: "Movies/bhadrpehlad.jpeg",
        fallback: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&auto=format&fit=crop&q=80",
        narration: [
          "In 1977, the journey reached the theatres."
        ],
        type: "single"
      },
      {
        id: "scene-10",
        badge: "10. THREE GENERATIONS",
        headline: "One Continuing Dynasty",
        category: "CINEMATIC HERITAGE",
        title: "Three Generations",
        role: "Shri Shree Ram · Surendra · Sunil Bohra",
        images: [
          "shreshreerambohra.jpeg",
          "surenderbohra.jfif",
          "sunilbohra.jpeg",
          "ShreeRamKumarBohra.jfif"
        ],
        fallback: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Three generations.",
          "One continuing legacy."
        ],
        type: "multi"
      },
      {
        id: "scene-11",
        badge: "11. SECOND GENERATION",
        headline: "Surendra Bohras Era",
        category: "MAINSTREAM ACTION",
        title: "Commercial Bollywood Success",
        role: "Tejaa · Takkar · Kaalia · Aurat",
        image: "surenderbohra.jfif",
        fallback: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Surendra Bohra carried the legacy into a new era of mainstream Hindi cinema."
        ],
        type: "single"
      },
      {
        id: "scene-12",
        badge: "12. SUNIL BOHRA // 3RD GENERATION",
        headline: "A Contemporary Visionary",
        category: "NEW ERA OF CINEMA",
        title: "Sunil Bohra",
        role: "Producer · Distributor · Innovator",
        image: "sunilbohra.jpeg",
        fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80",
        narration: [
          "And the third generation brought a new contemporary vision.",
          "Sunil Bohra."
        ],
        type: "single"
      },
      {
        id: "scene-13",
        badge: "13. CONTEMPORARY MASTERPIECES",
        headline: "Redefining Indian Cinema",
        category: "GLOBAL ACCLAIM",
        title: "Modern Classics Catalogue",
        role: "Gangs of Wasseypur · Tanu Weds Manu · Shahid",
        images: [
          "Movies/gangsofwassepur.jpeg",
          "Movies/tanuwedsmanu.jpg",
          "Movies/shahid1.jpeg",
          "Movies/shaitannew.jpeg"
        ],
        fallback: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Shaitan. Tanu Weds Manu. Gangs of Wasseypur. Shahid. Mastram.",
          "Different stories. One cinematic journey."
        ],
        type: "multi"
      },
      {
        id: "scene-14",
        badge: "14. GANGS OF WASSEYPUR // 2012",
        headline: "The Cannes Phenomenon",
        category: "CULT EPIC",
        title: "Gangs of Wasseypur I & II",
        role: "Directed by Anurag Kashyap",
        image: "Movies/gangsofwassepur.jpeg",
        fallback: "https://images.unsplash.com/photo-1518676599649-7c7790e7f7f0?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Gangs of Wasseypur.",
          "A landmark of contemporary Indian cinema, reaching the Cannes Directors' Fortnight."
        ],
        type: "single"
      },
      {
        id: "scene-15",
        badge: "15. SHAHID // 2013",
        headline: "National Film Award Winner",
        category: "CRITICAL RECOGNITION",
        title: "Shahid (2013)",
        role: "Directed by Hansal Mehta",
        image: "Movies/shahid1.jpeg",
        fallback: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Shahid.",
          "Powerful storytelling that earned major national recognition."
        ],
        type: "single"
      },
      {
        id: "scene-16",
        badge: "16. TANU WEDS MANU // 2011",
        headline: "Nationwide Phenomenon",
        category: "BLOCKBUSTER ENTERTAINER",
        title: "Tanu Weds Manu",
        role: "Directed by Aanand L. Rai",
        image: "Movies/tanuwedsmanu.jpg",
        fallback: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Tanu Weds Manu.",
          "A story that connected with audiences across India."
        ],
        type: "single"
      },
      {
        id: "scene-17",
        badge: "17. REGIONAL CINEMA",
        headline: "Gujarat & Rajasthan",
        category: "REGIONAL ROOTS",
        title: "Honouring Cultural Roots",
        role: "Gujarati & Rajasthani Cinema",
        image: "Movies/Puraskar.jfif",
        fallback: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80",
        narration: [
          "From Gujarati and Rajasthani cinema to Hindi films, the journey crossed languages and cultures."
        ],
        type: "single"
      },
      {
        id: "scene-18",
        badge: "18. TELEVISION & MEDIA",
        headline: "Beyond the Cinema Screen",
        category: "BROADCAST EXCELLENCE",
        title: "Buniyaad to Modern Formats",
        role: "Programming · News · Music Countdown",
        image: "Movies/ekhasinathi.jpeg",
        fallback: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Then came television.",
          "From Buniyaad to modern entertainment formats, the story moved beyond the big screen."
        ],
        type: "single"
      },
      {
        id: "scene-19",
        badge: "19. HUMANITARIAN LEGACY // 1975—1997",
        headline: "A Tradition of Giving Back",
        category: "PHILANTHROPY",
        title: "Serving the Community",
        role: "Charitable Trust · Hospital Wing Jodhpur",
        image: "withatalbiharivajpayee1.jpeg",
        fallback: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
        narration: [
          "But the legacy was never only about cinema.",
          "It was also about giving back."
        ],
        type: "single"
      },
      {
        id: "scene-20",
        badge: "20. THE LIVING ARCHIVE",
        headline: "Moments with Legends",
        category: "TIMELESS MEMORIES",
        title: "With Raj Kapoor, Dilip Kumar & Leaders",
        role: "A Treasury of Relationships",
        images: [
          "withraajkapoor.jpeg",
          "withdilipkumar.jpeg",
          "withlalkrishnadvani.jpeg",
          "withatalbiharivajpayee1.jpeg"
        ],
        fallback: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Through decades, the journey created friendships, collaborations and memories with legends of Indian cinema and public life."
        ],
        type: "multi"
      },
      {
        id: "scene-21",
        badge: "21. BOHRA BROS TODAY",
        headline: "An Integrated Entertainment Powerhouse",
        category: "THE FUTURE ECOSYSTEM",
        title: "Story to Screen",
        role: "Development · Production · Distribution · Exhibition",
        image: "sunilbohrawithamirkhan.jpeg",
        fallback: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
        narration: [
          "Today, Bohra Bros continues across development, production, distribution and exhibition.",
          "Story to screen."
        ],
        type: "single"
      },
      {
        id: "scene-22",
        badge: "22. THE FUTURE // 2026 & BEYOND",
        headline: "The Story Continues",
        category: "UPCOMING SLATE",
        title: "From Jodhpur to the World",
        role: "Akki, Vikki Te Nikki · Ganglords · Brown Boys",
        image: "Movies/shaitannew.jpeg",
        fallback: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=800&auto=format&fit=crop&q=80",
        narration: [
          "And the story is still being written.",
          "New projects. New voices. New stories.",
          "From Jodhpur to Bombay.",
          "From one dream to generations of cinema.",
          "Bohra Bros.",
          "The story continues."
        ],
        type: "single"
      }
    ];

    let currentSceneIndex = 0;
    let isPlaying = true;
    let autoAdvanceTimer = null;
    let hasUnlockedAudio = false;
    let currentUtterance = null; // Store globally so GC doesn't kill it

    const carouselTrack = document.getElementById('carousel-track');
    const trayBadge = document.getElementById('tray-badge');
    const trayHeadline = document.getElementById('tray-headline');
    const trayNarration = document.getElementById('tray-narration');
    const progressBar = document.getElementById('timeline-progress');
    const sceneCounter = document.getElementById('scene-counter');
    const shutterFlash = document.getElementById('shutter-flash');
    const playBtn = document.getElementById('play-btn');
    const playIcon = document.getElementById('play-icon');
    const playLabel = document.getElementById('play-label');
    const grandCurtains = document.getElementById('grand-curtains');

    function openGrandCurtains() {
      if (!hasUnlockedAudio) {
        const unlockUtterance = new SpeechSynthesisUtterance('');
        window.speechSynthesis.speak(unlockUtterance);
        hasUnlockedAudio = true;
      }

      // Hide the start button immediately
      const triggerBtn = document.getElementById('curtain-trigger');
      if (triggerBtn) {
        triggerBtn.style.opacity = '0';
        triggerBtn.style.pointerEvents = 'none';
      }

      grandCurtains.classList.add('open');

      setTimeout(() => {
        grandCurtains.classList.add('opened');
      }, 2600);

      triggerSceneTransition(0);
    }

    function buildCarouselDOM() {
      carouselTrack.innerHTML = '';
      
      documentaryScenes.forEach((scene, index) => {
        const card = document.createElement('article');
        card.className = 'exhibit-card';
        card.id = `card-${index}`;
        card.onclick = () => jumpToScene(index);

        let posterContent = '';
        if (scene.type === 'multi' && scene.images) {
          posterContent = `
            <div class="poster-multi-grid">
              ${scene.images.map(img => `
                <div class="poster-multi-cell">
                  <img src="${img}" alt="${scene.title}" onerror="this.src='${scene.fallback}'">
                </div>
              `).join('')}
            </div>
          `;
        } else {
          posterContent = `
            <img class="poster-art-img" src="${scene.image}" alt="${scene.title}" onerror="this.src='${scene.fallback}'">
          `;
        }

        card.innerHTML = `
          <div class="brass-picture-light"></div>
          <div class="exhibit-inner">
            <div class="poster-art-box">
              ${posterContent}
              <div class="poster-glass-glare"></div>
            </div>
            <div class="exhibit-caption">
              <div class="exhibit-category">${scene.category}</div>
              <div class="exhibit-title">${scene.title}</div>
              <div class="exhibit-role">
                <span>${scene.role}</span>
              </div>
            </div>
          </div>
        `;

        carouselTrack.appendChild(card);
      });

      updateCarousel3DTransforms();
    }

    function updateCarousel3DTransforms() {
      const cards = document.querySelectorAll('.exhibit-card');
      
      cards.forEach((card, index) => {
        let offset = index - currentSceneIndex;
        
        // NO MORE CIRCULAR CAROUSEL
        // This ensures "Shaitan" (Slide 22) does NOT appear on the left of Slide 1.
        
        const absOffset = Math.abs(offset);

        if (offset === 0) {
          card.classList.add('active');
          card.style.transform = 'translateX(0px) translateZ(100px) rotateY(0deg) scale(1.03)';
          card.style.opacity = '1';
          card.style.zIndex = '50';
          card.style.filter = 'brightness(1.05) drop-shadow(0 0 25px rgba(240, 192, 90, 0.4))';
          card.style.pointerEvents = 'auto';
        } else if (absOffset === 1) {
          card.classList.remove('active');
          const translateX = offset * (window.innerWidth < 768 ? 240 : 330);
          const rotateY = offset * -26;
          card.style.transform = `translateX(${translateX}px) translateZ(-40px) rotateY(${rotateY}deg) scale(0.88)`;
          card.style.opacity = '0.72';
          card.style.zIndex = '40';
          card.style.filter = 'brightness(0.65)';
          card.style.pointerEvents = 'auto';
        } else if (absOffset === 2) {
          card.classList.remove('active');
          const translateX = offset * (window.innerWidth < 768 ? 320 : 490);
          const rotateY = offset * -38;
          card.style.transform = `translateX(${translateX}px) translateZ(-150px) rotateY(${rotateY}deg) scale(0.72)`;
          card.style.opacity = '0.35';
          card.style.zIndex = '30';
          card.style.filter = 'brightness(0.4)';
          card.style.pointerEvents = 'auto';
        } else {
          card.classList.remove('active');
          // Hide all other cards completely off-screen or faded out
          const translateX = offset > 0 ? (offset * 380) : (offset * 380);
          card.style.transform = `translateX(${translateX}px) translateZ(-340px) scale(0.5)`;
          card.style.opacity = '0';
          card.style.zIndex = '10';
          card.style.pointerEvents = 'none';
        }
      });
    }

    function triggerSceneTransition(index) {
      if (index < 0 || index >= documentaryScenes.length) return; // Prevent out of bounds
      
      currentSceneIndex = index;
      const scene = documentaryScenes[currentSceneIndex];

      updateCarousel3DTransforms();
      trayBadge.textContent = scene.badge;
      trayHeadline.textContent = scene.headline;
      const textToSpeak = scene.narration.join(' ');
      trayNarration.textContent = textToSpeak;
      sceneCounter.textContent = `${String(currentSceneIndex + 1).padStart(2, '0')} / ${String(documentaryScenes.length).padStart(2, '0')}`;

      const progressRatio = (currentSceneIndex / (documentaryScenes.length - 1)) * 100;
      progressBar.style.width = `${progressRatio}%`;

      shutterFlash.style.opacity = '0.55';
      setTimeout(() => { shutterFlash.style.opacity = '0'; }, 160);

      // --- VOICE & ADVANCEMENT LOGIC ---
      window.speechSynthesis.cancel(); 
      if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);

      if (isPlaying) {
        currentUtterance = new SpeechSynthesisUtterance(textToSpeak);
        currentUtterance.lang = 'en-IN';
        currentUtterance.rate = 0.9; // Read nicely and clearly

        // Go to next scene ONLY AFTER the sentence finishes speaking entirely!
        currentUtterance.onend = () => {
          if (isPlaying) {
            // Wait 1.2 seconds after speaking before changing the slide for a cinematic pause
            autoAdvanceTimer = setTimeout(() => {
               if (currentSceneIndex < documentaryScenes.length - 1) {
                 nextScene();
               } else {
                 // Stop playing when the final slide is done
                 togglePlaybackEngine();
               }
            }, 1200);
          }
        };

        // Start Voice after transition flash
        setTimeout(() => {
          if (isPlaying) {
            window.speechSynthesis.speak(currentUtterance);
          }
        }, 600);
      }
    }

    function nextScene() {
      if (currentSceneIndex < documentaryScenes.length - 1) {
        triggerSceneTransition(currentSceneIndex + 1);
      }
    }

    function previousScene() {
      if (currentSceneIndex > 0) {
        triggerSceneTransition(currentSceneIndex - 1);
      }
    }

    function jumpToScene(index) {
      triggerSceneTransition(index);
    }

    function togglePlaybackEngine() {
      isPlaying = !isPlaying;
      if (isPlaying) {
        playIcon.textContent = '⏸';
        playLabel.textContent = 'PAUSE';
        playBtn.classList.add('active');
        triggerSceneTransition(currentSceneIndex);
      } else {
        playIcon.textContent = '▶';
        playLabel.textContent = 'RESUME';
        playBtn.classList.remove('active');
        window.speechSynthesis.cancel();
        if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
      }
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextScene();
      } else if (e.key === 'ArrowLeft') {
        previousScene();
      }
    });

    window.addEventListener('resize', () => {
      updateCarousel3DTransforms();
    });

    let touchStartX = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) nextScene();
      if (touchEndX - touchStartX > 50) previousScene();
    }, { passive: true });

    window.onload = function () {
      buildCarouselDOM();
      // Keep curtains closed until click to give theatrical opening
    };
  </script>
</body>
</html>
