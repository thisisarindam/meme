const questions = [
    "Ready for a serious question?",
    "Am I the funniest person you know?",
    "Do you overreact when mad?",
    "Will you share your food forever?",
    "Let me pick movies 100% of the time?",
    "Prepared for my bad moods?",
    "Are my hugs mandatory?",
    "Will you be my forever emergency contact?",
    "Ready to be stuck with me forever?",
    "Will you marry me?"
];

// Placeholders for background memes
const backgroundImages = [
    "https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAIw/giphy.gif",
    "https://media.giphy.com/media/3o7TKoWXm3okO1kgHC/giphy.gif"
];

let currentQuestionIndex = 0;
let bgInterval;

// DOM Elements
const cardContainer = document.getElementById('card-container');
const finaleContainer = document.getElementById('finale-container');
const bgSlider = document.getElementById('background-slider');
const dingSound = document.getElementById('ding-sound');
const romanticSong = document.getElementById('romantic-song');

// Initialize App
function init() {
    startBackgroundSlider();
    renderCard();
}

// Background Slider Logic
function startBackgroundSlider() {
    let bgIndex = 0;
    bgSlider.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
    
    bgInterval = setInterval(() => {
        bgIndex = (bgIndex + 1) % backgroundImages.length;
        bgSlider.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
    }, 4000); // Crossfade every 4 seconds
}

// Render Card
function renderCard() {
    cardContainer.innerHTML = ''; // Clear previous card
    
    if (currentQuestionIndex >= questions.length) {
        startFinale();
        return;
    }

    const card = document.createElement('div');
    card.className = 'card';
    
    const questionText = document.createElement('h2');
    questionText.textContent = questions[currentQuestionIndex];
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';
    
    const yesBtn = document.createElement('button');
    yesBtn.className = 'btn-yes';
    yesBtn.textContent = 'YES';
    yesBtn.onclick = handleYesClick;
    
    const noBtn = document.createElement('button');
    noBtn.className = 'btn-no';
    noBtn.textContent = 'NO';
    
    // Evasion Logic for NO button
    const evadeActions = ['teleport', 'shrink', 'swap'];
    
    const handleEvade = (e) => {
        e.preventDefault();
        
        // Pick a random evade action
        const action = evadeActions[Math.floor(Math.random() * evadeActions.length)];
        
        if (action === 'teleport') {
            const maxX = window.innerWidth - noBtn.offsetWidth - 20;
            const maxY = window.innerHeight - noBtn.offsetHeight - 20;
            
            const randomX = Math.max(20, Math.floor(Math.random() * maxX));
            const randomY = Math.max(20, Math.floor(Math.random() * maxY));
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
            noBtn.style.transform = 'none'; // reset previous transforms
        } else if (action === 'shrink') {
            const currentScale = noBtn.style.transform.includes('scale') 
                ? parseFloat(noBtn.style.transform.split('scale(')[1]) 
                : 1;
            const newScale = Math.max(0.3, currentScale - 0.2);
            noBtn.style.transform = `scale(${newScale})`;
        } else if (action === 'swap') {
            // Swap flex order with YES button
            if (noBtn.style.order === '-1') {
                noBtn.style.order = '1';
                yesBtn.style.order = '0';
            } else {
                noBtn.style.order = '-1';
                yesBtn.style.order = '0';
            }
        }
    };
    
    noBtn.addEventListener('mouseenter', handleEvade);
    noBtn.addEventListener('touchstart', handleEvade, {passive: false});
    noBtn.addEventListener('click', handleEvade); // Just in case they manage to click it

    buttonsDiv.appendChild(yesBtn);
    buttonsDiv.appendChild(noBtn);
    
    card.appendChild(questionText);
    card.appendChild(buttonsDiv);
    
    cardContainer.appendChild(card);
}

// Yes Button Click Logic
function handleYesClick() {
    // Play ding sound (if audio is loaded, handle play promise to avoid errors)
    dingSound.play().catch(e => console.log("Audio play prevented by browser"));
    
    const currentCard = cardContainer.querySelector('.card');
    currentCard.classList.add('swipe-out');
    
    setTimeout(() => {
        currentQuestionIndex++;
        renderCard();
    }, 500); // Wait for swipe out animation
}

// Finale Phase Logic
function startFinale() {
    clearInterval(bgInterval);
    bgSlider.style.backgroundImage = 'none';
    document.querySelector('.overlay').style.background = '#000';
    
    cardContainer.style.display = 'none';
    
    finaleContainer.classList.remove('hidden');
    // small delay to allow display block to apply before opacity transition
    setTimeout(() => {
        finaleContainer.classList.add('visible');
    }, 50);

    // Play romantic song
    romanticSong.play().catch(e => console.log("Audio play prevented by browser"));
    
    // Start particle generator
    setInterval(createParticle, 200);
}

// Particle Generator
const particleTypes = ['❤️', '🌹', '🍫', '💍'];
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.textContent = particleTypes[Math.floor(Math.random() * particleTypes.length)];
    
    // Random position and duration
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's'; // 2 to 5 seconds
    
    // Random size
    particle.style.fontSize = Math.random() * 1.5 + 1 + 'rem'; // 1rem to 2.5rem
    
    document.body.appendChild(particle);
    
    // Remove particle after animation ends
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Start app
window.onload = init;
