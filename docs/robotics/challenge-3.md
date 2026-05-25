---
title: Challenge 3 — Follow a Line
tags: [robotics]
---

# ⬛ Challenge 3 — Follow a Line

<span class="badge badge-robot">Robotics</span>

Maqueen has **two line-tracking sensors** underneath. They detect whether they're over a black line or a white surface.

Your challenge: make Maqueen follow a black line on the track mat.

---

## ✅ Your checklist

- [ ] Get a track mat from your teacher
- [ ] Place Maqueen on the white area near the black line
- [ ] Write code that reads both sensors
- [ ] Program the robot to steer back onto the line when it drifts
- [ ] Download and test on the track mat
- [ ] **Bonus:** Try increasing the speed — does it still follow the line?

---

## 🧩 How the line sensors work

| Sensor reading | Meaning |
|----------------|---------|
| `0` | Sensor is over a **black line** (LED turns ON) |
| `1` | Sensor is over a **white area** (LED turns OFF) |

There are **two sensors** — left and right. Your code checks both to decide which way to steer.

---

## 💡 The steering logic

```mermaid
flowchart TD
    A([▶ forever]) --> B["read left sensor → L\nread right sensor → R"]
    B --> C{L=0 and R=0?}
    C -- Yes\nboth on line --> D["motor all Forward\nspeed 40"]
    D --> B
    C -- No --> E{L=1 and R=0?}
    E -- Yes\nleft drifted off --> F["slow left wheel\nfast right wheel\n→ steer left"]
    F --> B
    E -- No --> G{L=0 and R=1?}
    G -- Yes\nright drifted off --> H["fast left wheel\nslow right wheel\n→ steer right"]
    H --> B
    G -- No\nboth off line --> I["stop or reverse"]
    I --> B
```

---

## 🧩 Blocks you need

```mermaid
flowchart LR
    subgraph maqueen ["🤖 Maqueen"]
        M1["read left line\ntracking sensor"]
        M2["read right line\ntracking sensor"]
        M3["motor left move\nForward at speed 40"]
        M4["motor right move\nForward at speed 40"]
    end
    subgraph logic ["🔵 Logic"]
        L1["if / else if / else"]
    end

    classDef mq fill:#00bcd4,stroke:#0097a7,color:#fff
    classDef lo fill:#f9a825,stroke:#f57f17,color:#000
    class M1,M2,M3,M4 mq
    class L1 lo
```

---

## 🔗 Example code from the slides

[👉 Open line following code](https://makecode.microbit.org/13062-30541-09778-88218){ .md-button target="_blank" }

!!! tip "Modified version (from the slides)"
    The code in the slides uses speed **40** for the fast wheel and **10** for the slow wheel to make smoother turns. Start with this and adjust from there.

---

## 🌟 You've completed all 3 challenges!

Nice work — you've programmed a robot to move, sense, and react to the world around it.

That's the core of **robotics engineering**.

👉 [Free Choice — what's next?](../free-time.md){ .md-button .md-button--primary }
