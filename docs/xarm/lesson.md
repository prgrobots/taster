---
title: Lesson — Fixed-Point Motion
tags: [xarm]
---

# 🧩 Lesson — Fixed-Point Motion

<span class="badge badge-robot">Robot Arm</span>

In this lesson you'll program the xArm 2.0 to move to **exact positions** in space. This is called **fixed-point motion** — the arm goes to a set of X, Y, Z coordinates you tell it.

This is how real industrial robots work: you teach the arm the positions, then it repeats them reliably every time.

---

## What you'll build

A program that moves the arm through **three positions**:

1. **Home** — a safe neutral position above the mat
2. **Pick** — above Square A on the mat (where a block is)
3. **Place** — above Square B on the mat (where you want it)

---

## ✅ Step 1 — Open the starter file

!!! note "Load the example"
    1. Open **WonderCode** and connect the arm (see [Meet xArm 2.0](index.md))
    2. Go to **File → Open**
    3. Navigate to the lesson folder your teacher has set up, and open  
       `Fixed-Point Motion.sb3`
    4. You should see a short example program already in the script area

Take a moment to read through the blocks — don't run it yet!

---

## ✅ Step 2 — Understand the blocks

```mermaid
flowchart LR
    subgraph motion ["🦾 Motion"]
        Mo1["move arm to\nX:__ Y:__ Z:__"]
        Mo2["set speed to __\n(1 – 100)"]
    end
    subgraph gripper ["✋ Gripper"]
        G1["open gripper"]
        G2["close gripper"]
    end
    subgraph timing ["⏱ Timing"]
        T1["wait __ seconds"]
    end

    classDef mo fill:#00897b,stroke:#00695c,color:#fff
    classDef gr fill:#e53935,stroke:#b71c1c,color:#fff
    classDef ti fill:#1565c0,stroke:#0d47a1,color:#fff
    class Mo1,Mo2 mo
    class G1,G2 gr
    class T1 ti
```

!!! tip "Always add a wait after each move"
    The arm needs time to reach the target position before the next block runs.
    Add a `wait 1 second` block after every move.

---

## ✅ Step 3 — Find your coordinates

You need to find the X, Y, Z coordinates for **Square A** and **Square B** on your placemat.

!!! note "How to find a coordinate"
    1. In WonderCode, click the **Manual Control** panel
    2. Use the sliders or arrow buttons to move the arm tip to hover over Square A
    3. Read off the X, Y, Z values shown on screen — write them down!
    4. Do the same for Square B

Your coordinates will be slightly different depending on where the mat is positioned — that's fine.

| Position | Approx. X | Approx. Y | Approx. Z (hover) | Z (down to pick) |
|---|---|---|---|---|
| Home | 0 | 150 | 200 | — |
| Square A hover | ___ | ___ | 150 | ___ |
| Square B hover | ___ | ___ | 150 | ___ |

---

## ✅ Step 4 — Build your first program

Build this sequence in WonderCode — each box below is one block:

```mermaid
flowchart TD
    A([🚩 when green flag clicked]) --> B[set speed to 50]
    B --> C[open gripper]
    C --> D["move arm to X:0  Y:150  Z:200"]
    D --> D2([🏠 Home — safe start position]):::label
    D --> E[wait 1 second]
    E --> F["move arm to X:__ Y:__ Z:150"]
    F --> F2([⬆️ Hover above Square A]):::label
    F --> G[wait 1 second]
    G --> H["move arm to X:__ Y:__ Z:__"]
    H --> H2([⬇️ Lower to block in Square A]):::label
    H --> I[wait 0.5 seconds]
    I --> J[close gripper]
    J --> K[wait 0.5 seconds]
    K --> L["move arm to X:__ Y:__ Z:150"]
    L --> L2([⬆️ Lift block up]):::label
    L --> M[wait 1 second]
    M --> N["move arm to X:__ Y:__ Z:150"]
    N --> N2([⬆️ Hover above Square B]):::label
    N --> O[wait 1 second]
    O --> P["move arm to X:__ Y:__ Z:__"]
    P --> P2([⬇️ Lower into Square B]):::label
    P --> Q[wait 0.5 seconds]
    Q --> R[open gripper]
    R --> S[wait 0.5 seconds]
    S --> T["move arm to X:0  Y:150  Z:200"]
    T --> T2([🏠 Return to Home]):::label

    classDef label fill:#f0f4ff,stroke:#aac,color:#444,font-style:italic
```

Fill in the `__` values with the coordinates you found in Step 3.

!!! warning "Always end at Home"
    Finishing at the Home position means the arm is safe and out of the way.
    Never end a program with the arm hanging over the mat.

---

## ✅ Step 5 — Test it!

1. Click the **green flag** to run your program
2. Watch the arm — does it go where you expect?
3. If it misses the block, adjust the Z value (lower = closer to the mat)
4. Fine-tune until the arm picks up the block cleanly

!!! tip "Tweaking Z height"
    - Too high: gripper closes but misses the block
    - Too low: arm scrapes the mat
    - Right: gripper just closes around the sides of the block

---

## ✅ Done! What's next?

You've got a working pick-and-place program. Now try the extension challenge:

👉 [Challenge — Stack the Blocks!](challenge.md){ .md-button .md-button--primary }
