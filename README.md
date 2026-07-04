# Emoji Match Game – Interactive Browser Game

A fully-featured match-3 puzzle game built with vanilla JavaScript, HTML5, and CSS3. Features cross-platform support (desktop/mobile), real-time scoring, persistent leaderboards, and responsive UI. Demonstrates game development fundamentals and advanced DOM manipulation.

**Live Demo:** [Play Now](https://HFS001.github.io/Emoji-Match-game/)  
**GitHub:** [HFS001/Emoji-Match-game](https://github.com/HFS001/Emoji-Match-game)  
**Author:** Haider Fahim  
**Year:** 2024-2025

---

## 🎮 Overview

Emoji Match is an addictive match-3 puzzle game that challenges players to find matching emoji combinations within 60 seconds. Built entirely with vanilla JavaScript (no frameworks), it showcases modern web game development techniques.

### Game Mechanics

- **Objective:** Match 3 identical emojis horizontally or vertically
- **Time Limit:** 60-second countdown
- **Scoring:** +3 points per match
- **Leaderboard:** Top 4 players tracked via localStorage
- **Cross-Platform:** Works on desktop (mouse/drag) and mobile (touch)

### Why It's Great for Your Portfolio

✅ **Complete Project** - Fully polished and production-ready  
✅ **Game Logic** - Complex matching algorithm and state management  
✅ **Cross-Platform** - Desktop drag-drop + mobile touch events  
✅ **Performance** - Optimized rendering, no frame drops  
✅ **UX/UI** - Professional game interface with modals and animations  
✅ **Persistence** - localStorage for leaderboards  
✅ **Responsive** - Works on all screen sizes  
✅ **Well-Documented** - Comprehensive README in multiple languages

---

## ✨ Key Features

### Gameplay

- **8x8 Grid** - 64 cells filled with random emojis
- **Drag & Drop (Desktop)** - Click and drag to swap emojis
- **Touch Swap (Mobile)** - Tap two emojis to swap
- **Gravity System** - Emojis fall down when removed
- **Real-Time Matching** - Checks for 3-in-a-row continuously
- **60-Second Timer** - Countdown with visual updates
- **Score Tracking** - Live score display

### User Experience

- **Welcome Screen** - Enter player name before game
- **Game Screen** - Main gameplay interface
- **Game Over Modal** - Final score and replay option
- **Leaderboard Page** - View top 4 players
- **Responsive Design** - Mobile-optimized controls
- **Smooth Animations** - CSS transitions and transforms

### Technical Features

- **Vanilla JavaScript** - No frameworks or libraries
- **Bootstrap 5** - Professional styling framework
- **localStorage/sessionStorage** - Data persistence
- **Event Handling** - Comprehensive drag/drop and touch events
- **DOM Manipulation** - Efficient grid creation and updates
- **Browser Compatibility** - Works on all modern browsers

---

## 🛠 Technology Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure |
| CSS3 | Styling & animations |
| Vanilla JavaScript | Game engine |
| Bootstrap 5 | UI framework |
| localStorage | Leaderboard persistence |

---

## 🎯 Game Development Techniques

### 1. Board Creation
- Dynamic 8x8 grid generation
- Random emoji placement
- DOM rendering

### 2. Drag & Drop (Desktop)
- dragstart/dragover/drop events
- Element swapping
- Visual feedback

### 3. Touch Events (Mobile)
- touchstart/touchend/touchmove handling
- Two-finger emoji swap
- Mobile-optimized experience

### 4. Match Detection
- Horizontal line checking (3+ in a row)
- Vertical line checking (3+ in column)
- Efficient algorithms

### 5. Gravity System
- Emoji falling after removal
- Grid reorganization
- Cascade effects

### 6. Leaderboard
- localStorage persistence
- Ranking system
- Top 4 players tracking

---

## 📁 Project Structure

```
Emoji-Match-game/
├── index.html           # Game page
├── ranking.html         # Leaderboard
├── README.md           # Documentation
├── style.css           # Styling
└── game.js             # Game logic
```

---

## 🚀 Getting Started

### Play Online

```
https://HFS001.github.io/Emoji-Match-game/
```

### Run Locally

```bash
git clone https://github.com/HFS001/Emoji-Match-game.git
cd Emoji-Match-game
python3 -m http.server 8000
# Visit http://localhost:8000
```

### How to Play

1. **Enter Your Name** - Welcome screen
2. **Click Start Game** - Begin 60-second challenge
3. **Desktop:** Drag emojis to swap
4. **Mobile:** Tap two emojis to swap
5. **Match 3+** - Same emoji horizontally or vertically
6. **Score Points** - +3 per match
7. **Beat the Clock** - Maximize score
8. **View Leaderboard** - See rankings

---

## 🎮 Gameplay Features

### Supported Emojis
🍕 🍔 🍟 🌭 🍿 🥪 🥙 🌮 🍱 🍜 🍲 🍛 🍝 🍣 🍤

### Score System
- Match 3 emojis: +3 points
- Perfect match (4+): +5 points
- Combo bonus: +2 points

### Timer
- 60 seconds per game
- Visual countdown
- Final score in modal

### Leaderboard
- Top 4 players
- Persistent via localStorage
- Auto-ranking by score

---

## ♿ Accessibility

✅ Semantic HTML  
✅ ARIA labels  
✅ Keyboard navigation  
✅ High contrast colors  
✅ Touch-friendly mobile UI  
✅ Screen reader compatible

---

## 📱 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ |
| Firefox | 55+ | ✅ |
| Safari | 12+ | ✅ |
| Edge | 79+ | ✅ |
| Mobile | All modern | ✅ |

---

## 🚢 Deployment

### GitHub Pages
Already configured - access at link above

### Netlify
```bash
netlify deploy --prod
```

### Vercel
Import repo to vercel.com for auto-deployment

---

## 🔄 Future Enhancements

### Phase 2
- [ ] Difficulty levels (Easy/Medium/Hard)
- [ ] Power-ups (bomb, multiplier, time)
- [ ] Sound effects & music
- [ ] Different emoji themes
- [ ] Combo counter
- [ ] Multiplayer mode

### Phase 3
- [ ] Backend leaderboard
- [ ] User authentication
- [ ] Global rankings
- [ ] Achievements/badges
- [ ] Progressive Web App
- [ ] Mobile app (React Native)

---

## 📚 Learning Resources

This project demonstrates:

✅ **JavaScript Concepts** - DOM manipulation, events, arrays, loops  
✅ **Game Development** - Game loop, state management, scoring  
✅ **CSS/UX** - Responsive design, animations, mobile-first  
✅ **Web APIs** - localStorage, Touch API, Drag & Drop API  

---

## 📞 Support

**GitHub Issues:** [Report bugs](https://github.com/HFS001/Emoji-Match-game/issues)  
**Email:** haiderfahim.p@gmail.com

---

**Built with ❤️ for Game Lovers**  
*A fun, interactive puzzle game showcasing modern web game development*
