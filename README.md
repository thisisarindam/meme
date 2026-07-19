# Romantic Proposal Web App - LLM Coding Agent Prompt & Plan

## Project Overview
A romantic and humorous interactive web application designed to propose to or impress a girlfriend/future wife. The application features a sequence of 10 popup question cards, evasive "NO" buttons, funny/romantic background memes, and a grand romantic finale.

---

## 🛠️ Prompt for LLM Coding Agent

**Copy and paste the text below to your LLM Coding Agent:**

> **Role:** You are an expert web developer specializing in interactive, highly engaging, and aesthetically pleasing front-end web applications using HTML, CSS, and JavaScript.
> 
> **Task:** Build a romantic and funny interactive website for my girlfriend/would-be wife. 
> 
> **Technical Stack:** HTML5, CSS3 (Vanilla, animations), JavaScript (Vanilla). No complex frameworks needed unless beneficial for animations.
> 
> **Core Requirements & Features:**
> 
> 1.  **Overall Theme & Background:**
>     *   The background should dynamically display running, funny, and romantic memes/GIFs.
>     *   The UI should be modern, glassmorphic, and visually stunning (premium feel).
> 
> 2.  **The Cards (The Core Interaction):**
>     *   The app must present a series of 10 popup cards, one at a time.
>     *   Each card contains a single romantic yet funny question.
>     *   Each card has two buttons: **[YES]** and **[NO]**.
> 
> 3.  **The "NO" Button Evasion Logic (Crucial):**
>     *   The user MUST select "YES" for every question.
>     *   If she tries to click or hover over the "NO" button, it must playfully evade her. 
>     *   *Implementation Ideas:* The button teleports to a random location on the screen, shrinks, moves impossibly fast, or changes its text to something funny (e.g., "Nice try!", "Are you sure?", "Error 404: No not found").
> 
> 4.  **Progression:**
>     *   Only when the "YES" button is successfully clicked does the current card fade out and the next card pops up.
> 
> 5.  **The Grand Finale (After Card 10):**
>     *   Once the 10th "YES" is clicked, clear the screen of cards.
>     *   Display a beautiful, glowing, high-quality virtual wedding ring in the center of the screen.
>     *   Trigger a massive particle animation of hearts, roses, and chocolates floating all over the screen.
>     *   Autoplay a predefined romantic background song (ensure audio plays correctly, potentially requiring user interaction to start, which the first button click handles).
> 
> **Design Guidelines:**
> *   Use smooth transitions and micro-animations for card popups.
> *   Make the typography beautiful (e.g., Google Fonts like 'Dancing Script' or 'Inter').
> *   Ensure the layout is perfectly responsive on mobile devices, as she might open it on her phone.

---

## 🏗️ Implementation Plan & Architecture

### 1. File Structure
*   `index.html`: Main structure, audio tags, canvas for particles.
*   `style.css`: Glassmorphism styles, button hover effects, animations.
*   `script.js`: Card progression logic, "NO" button evasion math, particle system initialization.
*   `assets/`: Directory for meme images, ring image, and audio files.

### 2. State Management (script.js)
*   An array of 10 objects holding the questions.
*   `currentCardIndex` variable to track progress.

### 3. The "NO" Button Logic (script.js)
*   Attach a `mouseover` and `touchstart` event listener to the "NO" button.
*   On trigger, calculate a random `x` and `y` coordinate within the viewport boundaries (subtracting button width/height to avoid overflowing).
*   Apply `transform: translate(x, y)` via CSS for smooth movement.

### 4. The Finale Animation
*   Use a lightweight JavaScript particle library (like `canvas-confetti` or a custom `requestAnimationFrame` loop) to spawn hearts and roses.
*   Fade in the `<audio>` element to play the song.
*   Reveal the hidden `#finale-container` containing the glowing ring image.

### 5. Content Ideas (The 10 Questions)
1. Are you ready for a serious question?
2. Do you agree that I'm the funniest guy you know?
3. Are you aware that you look incredibly cute when you're mad?
4. Will you share your fries with me forever?
5. Do you promise to let me pick the movie at least 10% of the time?
6. Are you prepared for endless bad puns?
7. Do you accept that my hugs are mandatory?
8. Will you be my emergency contact?
9. Are you ready to be stuck with me?
10. Will you marry me? (The ultimate question)
