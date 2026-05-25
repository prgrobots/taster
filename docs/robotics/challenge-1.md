---
title: Challenge 1 — Make it Move
tags: [robotics]
---

# 🏎️ Challenge 1 — Make it Move

<span class="badge badge-robot">Robotics</span>

Your first goal: write a program that makes Maqueen drive a square — **forward, turn, forward, turn, forward, turn, forward, turn**.

---

## ✅ Your checklist

- [ ] Create a new MakeCode project
- [ ] Add the Maqueen extension (if not done yet — see [Meet Maqueen](index.md))
- [ ] Make Maqueen move forward for 1 second
- [ ] Make Maqueen turn right
- [ ] Repeat until it drives a square (4 sides)
- [ ] Download to the robot and test it
- [ ] **Bonus:** Can you make it drive a triangle instead?

---

## 🧩 Blocks you need

```mermaid
flowchart LR
    subgraph maqueen ["🤖 Maqueen"]
        M1["motor all move\nForward at speed 40"]
        M2["motor all move\nBackward at speed 40"]
        M3["motor left move\nForward at speed 40"]
        M4["motor right move\nForward at speed 40"]
    end
    subgraph basic ["⚡ Basic"]
        B1["pause (ms) 1000"]
    end

    classDef mq fill:#00bcd4,stroke:#0097a7,color:#fff
    classDef ba fill:#1565c0,stroke:#0d47a1,color:#fff
    class M1,M2,M3,M4 mq
    class B1 ba
```

---

## 💡 Hint — how to turn

To turn right, drive the **left motor forward** and the **right motor backward** at the same time:

```mermaid
flowchart LR
    subgraph turn ["Turning right"]
        direction TB
        L["motor **left** → Forward"] 
        R["motor **right** → Backward"]
    end
    A["pause (ms) ~400"] --> B([robot turns ~90°])
    turn --> A
```

Play with the pause time until your turn is close to 90°.

---

## 🔗 Example code

Load this in MakeCode and modify it:

[👉 Open example code](https://makecode.microbit.org/_JrXaxVauDKww){ .md-button target="_blank" }

---

## Done? Try this bonus 🌟

!!! tip "Bonus challenge"
    Can you make the LEDs flash while the robot is moving?
    Try adding `LED left on` and `LED right on` from the Maqueen menu.

---

👉 [Challenge 2 — Avoid Obstacles](challenge-2.md){ .md-button .md-button--primary }
