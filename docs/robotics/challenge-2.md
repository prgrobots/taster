---
title: Challenge 2 — Avoid Obstacles
tags: [robotics]
---

# 🚧 Challenge 2 — Avoid Obstacles

<span class="badge badge-robot">Robotics</span>

Maqueen has an **ultrasonic sensor** on the front — it sends out a sound pulse and measures how long it takes to bounce back. That tells it how far away an obstacle is.

Your challenge: make Maqueen drive forward and **automatically turn away** when it gets too close to something.

---

## ✅ Your checklist

- [ ] Open a new MakeCode project (or keep your challenge 1 code)
- [ ] Add the Maqueen extension
- [ ] Make Maqueen drive forward by default
- [ ] Read the ultrasonic sensor distance
- [ ] If distance is less than 30cm → turn left or right
- [ ] Download and test — put your hand in front of it!
- [ ] **Bonus:** Can you make it beep when it detects something?

---

## 🧩 How the ultrasonic sensor works

!!! info "Sonar — just like a bat!"
    The sensor sends out an ultrasonic pulse (too high-pitched to hear).
    It measures how long the pulse takes to return.
    Distance = speed of sound × time ÷ 2

The MakeCode block gives you the distance in **centimetres** automatically.

---

## 🧩 Blocks you need

```mermaid
flowchart LR
    subgraph maqueen ["🤖 Maqueen"]
        M1["read ultrasonic sensor\nunit cm"]
    end
    subgraph logic ["🔵 Logic"]
        L1["if ‹condition› then\n— else"]
    end
    subgraph math ["🟣 Math"]
        Ma1["pick random 0 to 1"]
    end

    classDef mq fill:#00bcd4,stroke:#0097a7,color:#fff
    classDef lo fill:#f9a825,stroke:#f57f17,color:#000
    classDef ma fill:#7b1fa2,stroke:#4a148c,color:#fff
    class M1 mq
    class L1 lo
    class Ma1 ma
```

---

## 💡 Hint — the logic

```mermaid
flowchart TD
    A([▶ forever]) --> B["distance = read ultrasonic sensor (cm)"]
    B --> C{distance &lt; 30?}
    C -- No\nclear ahead --> D["motor all move Forward"]
    D --> B
    C -- Yes\ntoo close! --> E["pick random 0 to 1"]
    E --> F{random = 0?}
    F -- Left --> G["motor left Backward\nmotor right Forward\npause 500ms"]
    F -- Right --> H["motor left Forward\nmotor right Backward\npause 500ms"]
    G --> B
    H --> B
```

---

## 🔗 Example code from the slides

This is the obstacle avoidance code from your teacher's demo:

[👉 Open obstacle avoidance code](https://makecode.microbit.org/64946-39354-43485-37140){ .md-button target="_blank" }

---

👉 [Challenge 3 — Follow a Line](challenge-3.md){ .md-button .md-button--primary }
