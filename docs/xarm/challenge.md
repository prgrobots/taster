---
title: Challenge — Stack the Blocks!
tags: [xarm]
---

# 🏗️ Challenge — Stack the Blocks!

<span class="badge badge-robot">Robot Arm</span>

You've got a working pick-and-place action group. Now for the real challenge:

**Can you stack the blocks into a tower — one on top of another?**

---

## The challenge

<div class="challenge-card">
  <h3>🟥 Stack 'em up!</h3>
  <p>Use your pick-and-place action group to stack blocks on top of each other in Square B.</p>
  <p>Keep going until the tower falls over!</p>
  <p><strong>How high can you go?</strong></p>
</div>

---

## What makes this tricky

Each time you add a block to the tower, it's **taller** than the last one.

That means your **"Lower to Square B"** action needs to be **a little higher** each round — you can't just run the same action group twice.

!!! info "Rough guide"
    Most blocks are about **20mm tall**. In servo value terms that's roughly **+15 to +20** on the arm's lower joints (ID 2 or ID 3) for each block added.
    You'll need to experiment — the exact value depends on your arm's position.

---

## ✅ Your mission

### Level 1 — Stack 3 blocks manually

Create **three separate action groups** — one for placing each block. Each group is identical to your pick-and-place from the lesson, except the **"Lower to Square B"** action gets slightly higher each time.

| Action group | Placing block | Lower to Square B |
|---|---|---|
| Group 1 | 1st block (on mat) | Your original Down B values |
| Group 2 | 2nd block (on top of 1st) | ID 2/3 raised by ~15–20 |
| Group 3 | 3rd block (on top of 2nd) | ID 2/3 raised by ~30–40 |

!!! note "How to create each group"
    1. Open your saved `pick-place-1` file using **"Open Action File"**
    2. Find the **"Lower to Square B"** row in the action list — double-click the servo value to edit it
    3. Raise ID 2 or ID 3 slightly
    4. Click **"Update Action"** to save the change into that row
    5. Click **"Save File"** with a new name (e.g. `pick-place-2`)
    6. Click **"Run"** to test it

---

### Level 2 — Fine-tune with "Run Single Action"

Before running the whole sequence, you can test just the place action:

1. Click the **"Lower to Square B"** row to highlight it
2. Click **"Run Single"** — only that action runs
3. Check if the arm is at the right height for the stacked block
4. Adjust if needed, then run the full group

!!! tip "If the tower keeps falling"
    - Try a longer time value (e.g. `1200 ms`) on the lower and release actions — slower = more precise
    - Make sure Square B is on a flat, stable part of the mat
    - Lower the arm until the block just touches the top of the stack before releasing

---

### Level 3 — The tower challenge 🏆

Run your action groups in order and keep adding blocks to the stack.

- How many blocks before it topples?
- Can you slow the arm down near the top for more precision?
- Can you adjust on the fly after a near-miss without starting over?

---

## 🏆 Class record

Keep track — write your best stack height on the whiteboard!

---

## What's next?

Finished stacking? Try the advanced colour sensor challenge:

👉 [Advanced — Colour Sensor](advanced.md){ .md-button .md-button--primary }
