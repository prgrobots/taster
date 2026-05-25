---
title: Behind the scenes — Slicing
tags: [3d-printing]
---

# 🔪 Behind the scenes — Slicing

<span class="badge badge-3d">3D Printing</span>

Your teacher does this step — but it's worth knowing what's happening!

The printer can't read your STL file directly. First it needs to be **sliced** — cut into hundreds of thin layers with exact movement instructions for the nozzle.

We use **PrusaSlicer** for this. It's already set up on the teacher's computer.

---

## What PrusaSlicer does

!!! info "What PrusaSlicer is doing with your file"
    1. Loads your STL and displays it in 3D
    2. Resizes the tag to about **50mm** on its longest side
    3. Sets layer height to **0.24mm** — the sweet spot for speed + quality
    4. Generates **infill** — a grid pattern inside to save plastic while keeping it strong
    5. Calculates the exact path the nozzle travels on **every single layer**
    6. Exports a **G-code file** — a long list of movement instructions for the printer

---

## Why layer height matters

| Layer height | Print time | Quality |
|---|---|---|
| 0.10mm | ~1.5 hours ⏳ | Very fine detail |
| 0.20mm | ~45 min | Good |
| **0.24mm** | **~20 min ✅** | Great for a name tag |
| 0.30mm | ~15 min | Slightly rougher |

---

👉 [Behind the scenes — Printing](printing.md){ .md-button }
