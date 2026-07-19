# Proposal App - LLM Prompt & Plan

**Copy/paste this prompt to your LLM:**

> **Task:** Build an interactive, romantic, and humorous web app.
> **Tech:** HTML, CSS, Vanilla JS. Glassmorphic UI.
> 
> **Core Features:**
> 1. **Background:** Dynamic, funny, and romantic memes/GIFs.
> 2. **Interaction:** 10 sequential popup cards. Each has a question and [YES] / [NO] buttons.
> 3. **Evasive [NO]:** The user MUST click [YES]. The [NO] button must evade interaction (e.g., teleport, move fast, shrink) when hovered or tapped.
> 4. **Progression:** Clicking [YES] fades to the next card.
> 5. **Finale (After Card 10):** Display a glowing virtual wedding ring. Trigger particle animation (hearts, roses, chocolates) and autoplay a romantic song.
> 
> **Design:** Responsive, smooth animations, premium typography.

---

### Implementation Plan

**Structure:**
- `index.html`: Structure, audio, canvas.
- `style.css`: Glassmorphism, animations.
- `script.js`: Card logic, NO button evasion math, finale trigger.
- `assets/`: Memes, ring image, audio.

**Evasion Logic (JS):**
- On `mouseover`/`touchstart` for [NO] button, calculate random `x/y` within viewport bounds and apply `transform: translate(x, y)`.

**10 Question Ideas:**
1. Ready for a serious question?
2. Am I the funniest person you know?
3. Do you overreact when mad?
4. Will you share your food forever?
5. Let me pick movies 100% of the time?
6. Prepared for my bad moods?
7. Are my hugs mandatory?
8. Will you be my forever emergency contact?
9. Ready to be stuck with me forever?
10. Will you marry me?
